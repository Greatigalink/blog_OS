import style from "./card_record.module.scss"
import { BinaryLable, Icon, SlideShow } from "../export"
import { TextLink, cutWord } from "../../api/export"

const mediaWH = function(docWidth) {
  if(docWidth > 960) {
    return {
      width: 500,
      height: 300
    }
  } else if(docWidth > 500 && docWidth <= 960) {
    return {
      width: 310,
      height: 200
    }
  } else {
    return {
      width: docWidth * 0.75,
      height: 200
    }
  }
}

export default function CardRecord({ cardRecord, autoStyle, docWidth }) {

  let [ Year, Month, Day ] = cutWord(cardRecord.build_time, 10, "").split("-");
  let { width, height } = mediaWH(docWidth);
  return (
    <div style={autoStyle} className={style.card_record}>
      <aside style={autoStyle} className={style.card_record_head}>
        <Icon
         iconName={"calendar"}
         location={"right"}
         text={Year}
         size={25}
         fontFamily={"AqumCap"}
        ></Icon>
      </aside>
      <article className={style.card_record_main}>
        <h3>{cardRecord.build_title}</h3>
        <BinaryLable
          name={"version"}
          content={cardRecord.build_version}
          color={"white"}
          colorLeft={"#f57c00"}
          colorRight={"#0097a7"}
          size={13}
        ></BinaryLable>
        <h5>Technical Supports</h5>
        <ul>
          {cardRecord.build_technique.map((item, index) => (
            <li key={index}>
              <Icon
                iconName={item.te_id}
                location={"right"}
                text={`${item.te_name}`}
                size={15}
                color={"#ef5350"}
                fontFamily={"AqumCap"}
              ></Icon> 
              <p dangerouslySetInnerHTML={{ __html: TextLink(item.te_detials) }}></p>
            </li>
          ))}
        </ul>
        <h5>Thinks</h5>
        <p title={"build介绍"}>{cardRecord.build_intro}</p>
        <h5>Preview Image</h5>
        <footer style={{width: `${width}px`, height: `${height}px`}}>
          <SlideShow array={cardRecord.build_img} width={width} height={height}></SlideShow>
        </footer>
      </article>
    </div>
  )
}