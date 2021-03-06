import FetchAPI from './index';
import { getMockData } from "../../mock/index"

const getTestLinkLists = (section) => {
  let result = getMockData(section, "link_list");
  return result.link_list;
}

export {
  getTestLinkLists
}