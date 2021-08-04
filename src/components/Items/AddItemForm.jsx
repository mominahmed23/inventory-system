import React from "react";
import { Box, TextField, Button, MenuItem, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";
import { useState } from "react";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormModal from "../common/FormModal";
import AddCategoryForm from "../Categories/AddCategoryForm";
import * as yup from "yup";
const AddItemForm = ({ submitProjectData, categories, submitCategoryData }) => {

  const validationSchema = yup.object({
    product: yup.string().required("Required"),
    lastName: yup.string().required("Required")
  });
  

  const preLoadedvalues ={
    product:"product" 
  }
  const {register, formState: { errors }, handleSubmit } = useForm();
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

  const submitData = (data) => {
    submitProjectData({ ...data, ...generateId("item") });
    console.log(data)
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
       <Grid container spacing={3}>
         <Grid item xs={12} sm={6}>
          <TextField
              {...register("product", { required: true })}
                fullWidth
                label="Product"
                margin="dense"
                variant="outlined"
                name="product"
                type="text"
              />
            <span style={{color:"red"}}> {errors.product && 'required'}</span>
         </Grid>
         <Grid item xs={12}  sm={6}> 
            <TextField
            {...register("quantity", { required: true })}
            fullWidth
            label="Quantity"
            margin="dense"
            variant="outlined"
            type="number"
          />
          <span style={{color:"red"}}> {errors.quantity && 'required'}</span>
         </Grid>
       <Grid item xs={12}  sm={6}> 
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
          <span style={{color:"red"}}> {errors.categoryId && 'required'}</span>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          {...register("itemCode", { required: true })}
          fullWidth
          label="Item Code/ Bar Code"
          margin="dense"
          variant="outlined"
        />
        <span style={{color:"red"}}> {errors.itemCode && 'required'}</span>
      </Grid>
     
      <Grid item xs={12} sm={6}>
          <TextField
            {...register("hsn", { required: true })}
            fullWidth
            label="HSN/SAC Code"
            margin="dense"
            variant="outlined"

          />
          <span style={{color:"red"}}> {errors.hsn && 'required'}</span>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        {...register("salesPrice", { required: true })}
        fullWidth
        label="Sales Price"
        margin="dense"
        variant="outlined"
        type="number"
      />
      <span style={{color:"red"}}> {errors.salesPrice && 'required'}</span>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        {...register("purchasePrice", { required: true })}
        fullWidth
        label="Purchase Price"
        margin="dense"
        variant="outlined"
        type="number"
      />
      <span style={{color:"red"}}> {errors.purchasePrice && 'required'}</span>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        {...register("mrp", { required: true })}
        fullWidth
        label="MRP"
        margin="dense"
        variant="outlined"
        type="number"
      />
      <span style={{color:"red"}}> {errors.mrp && 'required'}</span>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        {...register("discount", { required: true })}
        fullWidth
        label="Discount"
        margin="dense"
        variant="outlined"
        type="number"
      />
      <span style={{color:"red"}}> {errors.discount && 'required'}</span>
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField
        {...register("texSlab", { required: true })}
        fullWidth
        label="Tex Slab"
        margin="dense"
        variant="outlined"
      />
      <span style={{color:"red"}}> {errors.texSlab && 'required'}</span>
          </Grid>
          <Grid item xs={12} sm={12}>
      <TextField
        {...register("comment")}
        fullWidth
        multiline
        label="Comments"
        margin="dense"
        variant="outlined"
      />
       </Grid>
      
      </Grid>
      <Box marginY={3} textAlign="right">
        <Button
          
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

