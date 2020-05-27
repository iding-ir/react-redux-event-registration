import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import dataReducer from "./data";
import stepsReducer from "./steps";
import currentReducer from "./current";
import usersReducer from "./users";

const combinedReducers = combineReducers({
  data: dataReducer,
  form: formReducer,
  step: stepsReducer,
  current: currentReducer,
  users: usersReducer,
});

export default combinedReducers;
