import style from './hot_classify.module.scss'
import { cutWord } from '../../../api/export'
import dynamic from "next/dynamic"

const Icon = dynamic(() => import("../../../component/icon/index"))

const element = (classify, headBack) => (
  <div className={style.home_hotClassify_cover} style={headBack}>
    <article>
      <section>
       <Icon iconName={classify.class_id} size={20} text={classify.class_name} /> 
      </section>
      <p>{cutWord(classify.class_intro, 15, "...")}</p>
    </article>
  </div>
)

export default function HotClassify({ classify }) {
  const classifyHref = classify.class_id ? `/classify/${classify.class_id}` : null
  const headBack = {
    background: `white url(${classify.class_img || "https://static.greatiga.cn/web_back/classify/classifyDefault.jpg"
      }) no-repeat center /cover`,
  };

  return (
    <div className={style.home_hotClassify}>
      {
        classifyHref ? <a href={classifyHref} target="_self">{element(classify, headBack)}</a> : element(classify, headBack)
      }
    </div>
  )
}