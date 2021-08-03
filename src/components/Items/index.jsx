import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import FormModal from "./../common/FormModal";
import Heading from "./../common/Heading";
import AddItemForm from "./AddItemForm";
import {
  deleteItemAction,
  addItemAction,
} from "./../../redux/actions/items/index";

import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";
// import EditItemForm from "./EditItemForm";
const useStyles = makeStyles((theme) => ({}));

const Items = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // const [editModal, setEditModal] = useState(false);
  const { items, categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onDeleteClick = (id) => {
    dispatch(deleteItemAction(id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitProjectData = (data) => {
    handleClose();
    dispatch(addItemAction(data));
  };

  return (
    <Box paddingBottom={3}>
      <Heading name="Items List" />
      <Box marginBottom={5} marginTop={3}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          disableElevation
          onClick={handleClickOpen}
        >
          +Add
        </Button>
      </Box>
      {!!items.length && (
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid item sm={6} md={4} lg={3} key={item.id}>
              <Card className={classes.card}>
                <Box paddingY={1} paddingX={3}>
                  <Typography variant="h6">{item.product}</Typography>
                </Box>
                <div>
                  <DeleteIcon onClick={() => onDeleteClick(item.id)} />
                  {/* <EditIcon onClick={onEditClick} /> */}
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {open && (
        <FormModal title="Add New Item" open={open} handleClose={handleClose}>
          <AddItemForm
            categories={categories}
            submitProjectData={submitProjectData}
          />
        </FormModal>
      )}
    </Box>
  );
};

export default Items;

// {editModal && (
//   <FormModal
//     title="Edit Item"
//     open={editModal}
//     handleClose={handleEditClose}
//   >
//     <EditItemForm categories={categories} />
//   </FormModal>
// )}
