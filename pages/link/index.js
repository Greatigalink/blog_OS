import style from "./link.module.scss";
import { getTestLinkLists, dayOrNight, TextLink } from "../../api/export";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic"

const MyAvatar = dynamic(() => import("../../component/avatar/index"))
const Nav = dynamic(() => import("../../component/nav/index"))
const BackTop = dynamic(() => import("../../component/back_top/index"))
const Footer = dynamic(() => import("../../component/footer/index"))

const getStore = function () {
  return useSelector(
    (state) => ({
      clock: state.basicState.clock,
    })
  );
};

const websiteMsg = [
  {
    name: "名称",
    content: "努力'向前",
  },
  {
    name: "网址",
    content: "<:http://www.tzwlink.xyz/|http://www.tzwlink.xyz/:>",
  },
  {
    name: "图标",
    content: "<:http://www.tzwlink.xyz/static/great.png|http://www.tzwlink.xyz/static/great.png:>",
  },
];

export async function getServerSideProps(context) {
  let linkLists = getTestLinkLists([7, 15]);
  return {
    props: {
      linkLists,
    },
  };
}

export default function Link({ linkLists }) {
  const { clock } = getStore();
  return (
    <div className={style.link}>
      <div className={style.link_cover}>
        <header className={style.link_head} style={dayOrNight("link", clock)}>
          <div>
            <h2>友善往来</h2>
          </div>
          <article>
            <ul>
              {websiteMsg.map((item, index) => (
                <li key={index}>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.name + " : " + TextLink(item.content) }}
                  ></p>
                </li>
              ))}
            </ul>
          </article>
        </header>

        <main className={style.link_main}>
          <ul>
            {linkLists.map((item, index) => (
              <li
                key={index}
                className={style.link_list}
                style={dayOrNight("link", clock)}
              >
                <div>
                  <header>
                    <MyAvatar src={item.user_avatar} size={60} />
                    <h4>{item.user_name}</h4>
                  </header>
                  <article>
                    <p>{item.link_describe}</p>
                  </article>
                </div>
              </li>
            ))}
          </ul>
        </main>

        <Footer clock={clock} />
      </div>

      <Nav nowNav={"/link"} />
      <BackTop />
    </div>
  );
}
