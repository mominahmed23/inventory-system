// ** Initial State
const initialState = [];

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "EDIT_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      const temp = state.filter((item) => item.id !== action.payload);
      return [...temp];
    default:
      return state;
  }
};

export default itemsReducer;
