import style from "./declare.module.scss";
import { Icon } from "../../export";
import { cutWord } from "../../../api/export"

export default function Declare({userName, href, user_id}) {
  return (
    <div className={style.post_more}>
      <Icon
        iconName={"user"}
        location={"right"}
        text={userName}
        size={14}
        color={"#26c6da"}
        href={`/user/${user_id}`}
      ></Icon>
      <Icon
        iconName={"link"}
        location={"right"}
        text={ cutWord('http://localhost:3000' + href, 30, "...") }
        size={14}
        color={"#26c6da"}
        href={href}
      ></Icon>
      <Icon
        iconName={"describe"}
        location={"right"}
        text={"describion"}
        size={14}
        color={"#26c6da"}
      >
      </Icon>
      <p>
          本文为原创文章，若文章内容出现抄袭雷同，请联系作者或者网站负责人，我们将认真核实并及时删除。
          除非另有说明，否则此博客中的所有文章均根据CC BY-NC-SA
          4.0许可。如需转载请标明出处，谢谢配合!
      </p>
    </div>
  )
}