import style from "./binary_label.module.scss"

export default function BinaryLabel ({ name, content, color, colorLeft, colorRight, size }) {
  return (
    <div className={style.binary_label} style={{ fontSize: `${size}px`, color: color }}>
      <section style={{ backgroundColor: colorLeft }}>{name}</section>
      <section style={{ backgroundColor: colorRight }}>{content}</section>
    </div>
  )
}