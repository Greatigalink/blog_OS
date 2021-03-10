import marked from "marked";

export const mdToHtml = async(content) => marked(content);