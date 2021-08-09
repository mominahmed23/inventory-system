export const addCategoryAction = (data) => {
  return {
    type: "ADD_CATEGORY",
    payload: data,
  };
};

export const addCategoryBulkAction = (data) => {
  return {
    type: "ADD_CATEGORY_BULK",
    payload: data,
  };
};
