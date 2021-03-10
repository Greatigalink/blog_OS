import style from "./navlist.module.scss"
import { useState } from "react"
import { Icon } from "../export"

const navListStyle = {
  "pc": "nav_list_pc",
  "mobile": "nav_list_mobile"
}

const navListMoreStyle = {
  "pc": "nav_list_more_pc",
  "mobile": "nav_list_more_mobile"
}

const nowNavStyle = function (href, nowNav) {
  if (href == nowNav) {
    return {
      color: "#00bcd4"
    }
  } else {
    return {}
  }
}

const displayOneNav = function (item, index, nowNav) {
  return (
    <aside key={index} style={nowNavStyle(item.href, nowNav)}>
      <a href={item.href}>{item.name}</a>
    </aside>
  )
}

const displayChildNav = function (item, index, nowNav, type, dayOrNightStyle) {

  const [more, setMore] = useState(false);

  return (
    <aside className={style[navListMoreStyle[type]]} key={index}>
      <div>{item.name}</div>
      <ul style={dayOrNightStyle}>
        {
          item.children.map((item_child, index) => (
            <li key={index}>
              <a  href={item_child.href} style={nowNavStyle(item_child.href, nowNav)}>{item_child.name}</a>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default function NavList({ navList, nowNav, type = "pc", dayOrNightStyle }) {
  return (
    <div className={style[navListStyle[type]]}>
      {
        navList.map((item, index) => item.children 
        ? displayChildNav(item, index, nowNav, type, dayOrNightStyle) 
        : displayOneNav(item, index, nowNav))
      }
    </div>
  )
}