export const addItemAction = (data) => {
  return {
    type: "ADD_ITEM",
    payload: data,
  };
};
export const editItemAction = (data, id) => {
  console.log(id)
  return {
    type: "EDIT_ITEM",
    payload: data,
    id
  };
};
export const deleteItemAction = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};
