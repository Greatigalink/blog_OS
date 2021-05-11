import style from "./classify.module.scss";
import {
  getClassify,
  getTestClassify,
  getClassifyList,
  getTestClassifyList,
  dayOrNight
} from "../../api/export";
import { useSelector } from "react-redux";
import { useState } from "react";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("../../component/nav/index"));
const BackTop = dynamic(() => import("../../component/back_top/index"));
const Footer = dynamic(() => import("../../component/footer/index"));
const Pagination = dynamic(() => import("../../component/pagination/index"));

const List = dynamic(() => import("../../page-component/classify/list/index"));

const noClassify = {
  art_classify: "NO1",
  class_name: "未知",
  class_intro: "你居然来到了一个根本不存在的分类，快逃!!",
  class_img: [],
};

const getStore = () =>
  useSelector((state) => ({
    clock: state.basicState.clock,
  }));

const aHref = function (href) {
  window.location.href = `/post/${href}`;
};

const clickPage = function (nowPage, classifyList, setDisplayList) {
  let start = (nowPage - 1) * 9;
  let end = nowPage * 9;
  setDisplayList([].concat(classifyList.slice(start, end)));
};

export async function getServerSideProps(context) {
  let art_classify = context.query.art_classify;
  console.log(context.query)
  let classify = await getTestClassify([1]);
  let classifyList = await getTestClassifyList([20, 100]);
  return {
    props: {
      art_classify,
      classify,
      classifyList,
    },
  };
}

export default function Classify({ art_classify, classify, classifyList }) {
  let total = classifyList.length || 1;
  let [ displayList, setDisplayList ] = useState(classifyList.slice(0, 9));
  let { clock } = getStore();

  return (
    <div className={style.classify}>
      <header>
        <img src={classify.class_img}/>
        <div className={style.classify_cover}>
          <h1>{classify.class_name}</h1>
          <p>{classify.class_intro || "一个没有简介的分类"}</p>
        </div>
      </header>

      <main
        className={style.classify_main}
        style={dayOrNight("classify", clock)}
      >
        <ul className={style.classify_list}>
          {displayList.map((item, index) => (
            <li key={index} onClick={() => aHref(item.art_id)}>
              <List list={item}></List>
            </li>
          ))}
        </ul>
        <footer className={style.classify_page}>
          <Pagination
            total={total}
            pageDisplay={5}
            pageSize={9}
            onclickPage={(nowPage) =>
              clickPage(nowPage, classifyList, setDisplayList)
            }
          ></Pagination>
        </footer>
      </main>

      <Footer clock={clock}></Footer>

      <Nav nowNav={`/classify/${art_classify}`}></Nav>
      <BackTop></BackTop>
    </div>
  );
}
