import { ADD_TO_CURRENT } from "../constants";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CURRENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
