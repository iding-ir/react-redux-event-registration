import { SHOW_MODAL, HIDE_MODAL } from "../constants";

const INITIAL_STATE = false;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return true;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
};

export default reducer;
