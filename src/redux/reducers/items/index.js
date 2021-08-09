// ** Initial State
const initialState = [];

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "EDIT_ITEM":
      const temp2 = state.filter((item) => item.id !== action.id);
      temp2.push({ itemId: action.id, ...action.payload });
      return [...temp2];
    case "DELETE_ITEM":
      const temp = state.filter((item) => item.id !== action.payload);
      return [...temp];
    case "ADD_ITEM_BULK":
      return [...action.payload];
    default:
      return state;
  }
};

export default itemsReducer;
