import style from "./message.module.scss"
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("../icon/index"));
const getMessageColor = (type) => {
  let color = '#9e9e9e'
  switch(type) {
    case 'info': color = '#26c6da'; break;
    case 'success': color = '#8bc34a'; break;
    case 'error': color = '#ef5350'; break;
    case 'warning': color = '#ffa726'; break;
  }
  return color
}

export default function Message({ type, text }) {
  return(
    <div className={style.message}>
      <header>
        <Icon
          iconName={type}
          color={getMessageColor(type)}
          size={16}
        ></Icon>
      </header>
      <article>{text}</article>
    </div>
  )
}