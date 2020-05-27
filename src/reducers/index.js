import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import dataReducer from "./data";
import stepsReducer from "./steps";

const combinedReducers = combineReducers({
  data: dataReducer,
  form: formReducer,
  step: stepsReducer,
});

export default combinedReducers;
