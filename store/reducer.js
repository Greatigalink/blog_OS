import { SET_TOP, SET_CLOCK, SET_DOCWIDTH } from "./action"

const defaultState = {
  scrollTop: 0,
  docWidth: 1920,
  clock: "daytime"
}

function basicState(state, action) {
  if(state == undefined) {
    state = defaultState;
  }
  switch(action.type) {
    case SET_TOP: return Object.assign({}, state, {
      scrollTop: action.value
    });
    case SET_CLOCK: return Object.assign({}, state, {
      clock: action.value
    });
    case SET_DOCWIDTH: return Object.assign({}, state, {
      docWidth: action.value
    })
    default: return state;
  }
}

export {
  basicState
}