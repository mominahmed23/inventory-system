// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import categories from "./categories";
import items from "./items";

const rootReducer = combineReducers({
  categories,
  items,
});

export default rootReducer;
