import React from "react";
import { Box, TextField, Button, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";
import { useState } from "react";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormModal from "../common/FormModal";
import AddCategoryForm from "../Categories/AddCategoryForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editItemAction } from "../../redux/actions/items";
const EditItemForm = ({ submitProjectData,submitCategoryData,categories, editId,handleEditClose }) => {
  const dispatch = useDispatch();
  const {items} = useSelector(state => state);

const itemData = items.find(x => x.id === editId);

const submitData = (data) => {
  dispatch(editItemAction(data, editId));
  handleEditClose();
};
  
  
  const { register, handleSubmit } = useForm();
  const [newCategoryModel, setNewCategoryModel] = useState(false)

  const [open, setOpen] = React.useState(false);
  const handleCloseDropDown = () => {
    setOpen(false);
  };
  const handleOpenDropDown = () => {
    setOpen(true);
  };
  const handleClosecategoryModal = () => {
    setNewCategoryModel(false);
  };

  const onNewCategoryClick = () => {
    setNewCategoryModel(true);
  };
  return (
    <div>
    {newCategoryModel && (
      <FormModal
        title="Add New Category"
        open={newCategoryModel}
        handleClose={handleClosecategoryModal}
      >
        <AddCategoryForm submitCategoryData={submitCategoryData} handleClose={handleClosecategoryModal}/>
      </FormModal>
    )}
    {!!itemData &&
   <form onSubmit={handleSubmit(submitData)}>
    <TextField
      {...register("product")}
      fullWidth
      label="Product"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.product}
      required={true}
    />
    <TextField
      {...register("quantity")}
      fullWidth
      label="Quantity"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.quantity}
    />
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"15px 0px"}}> 
      <div style={{flexGrow:1,marginRight:"5px"}}>
      <InputLabel >Category</InputLabel>
      <Select
      {...register("categoryId")}
        open={open}
        onClose={handleCloseDropDown}
        onOpen={handleOpenDropDown}
        fullWidth
        defaultValue={itemData.categoryId}
      >
       {categories.length ? (
           categories.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))
       ) :(
        <MenuItem value={null}>None</MenuItem>
       )}
      
       
      </Select>
      </div>
      <div>
      <Button
          variant="contained"
          color="secondary"
          disableElevation
          onClick={onNewCategoryClick}
        >
          Add new category
        </Button>
      </div>
    </div>
 


    

    <TextField
      {...register("itemCode")}
      fullWidth
      label="Item Code/ Bar Code"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.itemCode}
    />
    <TextField
      {...register("hsn")}
      fullWidth
      label="HSN/SAC Code"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.hsn}
    />
    <TextField
      {...register("salesPrice")}
      fullWidth
      label="Sales Price"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.salesPrice}
    />
    <TextField
      {...register("purchasePrice")}
      fullWidth
      label="Purchase Price"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.purchasePrice}
    />
    <TextField
      {...register("mrp")}
      fullWidth
      label="MRP"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.mrp}
    />
    <TextField
      {...register("discount")}
      fullWidth
      label="Discount"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.discount}
    />
    <TextField
      {...register("texSlab")}
      fullWidth
      multiline
      label="Tex Slab"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.texSlab}
    />

    <Box marginY={3}>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
      >
        save
      </Button>
    </Box>
    </form>
}
    </div>
  );
};

export default EditItemForm;




