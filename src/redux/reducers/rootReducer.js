/** @format */

// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import categories from "./categories";
import items from "./items";
import textslab from "./textslab";

const rootReducer = combineReducers({
  categories,
  items,
  textslab,
});

export default rootReducer;
