import style from "./slide_show.module.scss"
import { useState } from "react"
import { Icon } from "../export"

const move = (start, end, setMarginLeft) => new Promise((reslove, reject) => {
  let i = 0;
  let d = (end - start) / 100;
  let now = start;
  let timer = setInterval(() => {
    if (i > 99) {
      clearInterval(timer)
    } else {
      i++;
      now += d;
      setMarginLeft(now);
    }
  }, 5)
})

const moveImage = async (nowPage, nextPage, setPage, width, setMarginLeft) => {
  let end = - nextPage * width
  move(-nowPage * width, end, setMarginLeft);
  setPage(nextPage);
}

const isHidden = function (direction, page, numbers) {
  let hiddenStyle = {
    display: "none",
  }
  if (direction == "left" && page == 0) return hiddenStyle;
  if (direction == "right" && page == numbers - 1) return hiddenStyle;
  return;
}

export default function SlideShow({ array, width, height }) {
  const numbers = array.length;
  const ulWidth = width * numbers;
  const [marginLeft, setMarginLeft] = useState(0);
  const [page, setPage] = useState(0);
  const ulStyle = {
    width: `${ulWidth}px`,
    height: `${height}px`,
    marginLeft: `${marginLeft}px`
  }
  const footerList = [];

  for (let i = 1; i <= numbers; i++) {
    footerList.push(i);
  }

  return (
    <div className={style.slide_show}>
      <ul style={ulStyle}>
        <section>
          <aisde
            onClick={() => moveImage(page, page - 1, setPage, width, setMarginLeft)}
            style={isHidden("left", page, numbers)}
            className={style.slide_show_direction}
          >
            <Icon
              iconName={"L"}
              size={30}
              color={"#212121"}
            ></Icon>
          </aisde>
          <aside
            onClick={() => moveImage(page, page + 1, setPage, width, setMarginLeft)}
            style={isHidden("right", page, numbers)}
            className={style.slide_show_direction}
          >
            <Icon
              iconName={"R"}
              size={30}
              color={"#212121"}
            ></Icon>
          </aside>
        </section>
        {array.map((item, index) => (
          <li key={index} style={{ width: `${width}px`, height: `${height}px` }}>
            <img src={item} />
          </li>
        ))}
      </ul>
      <aside className={style.slide_show_footer}>
        <ul>
          {footerList.map((item) => 
            <li 
              onClick={() => moveImage(page, item - 1, setPage, width, setMarginLeft)}
              style={item == page + 1 ? {backgroundColor: "#00acc1", color: "white"} : {}} 
              key={item}>{item}
            </li>
          )}
        </ul>
      </aside>
    </div>
  )
}