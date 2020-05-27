import { combineReducers } from "redux";

import dataReducer from "./data";

const combinedReducers = combineReducers({
  data: dataReducer,
});

export default combinedReducers;
