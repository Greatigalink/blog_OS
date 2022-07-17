const Mock = require("mockjs");
const { homeNewPost_list } = require("./home/index")
const { article_detials } = require("./post/index")
const { classify ,classify_list, homeHotClassify_list } = require("./classify/index")
const { buildHistorys } = require("./record/buildHistory")
const { linkLists } = require("./link/index")

const getMockData = function(section, API) {
  let range = section.join("-");
  let template = `${API}|${range}`;
  let mock_obj = {};
  let api = null;
  switch(API) {
    case 'homeNewPost_list': api = homeNewPost_list; break;
    case 'article_detials': api = article_detials; break;
    case 'classify': api = classify; break;
    case 'homeHotClassify_list': api = homeHotClassify_list; break;
    case 'classify_list': api = classify_list; break;
    case 'buildHistory_list': api = buildHistorys; break;
    case 'link_list': api = linkLists; break;
    default: return [];
  }
  mock_obj[template] = api;
  return Mock.mock(mock_obj);
}

module.exports = {
  getMockData
}