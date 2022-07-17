import FetchAPI from "./index";
import { getMockData } from "../../mock/index";

const defaultUrl = "http://localhost:3001";

const getClassify = (data) =>
  FetchAPI(`${defaultUrl}`, {
    art_classify: data,
  });

const getClassifyList = (data) =>
  FetchAPI(`${defaultUrl}`, {
    art_classify: data,
  });

/**
 * 携带 Test 的函数为 mock 模拟数据，可修改为自己后端的数据
 */
const getTestClassify = (section) => {
  let result = getMockData(section, "classify");
  return result.classify;
};

const getTestHomeHotClassifyList = (section) => {
  let result = getMockData(section, "homeHotClassify_list");
  return result.homeHotClassify_list;
};

const getTestClassifyList = (section) => {
  let result = getMockData(section, "classify_list");
  return result.classify_list;
};

export {
  getClassify,
  getClassifyList,
  getTestClassify,
  getTestHomeHotClassifyList,
  getTestClassifyList,
};
