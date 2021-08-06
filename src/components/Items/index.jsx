import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles,withStyles } from "@material-ui/core";
import FormModal from "./../common/FormModal";
import {deleteItemAction, editItemAction} from "./../../redux/actions/items/index";
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
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

const Items = ({ submitCategoryData }) => {
  const classes = useStyles();
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const { items, categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  
  const handleEditClose = () => {
    setEditModal(false);
  };

  const onDeleteClick = (id) => {
    dispatch(deleteItemAction(id));
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
  
  return (
    <Box paddingTop={3}>
      
      <Container fixed>
        { items.length ? (
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="center">Sales Price</StyledTableCell>
                <StyledTableCell align="center">Purchase Price</StyledTableCell>
                <StyledTableCell align="center">Discount</StyledTableCell>
                <StyledTableCell align="center">ItemCode</StyledTableCell>
                <StyledTableCell align="center">Hsn</StyledTableCell>
                <StyledTableCell align="center">Mrp</StyledTableCell>
                <StyledTableCell align="center">TexSlab</StyledTableCell>
                <StyledTableCell align="center">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.product}
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.quantity}</StyledTableCell>
                  <StyledTableCell align="center">{item.salesPrice}</StyledTableCell>
                  <StyledTableCell align="center">{item.purchasePrice}</StyledTableCell>
                  <StyledTableCell align="center">{item.discount}</StyledTableCell>
                  <StyledTableCell align="center">{item.itemCode}</StyledTableCell>
                  <StyledTableCell align="center">{item.hsn}</StyledTableCell>
                  <StyledTableCell align="center">{item.mrp}</StyledTableCell>
                  <StyledTableCell align="center">{item.texSlab}</StyledTableCell>
                  <StyledTableCell align="center">
                  
                  <Button color="secondary"> 
                    <DeleteIcon onClick={() => onDeleteClick(item.id)} />
                  </Button>
                  <Button color="primary"> 
                    <EditIcon onClick={() => onEditClick(item.id)} />  
                  </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        ) : 
        ( <div className="text-center" style={{textAlign: "-webkit-center"}}>
           <h4> No Record To Show</h4>
          </div>
          )

        }
        
      </Container>
      

      {editModal && (
        <FormModal title="Edit Item" open={editModal} handleClose={handleEditClose}>
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

