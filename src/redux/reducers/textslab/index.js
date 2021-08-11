/** @format */

// ** Initial State
const initialState = [];

const textslabReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEXTSLAB":
      return [...state, action.payload];
    case "ADD_TEXTSLAB_BULK":
      return [...state, ...action.payload];
    case "DELETE_TEXTSLAB":
      const index = state.map((e) => e.id).indexOf(action.payload);
      const temp = [...state];
      temp.splice(index, 1);
      return [...temp];
    case "EDIT_TAXSLAB":
      const indexForEdit = state.map((e) => e.id).indexOf(action.payload.id);
      const tempForEdit = [...state];
      tempForEdit.splice(indexForEdit, 1, action.payload);
      return [...tempForEdit];
    default:
      return state;
  }
};

export default textslabReducer;
