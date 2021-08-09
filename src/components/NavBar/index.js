import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddItemForm from "../Items/AddItemForm";
import AddClientForm from "../Categories/AddCategoryForm";
import { useSelector } from "react-redux";
import { addItemAction } from "../../redux/actions/items";
import { useDispatch } from "react-redux";
import FormModal from "../common/FormModal";
import { addCategoryAction } from "./../../redux/actions/categories/index";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    borderRadius: "10px",
    border: "2px solid #003f88",
    backgroundColor: "#003f88",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Inventory Store
          </Typography>
          <div>
            <Button variant="contained">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="contained">
              <Link to="/visuals">Visuals</Link>
            </Button>
            <Button variant="contained" onClick={handleClickOpen}>
              Add Category
            </Button>
            <Button variant="contained" onClick={handleClickOpenItem}>
              Add Item
            </Button>
          </div>
        </Toolbar>
      </AppBar>
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
}
