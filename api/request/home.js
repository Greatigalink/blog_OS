import FetchAPI from "./index";
import { getMockData } from "../../mock/index";

const getHomeNewPostLists = (section) => {
  let result = getMockData(section, "homeNewPost_list");
  return result.homeNewPost_list;
};

export { getHomeNewPostLists };
