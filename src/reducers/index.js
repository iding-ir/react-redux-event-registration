import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import dataReducer from "./data";
import stepsReducer from "./steps";
import currentReducer from "./current";
import usersReducer from "./users";
import modalReducer from "./modal";

const combinedReducers = combineReducers({
  data: dataReducer,
  form: formReducer,
  step: stepsReducer,
  current: currentReducer,
  users: usersReducer,
  modal: modalReducer,
});

export default combinedReducers;
