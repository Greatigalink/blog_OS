import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import style from "./post.module.scss";
import {
  getOneArticle,
  getOneTestArticle,
  mdToHtml,
  createAD,
  Type,
  cutWord,
  dayOrNight
} from "../../api/export";

import dynamic from "next/dynamic"

const MarkDown = dynamic(() => import("../../component/post/markdown/index"))
const CataLog = dynamic(() => import("../../component/post/catalog/index"))
const Declare = dynamic(() => import("../../component/post/declare/index"))
const Icon = dynamic(() => import("../../component/icon/index"))
const Nav = dynamic(() => import("../../component/nav/index"))
const BackTop = dynamic(() => import("../../component/back_top/index"))
const Footer = dynamic(() => import("../../component/footer/index"))

const noArticle = {
  art_id: "000",
  art_user_id: "0XXX",
  art_time: "1999-06-05",
  user_name: "--",
  art_title: "丢失了~",
  art_intro: "换个文章Id看看？",
  art_classify: "NO1",
  art_content:  `
  ## 没有找到对应文章
  
  > 请刷新重试
  `
}

const getStore = function() {
  return useSelector(
    (state) => ({
      clock: state.basicState.clock
    })
  )
}

export async function getServerSideProps(context) {
  let art_id = context.query.art_id;
  let article = await getOneTestArticle([1]);
  //let article = await getOneArticle(art_id);
  article = Type(article) == "object" ? article : noArticle;

  let content = await mdToHtml(article.art_content);
  return {
    props: {
      art_id,
      article,
      content,
    },
  };
}

export default function Post({art_id, article, content }) {
  const [ad, setAd] = useState([]);
  const { clock } = getStore();
  const [ catalogSection, setcatalogSection ] = useState([]);
  const headBack = {
    background: `url(${article.art_img})`,
    backgroundSize: "cover"
  };

  useEffect(() => {
    let doc = document.querySelector("#markdown");
    let { result, scroll_obj } = createAD(doc);
    if (ad.length == 0) {
      setAd([...result]);
      setcatalogSection([...scroll_obj]);
    }
  });

  return (
    <div className={style.post}>
      <header className={style.post_head} style={headBack}>
        <div className={style.post_head_text}>
          <h1>{article.art_title}</h1>
          <Icon
            iconName={"user"}
            location={"right"}
            text={article.user_name}
            size={17}
            href={`/user/${article.art_user_id}`}
            color={"#80deea"}
          ></Icon>
          <br></br>
          <p>{article.art_intro}</p>
          <section>
            <Icon
              iconName={"calendar"}
              location={"right"}
              text={cutWord(article.art_time, 10, "")}
              size={15}
              fontFamily={"AqumCap"}
            ></Icon>
            <Icon
              iconName={"classify"}
              location={"right"}
              text={article.class_name}
              size={15}
              href={`/classify/${article.art_classify}`}
              color={"#80deea"}
              fontFamily={"AqumCap"}
            ></Icon>
          </section>
        </div>
        <footer>
          <Icon
            iconName={"eyes"}
            text={article.art_view}
            location={"bottom"}
            color={"#212121"}
            size={15}
          ></Icon>
        </footer>
      </header>

      <main className={style.post_main} style={dayOrNight("post", clock)}>
        <aside title={"post_ad"}>
          <CataLog array={ad} section={catalogSection}></CataLog>
        </aside>
        <article>
          <MarkDown content={content} clock={clock}></MarkDown>
          <h2 title={"thinks"}>END--感谢阅读</h2>
          <Declare
            userName={article.user_name}
            user_id={article.art_user_id}
            href={`/post/${article.art_id}`}
          ></Declare>
        </article>
        <section></section>
      </main>

      <Footer clock={clock} />
      <Nav nowNav={`/post/${art_id}`}></Nav>
      <BackTop></BackTop>
    </div>
  );
}
