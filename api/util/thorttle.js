export default function Thorttle(defaultDelay = 0, fn, ...arg) {
  let args = [...arg];
  let timer = null;
  let isDelay = false;
  let delay = defaultDelay;

  return function(...newArg) {
    let newArgs = [...args, ...newArg]
    if(isDelay) {
      return;
    } else {
      isDelay = true;
      timer = setTimeout(() => {
        fn(...newArgs);
        clearTimeout(timer);
        isDelay = false;
      }, delay);
    }
  }
}