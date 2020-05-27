import { ADD_TO_CURRENT } from "../constants";

export const addToCurrent = (props) => {
  return {
    type: ADD_TO_CURRENT,
    payload: props,
  };
};
