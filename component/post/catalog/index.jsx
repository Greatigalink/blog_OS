import styles from "./catalog.module.scss";
import { useEffect, useState } from "react"
import { cutWord } from "../../../api/export";
import { useSelector, shallowEqual } from "react-redux"
 
const now_style = {
  color: "#ef6c00",
  fontWeight: "bold",
}
const scrollStyle = [
  {
    postition: "absolute",
    top: "200px",
    left: "0",
    marginTop: "100px",
    display: "none"
  },
  {
    position: "fixed",
    top: "200px",
    left: "0"
  }
]
let catalogSection = null;
let oldTop = 0;

//改变目录样式，确保只在内容区出现
const changeStyle = function(top) {
  if(top < 230 || top > catalogSection[catalogSection.length - 1]) {
    return 0;
  } else {
    return 1;
  }
}

//页面滚动时更据区间值判断并实时更新当前锚点
const changeAdLi = function(setNowLi, top) {
  for (let i = 0; i < catalogSection.length; i++) {
    if (top > catalogSection[i]) {
      continue;
    } else {
      setNowLi(i);
      return;
    }
  }
}

//点击标题进行锚点跳转，并下移60防止被导航遮住
const clickTitle = function (index, setNowLi) {
  setNowLi(index);
  setTimeout(() => {
    window.scrollBy(0, -60);
  }, 10);
}

const getScrollTop = () => {
  return useSelector(
    (state) => ({
      scrollTop: state.basicState.scrollTop
    }), 
    shallowEqual
  )
}

export default function CatLog({ array, section }) {

  //当前锚点序号
  const [now_li, setNowLi] = useState(0);
  //获取滚动距离
  const { scrollTop } = getScrollTop();
  //将各级标题距顶距离数组赋值给该组件的全局变量
  catalogSection = section;

  useEffect(() => {
    if(oldTop - scrollTop != 0) {
      oldTop = scrollTop;
      changeAdLi(setNowLi, scrollTop);
    }
  })

  return (
    <div className={styles.catalog} style={scrollStyle[changeStyle(scrollTop)]}>
      <ul>
        {
          array.map((item, index) =>
            <li key={index} style={index == now_li ? now_style : {}} className={styles[item.tagName]}>
              <a href={`#${item.href}`} onClick={() => clickTitle(index, setNowLi)}>{cutWord(item.href, 15, "...")}</a>
            </li>
          )
        }
      </ul>

    </div>
  )
}