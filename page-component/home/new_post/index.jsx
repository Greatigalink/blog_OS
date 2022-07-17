import style from './new_post.module.scss'
import dynamic from "next/dynamic";
import { cutWord } from "../../../api/export"

const Avatar = dynamic(() => import("../../../component/avatar/index"))
const Icon = dynamic(() => import("../../../component/icon/index"))

export default function NewPost({ article, dayOrNightStyle = {} }) {
  const userMsg = article.user_msg || {}
  const classifyMsg = article.class_msg || {}
  const userHref = article.art_user_id ? `/user/${article.art_user_id}` : null
  const artHref = article.art_id ? `/post/${article.art_id}` : ""
  const classifyHref = article.art_classify ? `/classify/${article.art_classify}` : null
  const artImg = article.art_img || "https://z3.ax1x.com/2021/02/08/yUPnVx.jpg"
  const artTime = article.art_time ? cutWord(article.art_time, 10, "") : ""
  const headBack = {
    background: `white url(${artImg}) no-repeat center /cover`,
  };

  return (
    <div className={style.home_newPost} style={headBack}>

      <a href={artHref} target="_self" className={style.home_newPost_background}>
        <div></div>
      </a>

      <article className={style.home_newPost_main} style={dayOrNightStyle}>
        <header>{cutWord(article.art_title, 25, '...')}</header>
        <section className={style.home_newPost_userMsgTime}>
          <aside className={userHref ? 'global_avatar_href' : ''}>
            <Avatar src={userMsg.user_avatar} href={userHref} size={22} target={"_self"} />
          </aside>
          <strong>{userMsg.user_name}</strong>
          <aside>
            <Icon
              iconName={"time"}
              text={artTime}
              color={"#757575"}
              fontFamily={"AqumCap"} />
          </aside>
        </section>
        <section>
          <p>{cutWord(article.art_intro, 50, '')}
            <a href={artHref} target="_self"><strong>...ReadMore</strong></a>
          </p>
        </section>
        <footer>
          <section>
            <aside>
              <Icon
                iconName={"classify"}
                text={classifyMsg.class_name}
                color={"#757575"}
                fontFamily={"AqumCap"}
                href={classifyHref}
                size={12} />
            </aside>
          </section>
          <section>
            <aside>
              <Icon
                iconName={"eyes"}
                text={article.art_view}
                color={"#757575"}
                fontFamily={"AqumCap"}
                size={12} />
            </aside>
            <aside>
              <Icon
                iconName={"like"}
                text={article.art_like}
                fontFamily={"AqumCap"}
                color={"#757575"}
                size={12} />
            </aside>
            <aside>
              <Icon
                iconName={"comment"}
                text={article.art_comment_count}
                color={"#757575"}
                fontFamily={"AqumCap"}
                size={12} />
            </aside>
          </section>
        </footer>
      </article>

    </div>
  )
}