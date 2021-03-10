export function Type(obj) {
  let type = Object.prototype.toString.call(obj);
  return type.slice(8).replace("]", "").toLocaleLowerCase();
}