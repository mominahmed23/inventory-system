import React from "react";
import Categories from "./../Categories/index";
import Items from "./../Items/index";
import { useDispatch } from "react-redux";
import { addCategoryAction } from "../../redux/actions/categories/index";
const Home = () => {
  const dispatch= useDispatch();
  const submitCategoryData = (data) => {
    dispatch(addCategoryAction(data));
  };
  return (
    <div>
      <Categories submitCategoryData={submitCategoryData}/>
      <Items submitCategoryData={submitCategoryData}/>
    </div>
  );
};

export default Home;
