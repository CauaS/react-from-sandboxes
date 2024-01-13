import * as counterTypes from "./types";

//export const increment = { type: counterTypes.INCREMENT };

export function increment(InputValue) {
  return {
    type: counterTypes.INCREMENT,
    payload: {
      value: +InputValue
    }
  };
}
//export const decrement = { type: counterTypes.DECREMENT };

export function decrement(InputValue) {
  return {
    type: counterTypes.DECREMENT,
    payload: {
      value: +InputValue
    }
  };
}
