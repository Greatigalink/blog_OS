import style from "../styles/Home.module.scss";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getHomeNewPostLists,
  getTestHomeHotClassifyList,
  dayOrNight,
  Scroll,
} from "../api/export";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("../component/icon/index"));
const HotClassify = dynamic(() =>
  import("../page-component/home/hot_classify/index")
);
const NewPost = dynamic(() => import("../page-component/home/new_post/index"));
const Weather = dynamic(() => import("../page-component/home/weather/index"));

const Nav = dynamic(() => import("../component/nav/index"));
const BackTop = dynamic(() => import("../component/back_top/index"));
const Footer = dynamic(() => import("../component/footer/index"));

const getStore = function () {
  return useSelector((state) => ({
    clock: state.basicState.clock,
    docWidth: state.basicState.docWidth,
  }));
};

const getWeather = async (setWeatherMsg) => {
  let weatherMsg = {};
  setWeatherMsg(weatherMsg);
};

const clickMoreNewPost = (
  showNewPostLists,
  setShowNewPostLists,
  allNewPostLists
) => {
  let start = showNewPostLists.length;
  if (start >= allNewPostLists.length) {
    console.log("没有更多了...");
    return;
  }
  let addList = allNewPostLists.slice(start, start + 6);
  setShowNewPostLists([...showNewPostLists, ...addList]);
};
const createRodamKey = (key) => key + Math.floor(Math.random() * 1000);

export async function getServerSideProps() {
  let hotClassifyLists = getTestHomeHotClassifyList([2, 4]) || [];
  let newPostLists = getHomeNewPostLists([5, 10]) || [];

  return {
    props: {
      hotClassifyLists,
      newPostLists,
    },
  };
}

export default function Home({
  hotClassifyLists,
  newPostLists,
}) {
  const { clock } = getStore();
  const [allNewPostLists, setAllNewPostLists] = useState([...newPostLists]);
  const [showNewPostLists, setShowNewPostLists] = useState(
    allNewPostLists.slice(0, 6)
  );
  const [weatherMsg, setWeatherMsg] = useState({});
  const dayOrNightStyle = dayOrNight("home_newPost", clock);

  useEffect(() => {
    if (Object.keys(weatherMsg).length <= 0) {
      getWeather(setWeatherMsg);
    }
  }, []);

  return (
    <div className={style.container}>
      <header className={style.home_head}>
        <div className={style.home_head_welcome}>
          <p>勇敢的去寻找你自己</p>
          <p>Don't be afraid to find yourself</p>
        </div>
        <div className={style.home_head_link}>
          <section onClick={() => Scroll(710)}>
            <aside>
              <Icon iconName={"down"} size={17} />
            </aside>
          </section>
        </div>
      </header>

      <main className={style.home_main} style={dayOrNight("", clock)}>
        <header
          className={style.home_mainHead}
          style={dayOrNight("home_hotClassify", clock)}
        >
          <section className={style.home_hotClassify}>
            <article className={style.home_hotClassify_article}>
              <p>
                任何时候都可以开始做自己想做的事，不要被任何东西束缚；要么今天要么明天，无需等待
              </p>
              <p>
                Start doing what you want to do at any time and don't be tied
                down by anything. It's either today or tomorrow, no waiting
              </p>
            </article>
            <ul>
              {hotClassifyLists.map((item, index) => (
                <li key={createRodamKey(index)}>
                  <HotClassify classify={item} />
                </li>
              ))}
            </ul>
          </section>
        </header>

        <div className={style.home_sign} style={dayOrNight("", clock)}>
          <header className={style.home_sign_head}>
            <Icon
              iconName={"notifiy"}
              color={"#757575"}
              size={13}
              text={"网站已上线，如有问题可以留言或者发邮件!"}
            />
          </header>
          <footer className={style.home_sign_footer}>
            <section>
              <Icon
                iconName={"baidu"}
                size={12}
                text={"百度"}
                href={"https://www.baidu.com/"}
                target={"_blank"}
              />
            </section>
            <section>
              <Icon
                iconName={"google"}
                size={12}
                text={"谷歌"}
                href={"https://www.google.cn/"}
                target={"_blank"}
              />
            </section>
            <section>
              <Icon
                iconName={"360bro"}
                size={12}
                text={"360"}
                href={"https://hao.360.com/"}
                target={"_blank"}
              />
            </section>
          </footer>
        </div>

        <main className={style.home_articleMain}>
          <section className={style.home_articleMain_left}>
            <ul className={style.home_articleMain_left_post}>
              {showNewPostLists.map((item, index) => (
                <li
                  className={style.home_articleMain_left_post_item}
                  key={createRodamKey(index)}
                  style={dayOrNight("home_newPostBorder", clock)}
                >
                  <NewPost article={item} dayOrNightStyle={dayOrNightStyle} />
                </li>
              ))}
            </ul>
            <footer className={style.home_articleMain_left_footer}>
              {showNewPostLists.length < allNewPostLists.length ? (
                <button
                  onClick={() =>
                    clickMoreNewPost(
                      showNewPostLists,
                      setShowNewPostLists,
                      allNewPostLists
                    )
                  }
                >
                  查看更多
                </button>
              ) : (
                <aside>没有更多了...</aside>
              )}
            </footer>
          </section>
          <section className={style.home_articleMain_right}>
            <header
              className={style.home_weather}
              style={dayOrNight("", clock)}
            >
              <Weather weather={weatherMsg} />
            </header>
          </section>
        </main>
      </main>

      <Footer clock={clock} />
      <Nav type={null} nowNav={"/"}></Nav>
      <BackTop></BackTop>
    </div>
  );
}
