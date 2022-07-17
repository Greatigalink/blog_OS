import style from "./footer.module.scss"
import { useState, useEffect } from "react"
import { BinaryLable, Icon } from "../export"
import { dayOrNight, TextLink, Time } from "../../api/export"

const ICP = "<:京ICP备XXXXXXXXX号|http://beian.miit.gov.cn/:>"

const callMe = [
  { icon: "qq", href: "" },
  { icon: "wechat", href: "" },
  { icon: "github", href: "https://github.com/Greatigalink" }
]

export default function Footer({ clock }) {

  let [timed, setTimed] = useState(null);

  useEffect(() => {
    if(timed == null) {
      Time("2020/9/1 08:35:37", setTimed);
    }
  })

  return (
    <div className={style.footer} style={dayOrNight("footer", clock)}>
      <article>
        <aside>
          <strong>Thanks for Aliyun</strong>
          <Icon iconName={"Aly"} size={20} href={"https://www.aliyun.com/"} target={"_blank"} />
        </aside>
        <aside>
          <BinaryLable name={"version"} size={13} content={"3.0.0"} colorLeft={"#ff9800"} colorRight={"#26c6da"} color={"white"} />
        </aside>
        <p>2020-2021 © XXX All Right Reserved</p>
        <p>从V1.0.0 诞生至今已经累计运行 {timed}</p>
        <p dangerouslySetInnerHTML={{ __html: TextLink(ICP) }}></p>
      </article>
      <footer>
        {callMe.map((item, index) => (
          <aside key={index}>
            <Icon iconName={item.icon} size={25} href={item.href} target={"_blank"} />
          </aside>
        ))}
      </footer>
    </div>
  )
}