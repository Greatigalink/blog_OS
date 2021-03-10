const styleTag = (str, href) =>
  `<span title="text_link" ><a href="${href}" target="_blank">${str}</a></span>`;

export default function TextLink(str) {
  let [result, i, isLink, linkStr, reg, text_Href] = [
    "",
    0,
    false,
    "",
    null,
    null,
  ];
  while (i < str.length) {
    reg = str[i] + str[i + 1];
    if (/<:/.test(reg)) {
      isLink = true;
      i++;
    } else if (/:>/.test(reg)) {
      isLink = false;
      text_Href = linkStr.split("|");
      linkStr = "";
      result += styleTag(text_Href[0], text_Href[1]);
      i++;
    } else if (isLink) {
      linkStr += str[i];
    } else {
      result += str[i];
    }
    i++;
  }
  return result;
}
