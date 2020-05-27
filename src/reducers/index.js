import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import dataReducer from "./data";

const combinedReducers = combineReducers({
  data: dataReducer,
  form: formReducer,
});

export default combinedReducers;
