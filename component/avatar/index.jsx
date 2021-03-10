import style from "./avatar.module.scss"

export default function MyAvatar({src, size, type = "circle"}) {

  const autoStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: type == "circle" ? "50%" : "10px"
  }

  return(
    <div className={style.avatar} style={autoStyle}>
      <img src={src} />
    </div>
  )
}