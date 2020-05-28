import { ADD_USER, REMOVE_USER, CLEAR_USERS } from "../constants";
import _ from "lodash";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, [action.payload.email]: action.payload };
    case REMOVE_USER:
      return _.omit(state, action.payload);
    case CLEAR_USERS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
