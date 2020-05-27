import { ADD_TO_CURRENT, ADD_TO_WORKSHOPS } from "../constants";

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
