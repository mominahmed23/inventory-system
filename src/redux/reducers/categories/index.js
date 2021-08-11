/** @format */

// **  Initial State
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "ADD_CATEGORY_BULK":
      return [...state, ...action.payload];
    case "DELETE_CATEGORY":
      const index = state.map((e) => e.id).indexOf(action.payload);
      const temp = [...state];
      temp.splice(index, 1);
      return [...temp];
    default:
      return state;
  }
};

export default categoriesReducer;
