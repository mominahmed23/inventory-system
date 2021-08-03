// **  Initial State
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
