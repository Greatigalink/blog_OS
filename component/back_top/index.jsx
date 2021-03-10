import style from "./backtop.module.scss";
import { UpOutlined } from "@ant-design/icons"
import { Scroll } from "../../api/export"
import { useSelector, shallowEqual } from "react-redux"

const getStore = function() {
  return useSelector(
    (state) => ({
      scrollTop: state.basicState.scrollTop
    }),
    shallowEqual
  )
}

const click = () => {
  Scroll(0);
}

const isDisplay = (scrollTop) => scrollTop > 470 ? {} : {display: "none"}

export default function BackTop() {
  const { scrollTop } = getStore();
  return(
    <div className={style.back_top} onClick={click} style={isDisplay(scrollTop)}>
      <UpOutlined></UpOutlined>
    </div>
  )
}