import { ADD_TO_CURRENT, ADD_TO_WORKSHOPS, CLEAR_CURRENT } from "../constants";

const INITIAL_STATE = { workshops: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CURRENT:
      return { ...state, ...action.payload };
    case ADD_TO_WORKSHOPS:
      return { ...state, workshops: [...state.workshops, action.payload] };
    case CLEAR_CURRENT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
