import React, { useState } from "react";
import AddItemForm from "../Items/AddItemForm";
import AddClientForm from "../Categories/AddCategoryForm";
import { useSelector } from "react-redux";
import { addItemAction } from "../../redux/actions/items";
import { useDispatch } from "react-redux";
import FormModal from "../common/FormModal";
import { addCategoryAction } from "../../redux/actions/categories/index";
import { Link } from "react-router-dom";
import { Button } from "antd";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(false);
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenItem = () => {
    setOpenItem(true);
  };

  const handleCloseItem = () => {
    setOpenItem(false);
  };

  const submitAddItem = (data) => {
    handleCloseItem();
    dispatch(addItemAction(data));
  };

  const submitCategoryData = (data) => {
    dispatch(addCategoryAction(data));
  };

  return (
    <div className="position-static px-5 py-3 custom-navbar">
      <div className="d-flex justify-space-between align-center">
        <h4 className="mb-0">Inventory Store</h4>
        <div>
          <Button type="link">
            <Link to="/">Home</Link>
          </Button>
          <Button type="link">
            <Link to="/visuals">Visuals</Link>
          </Button>
          <Button onClick={handleClickOpen}>Add Category</Button>
          <Button onClick={handleClickOpenItem}>Add Item</Button>
        </div>
      </div>

      {open && (
        <FormModal
          title="Add New Category"
          open={open}
          handleClose={handleClose}
        >
          <AddClientForm
            submitCategoryData={submitCategoryData}
            handleClose={handleClose}
          />
        </FormModal>
      )}
      {openItem && (
        <FormModal
          title="Add New Item"
          open={openItem}
          handleClose={handleCloseItem}
        >
          <AddItemForm
            categories={categories}
            submitAddItem={submitAddItem}
            submitCategoryData={submitCategoryData}
          />
        </FormModal>
      )}
    </div>
  );
};

export default NavBar;
