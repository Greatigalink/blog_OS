export const CREATE_TOP = "CREATE_TOP";
export const SET_TOP = "SET_TOP";
export const SET_CLOCK = "SET_CLOCK";
export const SET_DOCWIDTH = "SET_DOCWIDTH"

export function createTop() {
  return {
    type: CREATE_TOP,
    value: 0
  }
}

export function setTop(top) {
  return {
    type: SET_TOP,
    value: top
  }
}

export function setClock(clock) {
  return {
    type: SET_CLOCK,
    value: clock
  }
}

export function setDocWidth(docWidth) {
  return {
    type: SET_DOCWIDTH,
    value: docWidth
  }
}