/** @format */

// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import categories from "./categories";
import items from "./items";
import taxSlab from "./textslab";

const rootReducer = combineReducers({
  categories,
  items,
  taxSlab,
});

export default rootReducer;
