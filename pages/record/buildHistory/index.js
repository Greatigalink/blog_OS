import style from "./buildHistory.module.scss";
import { getTestBuildHistory, dayOrNight } from "../../../api/export";
import { useSelector } from "react-redux"
import dynamic from "next/dynamic"

const CardRecord = dynamic(() => import("../../../component/card_record/index"))
const Nav = dynamic(() => import("../../../component/nav/index"))
const BackTop = dynamic(() => import("../../../component/back_top/index"))
const Footer = dynamic(() => import("../../../component/footer/index"))

const getStore = function() {
  return useSelector(
    (state) => ({
      clock: state.basicState.clock,
      docWidth: state.basicState.docWidth
    })
  )
}

export async function getServerSideProps(context) {
  let buildHistory_list = getTestBuildHistory([2, 4]);
  return {
    props: {
      buildHistory_list,
    },
  };
}

export default function BuildHistory({ buildHistory_list }) {

  const { clock, docWidth } = getStore();

  return (
    <div className={style.buildHistory}>
      <div className={style.buildHistory_cover}>
        <main>
          <ul>
            {buildHistory_list.map((item, index) => (
              <li key={index}>
                <CardRecord cardRecord={item} autoStyle={dayOrNight("buildHistory", clock)} docWidth={docWidth}></CardRecord>
              </li>
            ))}
          </ul>
        </main>
        <Footer clock={clock} />
      </div>
      <Nav nowNav={"/record/buildHistory"} />
      <BackTop />
    </div>
  );
}
