import React, { useState } from "react";
import AddItemForm from "../Items/AddItemForm";
import { useSelector } from "react-redux";
import { addItemAction } from "../../redux/actions/items";
import { useDispatch } from "react-redux";
import FormModal from "../common/FormModal";
import { Link } from "react-router-dom";
import { Button } from "antd";

const NavBar = () => {
  const [openItem, setOpenItem] = useState(false);
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleCloseItem = () => {
    setOpenItem(false);
  };

  const submitAddItem = (data) => {
    handleCloseItem();
    dispatch(addItemAction(data));
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
          <Button type="link">
            <Link to="/loaddata">Load Data</Link>
          </Button>
        </div>
      </div>

      {openItem && (
        <FormModal
          title="Add New Item"
          open={openItem}
          handleClose={handleCloseItem}
        >
          <AddItemForm categories={categories} submitAddItem={submitAddItem} />
        </FormModal>
      )}
    </div>
  );
};

export default NavBar;
