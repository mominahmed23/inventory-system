/** @format */

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

export const deleteCategoryAction = (id) => {
  return {
    type: "DELETE_CATEGORY",
    payload: id,
  };
};
