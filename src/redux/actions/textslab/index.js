/** @format */

export const addtextslabAction = (data) => {
  return {
    type: "ADD_TEXTSLAB",
    payload: data,
  };
};

export const addTextslabBulkAction = (data) => {
  return {
    type: "ADD_TEXTSLAB_BULK",
    payload: data,
  };
};

export const deleteTextslabAction = (id) => {
  return {
    type: "DELETE_TEXTSLAB",
    payload: id,
  };
};

export const editTaxAction = (data) => {
  return {
    type: "EDIT_TAXSLAB",
    payload: data,
  };
};
