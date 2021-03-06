import "../styles/globals.css";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { useStore } from "../store/index";
import { setTop, setClock, setDocWidth } from "../store/action";
import { Thorttle } from "../api/export";
import { MessageContainer } from "../component/message/index";

const listenerTop = function (dispatch) {
  let top = document.body.scrollTop || document.documentElement.scrollTop;
  dispatch(setTop(Math.round(top)));
};

const listenerWidth = function (dispatch) {
  let width = document.body.clientWidth || document.documentElement.clientWidth;
  dispatch(setDocWidth(width));
};

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  useEffect(() => {
    let top = document.body.scrollTop || document.documentElement.scrollTop;
    let width =
      document.body.clientWidth || document.documentElement.clientWidth;
    store.dispatch(setTop(top));
    store.dispatch(setDocWidth(width));
    store.dispatch(setClock(localStorage.getItem("clock") || "daytime"));
    window.addEventListener(
      "scroll",
      Thorttle(500, listenerTop, store.dispatch)
    );
    window.addEventListener(
      "resize",
      Thorttle(500, listenerWidth, store.dispatch)
    );
  });

  return (
    <Provider store={store}>
      <div id="greatiga">
        <Component {...pageProps} />
        <MessageContainer />
      </div>
    </Provider>
  );
}

export default MyApp;
