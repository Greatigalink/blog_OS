import style from "./pagination.module.scss"
import { useState } from "react"
import { Icon } from "../export"

const nowPageStyle = {
  backgroundColor: "#fb8c00",
  color: "white"
}
const isLeftOrRight = {
  display: "none"
}
const createDisplayPage = function (nowPage, pageDisplay, pages) {
  if (nowPage == 0) {
    return []
  }
  let cursor = nowPage - Math.floor(pageDisplay / 2), i = 0, result = [];
  while (i < pageDisplay && cursor <= pages) {
    if (cursor > 0) {
      result.push(cursor);
      i++;
    }
    cursor++;
  }
  return result;
}

const clickPage = function (nowPage, setNowPage, onclickPage) {
  onclickPage(nowPage)
  setNowPage(nowPage);
}

export default function Pagination({ total = 0, pageSize = 0, pageDisplay = 0, onclickPage = () => null }) {

  let pages = Math.ceil(total / pageSize);
  let [nowPage, setNowPage] = useState(pages > 0 ? 1 : 0);
  let displayPage = createDisplayPage(nowPage, pageDisplay, pages);

  return (
    <div className={style.pagination}>
      <aside style={nowPage == 1 ? isLeftOrRight : {}} onClick={() => clickPage(nowPage - 1, setNowPage, onclickPage)}>
        <Icon
          iconName={"left"}
          size={14}
        ></Icon>
      </aside>
      <ul>
        {
          displayPage.map(
            (item) =>
              <li
                key={item}
                style={nowPage == item ? nowPageStyle : {}}
                onClick={() => clickPage(item, setNowPage, onclickPage)}
              >{item}</li>
          )
        }
      </ul>
      <aside style={nowPage == pages ? isLeftOrRight : {}} onClick={() => clickPage(nowPage + 1, setNowPage, onclickPage)}>
        <Icon
          iconName={"right"}
          size={14}
        ></Icon>
      </aside>
    </div>
  )
}