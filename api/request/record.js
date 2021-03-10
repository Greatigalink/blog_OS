import FetchAPI from './index';
import { getMockData } from "../../mock/index"

const defaultUrl = "http://localhost:3001";

const getTestBuildHistory = (section) => {
  let result = getMockData(section, "buildHistory_list");
  return result.buildHistory_list;
}

export {
  getTestBuildHistory
}