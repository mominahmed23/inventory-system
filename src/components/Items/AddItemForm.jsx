import React from "react";
import { Box, TextField, Button, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";
import { useState } from "react";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormModal from "../common/FormModal";
import AddCategoryForm from "../Categories/AddCategoryForm";

const AddItemForm = ({ submitProjectData, categories, submitCategoryData }) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [newCategoryModel, setNewCategoryModel] = useState(false)

  const [open, setOpen] = React.useState(false);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const handleCloseDropDown = () => {
    setOpen(false);
  };

  const handleOpenDropDown = () => {
    setOpen(true);
  };
  const handleClosecategoryModal = () => {
    setNewCategoryModel(false);
  };

  const submitData = (data) => {
    // console.log(data);
    submitProjectData({ ...data, ...generateId("item") });
  };
  const onNewCategoryClick = () => {
    setNewCategoryModel(true);
  };
  return(
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
      
     <form onSubmit={handleSubmit(submitData)}>
      <TextField
       {...register("product", { required: true })}
        // {...register("product")}
        fullWidth
        label="Product"
        margin="dense"
        variant="outlined"
      />

      <span style={{color:"red"}}> {errors.product && 'required'}</span>
      <TextField
        {...register("quantity", { required: true })}
        fullWidth
        label="Quantity"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.quantity && 'required'}</span>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"15px 0px"}}> 
        <div style={{flexGrow:1,marginRight:"5px"}}>
        <InputLabel >Category</InputLabel>
        <Select
        
        {...register("categoryId",{ required: true })}
     
          open={open}
          onClose={handleCloseDropDown}
          onOpen={handleOpenDropDown}
        fullWidth
        
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

      <span style={{color:"red"}}> {errors.quantity && 'required'}</span>

      <TextField
        {...register("itemCode", { required: true })}
        fullWidth
        label="Item Code/ Bar Code"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.itemCode && 'required'}</span>
      <TextField
        {...register("hsn", { required: true })}
        fullWidth
        label="HSN/SAC Code"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.hsn && 'required'}</span>
      <TextField
        {...register("salesPrice", { required: true })}
        fullWidth
        label="Sales Price"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.salesPrice && 'required'}</span>
      <TextField
        {...register("purchasePrice", { required: true })}
        fullWidth
        label="Purchase Price"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.purchasePrice && 'required'}</span>
      <TextField
        {...register("mrp", { required: true })}
        fullWidth
        label="MRP"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.mrp && 'required'}</span>
      <TextField
        {...register("discount", { required: true })}
        fullWidth
        label="Discount"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.discount && 'required'}</span>
      <TextField
        {...register("texSlab", { required: true })}
        fullWidth
        label="Tex Slab"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.texSlab && 'required'}</span>

      <TextField
        {...register("comment")}
        fullWidth
        multiline
        label="Comments"
        margin="dense"
        variant="outlined"
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
      </div>

    
    );
};

export default AddItemForm;
