import { NEXT_STEP, PREV_STEP, RESET_STEPS } from "../constants";

const INITIAL_STATE = 1;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return state + 1;
    case PREV_STEP:
      return state - 1;
    case RESET_STEPS:
      return 1;
    default:
      return state;
  }
};

export default reducer;
