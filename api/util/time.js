function sumTime(end) {
  var last = Date.now();
  var days, dayRm, hours, hourRm, mins, minRm, secs;
  days = (end-last)/(3600*1000*24);
  dayRm = (end-last)%(3600*1000*24);
  hours = dayRm/(3600*1000);
  hourRm = dayRm%(3600*1000);
  mins = hourRm/(60*1000);
  minRm = hourRm%(60*1000);
  secs = minRm/(1000);
  return [parseInt(days) + "天", parseInt(hours) + "时", parseInt(mins) + "分", parseInt(secs) + "秒"];
}

export default function Time(start, setTime) {
  var start = new Date(start);
  var end = start.getTime();
  let timer = setInterval(() => {
    let result = sumTime(end);
    setTime(result)
  }, 1000);
  return timer;
}