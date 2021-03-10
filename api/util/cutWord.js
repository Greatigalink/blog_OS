export function cutWord(str, len, defaultStr) {
  if(typeof str != "string") {
    return str;
  } else if(str.length > len) {
    return str.slice(0, len) + defaultStr;
  } else {
    return str;
  }
}