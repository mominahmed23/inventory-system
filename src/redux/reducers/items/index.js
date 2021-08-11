// ** Initial State
const initialState = [];

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "EDIT_ITEM":
      const indexForEdit = state.map((e) => e.id).indexOf(action.payload.id);
      const tempForEdit = [...state];
      tempForEdit.splice(indexForEdit, 1, action.payload);
      return [...tempForEdit];
    case "DELETE_ITEM":
      const indexForDel = state.map((e) => e.id).indexOf(action.payload);
      const tempForDel = [...state];
      tempForDel.splice(indexForDel, 1);
      return [...tempForDel];
    case "ADD_ITEM_BULK":
      return [...action.payload];
    default:
      return state;
  }
};

export default itemsReducer;
