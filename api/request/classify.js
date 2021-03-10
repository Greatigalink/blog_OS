import FetchAPI from './index';
import { getMockData } from "../../mock/index"

const defaultUrl = "http://localhost:3001";

const getClassify = (data) => FetchAPI(`${defaultUrl}`, {
  art_classify: data
});

const getClassifyList = (data) => FetchAPI(`${defaultUrl}`, {
  art_classify: data
});

const getTestClassify = (section) => {
  let result = getMockData(section, 'classify');
  return result.classify;
}

const getTestClassifyList = (section) => {
  let result = getMockData(section, 'classify_list');
  return result.classify_list;
}

export {
  getClassify,
  getClassifyList,
  getTestClassify,
  getTestClassifyList
}