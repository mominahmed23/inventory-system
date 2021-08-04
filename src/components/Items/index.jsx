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
import EditIcon from "@material-ui/icons/Edit";
import EditItemForm from "./EditItemForm";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({}));
const useStylesTable = makeStyles({
  table: {
    minWidth: 650,
  },
});
const Items = ({submitCategoryData}) => {

  const colums =[
    {field:"product",
  headerName:"Product"}
  ];
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const { items, categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleEditClose = ()=>{
    setEditModal(false);
  }

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

  const onEditClick = (id) => {
    setEditId(id);
    setEditModal(true)
  } 
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
        <TableHead style={{backgroundColor:"#cecece"}}>
          <TableRow>
            <TableCell  align="center">Podcut</TableCell>
            <TableCell  align="center">Quantity</TableCell>
            <TableCell  align="center">Sales Price</TableCell>
            <TableCell  align="center">Purchase Price</TableCell>
            <TableCell  align="center">Discount</TableCell>
            <TableCell  align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="center">{item.product}</TableCell>
              <TableCell  align="center">{item.quantity}</TableCell>
              <TableCell  align="center">{item.salesPrice}</TableCell>
              <TableCell  align="center">{item.purchasePrice}</TableCell>
              <TableCell  align="center">{item.discount}</TableCell>
              <TableCell align="right">
                <DeleteIcon onClick={()=>onDeleteClick(item.id)}/>
                <EditIcon onClick={()=>onEditClick(item.id)}/>    
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      {/* {!!items.length && (
        <Grid container spacing={1}>
            <Grid item sm={24} md={12} lg={12} justify="center" >
              <div style={{display:"flex",padding:"5px"}}>
              <Card  
              style={{display:"flex",padding:"0px",backgroundColor:"#cecece"}}
              >
                <div style={{display:"flex",paddingBottom:"0px"}}>
                <Box paddingY={1} paddingX={3} marginX={4}>
                    <Typography variant="h6">{"product"}</Typography>
                  </Box>
                  <Box paddingY={1} paddingX={3} marginX={0}>
                    <Typography variant="h6">{"quantity"}</Typography>
                    </Box>
                    <Box paddingY={1} paddingX={3} marginX={0}>
                    <Typography variant="h6">{"Category"}</Typography>
                    </Box>
                    <Box paddingY={1} paddingX={3} marginX={8}>
                    <Typography variant="h6">{"S. Price"}</Typography>
                  </Box>
                  <Box paddingY={1} paddingX={3} marginX={0}>
                    <Typography variant="h6">{"P. Price"}</Typography>
                  </Box>
                  <Box paddingY={1} paddingX={3} marginX={0}>
                    <Typography variant="h6">{"Actions"}</Typography>
                  </Box>
                </div>
                <div >
                
                </div>

              </Card>
              </div>
            </Grid>
            <Grid item sm={24} md={12} lg={12} justify="center" >
            {items.map((item) => (
              <div style={{display:"flex",padding:"10px"}}>
                <Card  style={{display:"flex",padding:"10px"}}>
                  <div style={{display:"flex",padding:"10px"}}>
                    <Box paddingY={1} paddingX={3} marginX={3}>
                      <Typography variant="h6">{item.product}</Typography>
                    </Box>
                    <Box paddingY={1} paddingX={3} marginX={2}>
                      <Typography variant="h6">{item.quantity}</Typography>
                    </Box>
                    <Box paddingY={1} paddingX={3} marginX={4}>
                      <Typography variant="h6">{item.categoryId}</Typography>
                    </Box>
                    <Box paddingY={1} paddingX={3} marginX={8}>
                      <Typography variant="h6">{item.salesPrice}</Typography>
                    </Box>
                    <Box paddingY={1} paddingX={3} marginX={5}>
                      <Typography variant="h6">{item.purchasePrice}</Typography>
                    </Box>
                    <Box paddingY={1} paddingX={3} marginX={5}>
                    <DeleteIcon onClick={()=>onDeleteClick(item.id)}/>
                      <EditIcon onClick={()=>onEditClick(item.id)}/>
                    </Box>
                  </div>
                  {/* <div>
                      <DeleteIcon onClick={()=>onDeleteClick(item.id)}/>
                      <EditIcon onClick={()=>onEditClick(item.id)}/>
                  </div> 

                </Card>
              </div>
              ))}
            </Grid>
        </Grid>
        )}
      */}
      
      {open && (
        <FormModal title="Add New Item" open={open} handleClose={handleClose}>
          <AddItemForm
            categories={categories}
            submitProjectData={submitProjectData}
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
            <EditItemForm editId={editId} 
            categories={categories} 
            submitProjectData={submitProjectData}
            submitCategoryData={submitCategoryData}
            handleEditClose={handleEditClose}
            />
          </FormModal>
        )}
    </Box>
  );
};

export default Items;

