import { ADD_TO_CURRENT, ADD_TO_WORKSHOPS, CLEAR_CURRENT } from "../constants";

export const addToCurrent = (props) => {
  return {
    type: ADD_TO_CURRENT,
    payload: props,
  };
};

export const addToWorkshops = (workshop) => {
  return {
    type: ADD_TO_WORKSHOPS,
    payload: workshop,
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};
