import { SET_STEP } from "../constants";

export const setStep = (step) => {
  return {
    type: SET_STEP,
    payload: step,
  };
};
