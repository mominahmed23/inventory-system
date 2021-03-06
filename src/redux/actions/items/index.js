export const addItemAction = (data) => {
  return {
    type: "ADD_ITEM",
    payload: data,
  };
};
export const editItemAction = (data) => {
  return {
    type: "EDIT_ITEM",
    payload: data,
  };
};
export const deleteItemAction = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};

export const addItemBulkAction = (data) => {
  return {
    type: "ADD_ITEM_BULK",
    payload: data,
  };
};
