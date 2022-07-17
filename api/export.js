import { mdToHtml, createAD } from "./markdown/export";
import {
  getHomeNewPostLists,
  getOneArticle,
  getOneTestArticle,
  getClassify,
  getTestHomeHotClassifyList,
  getClassifyList,
  getTestClassify,
  getTestClassifyList,
  getTestBuildHistory,
  getTestLinkLists,
} from "./request/export";
import {
  Type,
  cutWord,
  Scroll,
  Thorttle,
  TextLink,
  dayOrNight,
  Time,
} from "./util/export";
import { message } from "../component/message/index";

function BlogShowMessage(type, text) {
  switch (type) {
    case "success":
      message.success(text);
      break;
    case "warning":
      message.warning(text);
      break;
    case "error":
      message.error(text);
      break;
    case "info":
      message.info(text);
      break;
    default:
      message.info(text);
  }
}

export {
  getHomeNewPostLists,
  getOneArticle,
  getOneTestArticle,
  getClassify,
  getTestHomeHotClassifyList,
  getClassifyList,
  getTestClassify,
  getTestClassifyList,
  getTestBuildHistory,
  getTestLinkLists,
  mdToHtml,
  createAD,
  Type,
  cutWord,
  Scroll,
  Thorttle,
  TextLink,
  dayOrNight,
  Time,
  BlogShowMessage,
};
