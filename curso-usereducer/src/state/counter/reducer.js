import * as counterTypes from "./types";

function counterReducer(state, action) {
  switch (action.type) {
    case counterTypes.INCREMENT:
      return state + action.payload.value;
    case counterTypes.DECREMENT:
      return state - action.payload.value;
    default:
      throw new Error();
  }
}
export default counterReducer;
