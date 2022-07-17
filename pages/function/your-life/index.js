import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./yourlife.module.scss";
import dynamic from "next/dynamic";

const AskMessage = dynamic(() =>
  import("../../../page-component/function/your-life/ask-message/index")
);
const TimeGrid = dynamic(() =>
  import("../../../page-component/function/your-life/time-grid/index")
);
const Nav = dynamic(() => import("../../../component/nav/index"));
const Footer = dynamic(() => import("../../../component/footer/index"));
const BackTop = dynamic(() => import("../../../component/back_top/index"));

let basicMessage = {
  docWidth: 1920,
  docHeight: 1080,
  inputerTimeMsg: {},
};

const getStore = function () {
  return useSelector((state) => ({
    clock: state.basicState.clock,
    docWidth: state.basicState.docWidth,
    docHeight: state.basicState.docHeight,
  }));
};

const createTimeLine = (inputTime, setIsTimeGrid) => {
  basicMessage.inputerTimeMsg = inputTime;
  setIsTimeGrid(true);
};

export default function YourLife() {
  const { clock, docWidth, docHeight } = getStore();
  const [isTimeGrid, setIsTimeGrid] = useState(false);
  basicMessage.docWidth = docWidth;
  basicMessage.docHeight = docHeight;

  return (
    <div className={style.your_life}>
      <main className={style.your_life_main}>
        <div className={style.your_life_develop}>
          {isTimeGrid ? (
            <TimeGrid
              basicMessage={basicMessage}
              onReStart={() => setIsTimeGrid(false)}
            />
          ) : (
            <AskMessage
              onGetMessage={(inputTime) =>
                createTimeLine(inputTime, setIsTimeGrid)
              }
            />
          )}
        </div>
      </main>
      <Footer clock={clock} />
      <Nav nowNav={"/function/your-life"} />
      <BackTop />
    </div>
  );
}
