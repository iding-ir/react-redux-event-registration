import { SET_STEP } from "../constants";

const INITIAL_STATE = 1;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STEP:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
