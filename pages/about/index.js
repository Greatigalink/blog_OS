import style from "./about.module.scss";
import { dayOrNight, TextLink } from "../../api/export"
import { useSelector } from "react-redux"
import dynamic from "next/dynamic"

const Nav = dynamic(() => import("../../component/nav/index"))
const BackTop = dynamic(() => import("../../component/back_top/index"))
const Footer = dynamic(() => import("../../component/footer/index"))

const author = [
  {
    title: "WebSite Introdution",
    content:
      "一个分享技术文章的小屋，当然其他文章也非常支持，同时也欢迎各位伙伴到这里发布你的文章！",
  },
  {
    title: "Technical Support",
    content:
      "目前版本主要由<:Next.js|https://www.nextjs.cn/:>驱动，之前的版本也使用过其他技术，感兴趣可以去<:建站历史|http://localhost:3000/record/buildHistory:>查看",
  },
  {
    title: "Developer",
    content:
      "目前的主要开发工作由 Greatiga 完成，这是作者的<:技术博客|https://greatigalink.github.io/:>，欢迎访问！",
  },
];


const getStore = function() {
  return useSelector(
    (state) => ({
      clock: state.basicState.clock
    })
  )
}

export default function About() {
  const { clock } = getStore();
  return (
    <div className={style.about}>
      <div className={style.about_cover}>
        <main className={style.about_main} style={dayOrNight("about", clock)}>
          <ul>
            {author.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: TextLink(item.content) }}
                ></p>
              </li>
            ))}
          </ul>
          <section>
          </section>
        </main>
        <Footer clock={clock} />
      </div>
      <Nav type={"about"} nowNav={"/about"}></Nav>
      <BackTop></BackTop>
    </div>
  );
}
