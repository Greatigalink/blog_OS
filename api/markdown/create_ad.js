export function createAD(document, distance = 0) {
  let result = [];
  let scroll_obj = [];
  document.childNodes.forEach((item) => {
    if(/H[1-3]/g.test(item.tagName)) {
      result.push({
        tagName: `ad${item.tagName}`,
        href: item.id,
        top: item.offsetTop + distance
      });
      scroll_obj.push(item.offsetTop);
    };
  });

  return { result, scroll_obj};
}
