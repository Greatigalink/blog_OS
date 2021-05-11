import FetchAPI from './index';
import { getMockData } from "../../mock/index"

const defaultUrl = "http://localhost:3001";

const getOneArticle = (data) => FetchAPI(`${defaultUrl}/get-article`, {
  art_id: data
});

const getOneTestArticle = (section) => {
  let result = getMockData(section, 'article_detials');
  return result.article_detials;
}

export {
  getOneArticle,
  getOneTestArticle
}