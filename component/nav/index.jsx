import style from "./nav.module.scss";
import { useSelector, useDispatch, shallowEqual } from "react-redux"
import { setClock } from "../../store/action"
import { Icon } from "../export"
import NavList from "./navList"
import { dayOrNight } from "../../api/export";
import { useState } from "react"

const navLists = [
  {
    name: "首页",
    href: "/"
  },
  {
    name: "程序技术",
    children: [
      {
        name: "前端基础",
        href: "/classify/SD1"
      },
      {
        name: "Vue.js",
        href: "/classify/PD1"
      },
      {
        name: "React.js",
        href: "/classify/LD1"
      }
    ]
  },
  {
    name: "更多文章",
    children: [
      {
        name: "影视",
        href: "/classify/LD1"
      },
      {
        name: "音乐",
        href: "/classify/XD1"
      },
      {
        name: "好文刊",
        href: "/classify/MD1"
      },
    ]
  },
  {
    name: "足迹",
    children: [
      {
        name: "回忆录",
        href: "/record/build-history"
      },
      // {
      //   name: "点滴",
      //   href: "/record/diary"
      // }
    ]
  },
  {
    name: "功能体验",
    children: [
      {
        name: "你的余生",
        href: "/function/your-life"
      },
    ]
  },
  {
    name: "友链",
    href: "/link"
  },
  {
    name: "关于",
    href: "/about"
  }
]

const getNightStyle = (scrollTop, type) => {
  let nightStyle = {
    backgroundColor: "",
    color: "#bdbdbd"
  }
  if (scrollTop == 0 && type == null) {
    nightStyle.backgroundColor = "";
  } else {
    nightStyle.backgroundColor = "#212121";
  }
  return nightStyle;
}

const isPcOrMobile = function (docWidth) {
  return docWidth > 1024 ? true : false;
}

const moveNavStyle = function (nowTop, type) {
  let className = "nav_none";
  if (nowTop <= 10 && type == null) {
    className = "nav_on_top";
  } else {
    className = "nav_on_move";
  }
  return className;
}

const getStore = function () {
  return useSelector(
    (state) => ({
      scrollTop: state.basicState.scrollTop,
      docWidth: state.basicState.docWidth,
      clock: state.basicState.clock
    }),
    shallowEqual
  )
}

const changeTime = function (nowClock, dispatch) {
  const clock = (nowClock == "daytime") ? "night" : "daytime";
  localStorage.setItem("clock", clock)
  dispatch(setClock(clock));
}

const mobildNav = function (navLists, close, setClose, nowNav, clock) {
  return (
    <div className={style.nav_mobile}>
      <aside onClick={() => close ? setClose(false) : setClose(true)}>
        <Icon iconName={close ? "close" : "hideNav"} size={25}></Icon>
      </aside>
      {
        close ?
          <section style={dayOrNight("navList", clock)} >
            <NavList navList={navLists} type={"mobile"} nowNav={nowNav} dayOrNightStyle={dayOrNight("navList", clock)} />
          </section> :
          <></>
      }
    </div>
  )
}

export default function Nav({ nowNav, type = null }) {

  const { scrollTop, docWidth, clock } = getStore();
  const dispatch = useDispatch();
  const [close, setClose] = useState(false);

  return (
    <div className={style[moveNavStyle(scrollTop, type)]} style={clock == "night" ? getNightStyle(scrollTop, type) : {}}>
      <nav className={style.nav}>

        <header title="nav_logo"></header>

        <nav className={style.nav_main}>
          {
            isPcOrMobile(docWidth)
              ? <NavList navList={navLists} type={"pc"} nowNav={nowNav} dayOrNightStyle={dayOrNight("navList", clock)} />
              : mobildNav(navLists, close, setClose, nowNav, clock)
          }
        </nav>

        <footer className={style.nav_right}>
          <aside onClick={() => changeTime(clock, dispatch)}>
            <Icon
              iconName={clock}
              location={"right"}
              size={20}
            >
            </Icon>
          </aside>
        </footer>

      </nav>
    </div>
  )
}