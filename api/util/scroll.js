export default function Scroll(target) {
  let nowTop = document.documentElement.scrollTop || document.body.scrollTop;
  let section = (target - nowTop) / 100;

  if(section == 0) return;

  let i = 0;

  let timer = setInterval(() => {
    if(i > 99) {
      clearInterval(timer);
    }
    window.scrollBy(0, section);
    i ++;
  }, 5)
}