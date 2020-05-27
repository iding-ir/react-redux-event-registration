import { ADD_TO_CURRENT, ADD_TO_WORKSHOPS } from "../constants";

const INITIAL_STATE = { workshops: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CURRENT:
      return { ...state, ...action.payload };
    case ADD_TO_WORKSHOPS:
      return { ...state, workshops: [...state.workshops, action.payload] };
    default:
      return state;
  }
};

export default reducer;
