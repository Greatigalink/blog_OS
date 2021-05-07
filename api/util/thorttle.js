function Thorttle(defaultDelay = 0, fn, ...arg) {
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

function ThorttleAnimation(defaultDelay = 0, fn, ...arg) {
  let args = [...arg];
  let isLock = false;
  let delay = defaultDelay;

  return function(...newArg) {
    let newArgs = [...args, ...newArg]
    if(isLock) {
      return;
    } else {
      isLock = true;
      window.requestAnimationFrame(() => fn(...newArgs));
      setTimeout(() => isLock = false, delay);
    }
  }
}

function Stabilization(exec, fn, ...arg) {
  let args = [...arg];

  let preTime = Date.now(new Date());
  let stepTime = 0;
  let preTop = document.documentElement.scrollTop || document.body.scrollTop;
  let stepTop = 0;
  let rightExecTime = exec;

  return function(...newArg) {
    let newArgs = [...args, ...newArg]
    stepTime = Date.now(new Date()) - preTime;
    stepTop = (document.documentElement.scrollTop || document.body.scrollTop) - preTop;
    if(stepTop === 0 && stepTime >= rightExecTime) {
      fn(...newArgs)
      preTime = Date.now(new Date());
      preTop = document.documentElement.scrollTop || document.body.scrollTop;
    }
  }
}

export {
  Thorttle,
  ThorttleAnimation,
  Stabilization
}