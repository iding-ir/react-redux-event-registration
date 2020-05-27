import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import dataReducer from "./data";
import stepsReducer from "./steps";
import currentReducer from "./current";

const combinedReducers = combineReducers({
  data: dataReducer,
  form: formReducer,
  step: stepsReducer,
  current: currentReducer,
});

export default combinedReducers;
