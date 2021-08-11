// **  Initial State
const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "ADD_CATEGORY_BULK":
      return [...state, ...action.payload];
    case "DELETE_CATEGORY":
      const indexForDel = state.map((e) => e.id).indexOf(action.payload);
      const tempForDel = [...state];
      tempForDel.splice(indexForDel, 1);
      return [...tempForDel];
    case "EDIT_CATEGORY":
      const indexForEdit = state.map((e) => e.id).indexOf(action.payload.id);
      const tempForEdit = [...state];
      tempForEdit.splice(indexForEdit, 1, action.payload);
      return [...tempForEdit];
    default:
      return state;
  }
};

export default categoriesReducer;
