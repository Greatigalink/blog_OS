import style from "./list.module.scss"
import { Icon } from "../../../component/export"
import { cutWord } from "../../../api/export"

export default function List({ list }) {

  return (
    <div className={style.list}>

      <main className={style.list_main}>
        <img src={list.art_img}></img>
        <article>
          <aside>{cutWord(list.art_title, 20, "...")}</aside>
        </article>
      </main>

      <footer className={style.list_foot}>
        <section title="list_user">
          <Icon
            iconName={"user"}
            text={list.user_name}
            location={"right"}
            href={`/user/${list.art_user_id}`}
            size={13}
          ></Icon>
        </section>
        <section title="list_like_comment">
          <Icon
            iconName={"like"}
            location={"right"}
            text={list.art_like}
            size={13}
            color={"#ef5350"}
            fontColor={"212121"}
          ></Icon>
          <Icon
            iconName={"comment"}
            location={"right"}
            text={list.art_comment_count}
            size={13}
          ></Icon>
        </section>
      </footer>

    </div>
  )
}