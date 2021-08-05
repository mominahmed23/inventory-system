import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles, Button } from "@material-ui/core";
import FormModal from "./../common/FormModal";
import Heading from "./../common/Heading";
import AddItemForm from "./AddItemForm";
import {
  deleteItemAction,
  addItemAction,
  editItemAction,
} from "./../../redux/actions/items/index";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditItemForm from "./EditItemForm";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStylesTable = makeStyles({
  table: {
    minWidth: 650,
  },
});
const Items = ({ submitCategoryData }) => {
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const { items, categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleEditClose = () => {
    setEditModal(false);
  };

  const onDeleteClick = (id) => {
    dispatch(deleteItemAction(id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitAddItem = (data) => {
    handleClose();
    dispatch(addItemAction(data));
  };

  const submitEditItem = (data, id) => {
    handleEditClose();
    dispatch(editItemAction(data, id));
    console.log("inside submit eidt item");
  };

  const onEditClick = (id) => {
    setEditId(id);
    setEditModal(true);
  };
  const classesTable = useStylesTable();
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
      <TableContainer className={classesTable.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#cecece" }}>
            <TableRow>
              <TableCell align="center">Podcut</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Sales Price</TableCell>
              <TableCell align="center">Purchase Price</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.product}</TableCell>
                <TableCell align="center">{item.quantity}</TableCell>
                <TableCell align="center">{item.salesPrice}</TableCell>
                <TableCell align="center">{item.purchasePrice}</TableCell>
                <TableCell align="center">{item.discount}</TableCell>
                <TableCell align="right">
                  <DeleteIcon onClick={() => onDeleteClick(item.id)} />
                  <EditIcon onClick={() => onEditClick(item.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {open && (
        <FormModal title="Add New Item" open={open} handleClose={handleClose}>
          <AddItemForm
            categories={categories}
            submitAddItem={submitAddItem}
            submitCategoryData={submitCategoryData}
          />
        </FormModal>
      )}

      {editModal && (
        <FormModal
          title="Edit Item"
          open={editModal}
          handleClose={handleEditClose}
        >
          <EditItemForm
            editId={editId}
            categories={categories}
            submitEditItem={submitEditItem}
            submitCategoryData={submitCategoryData}
            itemTex={items}
          />
        </FormModal>
      )}
    </Box>
  );
};

export default Items;
