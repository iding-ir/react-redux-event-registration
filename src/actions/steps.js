import { NEXT_STEP, PREV_STEP, RESET_STEPS } from "../constants";

export const nextStep = () => {
  return {
    type: NEXT_STEP,
  };
};

export const prevStep = () => {
  return {
    type: PREV_STEP,
  };
};

export const resetSteps = () => {
  return {
    type: RESET_STEPS,
  };
};
