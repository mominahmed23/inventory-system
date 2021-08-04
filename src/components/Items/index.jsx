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
const useStyles = makeStyles((theme) => ({}));

const Items = ({submitCategoryData}) => {
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
                  </div>
                  <div>
                      <DeleteIcon onClick={()=>onDeleteClick(item.id)}/>
                      <EditIcon onClick={()=>onEditClick(item.id)}/>
                  </div>

                </Card>
              </div>
              ))}
            </Grid>
        </Grid>
        )}
     
      
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

