import React from "react";
import { Box, TextField, Button, MenuItem,Grid } from "@material-ui/core";
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
import { Formik } from "formik";
const EditItemForm = ({ submitProjectData,submitCategoryData,categories, editId,handleEditClose }) => {
  












  const dispatch = useDispatch();
  const {items} = useSelector(state => state);

const itemData = items.find(x => x.id === editId);
const preLoadedvalues ={
  product:itemData.product 
}
const submitData = (data) => {
  dispatch(editItemAction(data, editId));
  handleEditClose();
};
  
  
const { register, formState: { errors }, handleSubmit } = useForm({
  defaultValues:preLoadedvalues
});
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

  <div>
     <Formik
       initialValues={{ 
         product: 'jared' ,
         quantity:5
        }}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {!!itemData?(
            props => (
              <form onSubmit={props.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      {...register("product", { required: true })}
                      fullWidth
                      label="Product"
                      margin="dense"
                      variant="outlined"
                      type="text"
                      onChange={props.handleChange}
                      value={props.values.product}
                      name="product"
                    />
                     <span style={{color:"red"}}> {errors.product && 'required'}</span>
                     {props.errors.product && <div id="feedback">{props.errors.product}</div>}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                    {...register("quantity", { required: true })}
                    fullWidth
                    label="Product"
                    margin="dense"
                    variant="outlined"
                    type="number"
                    onChange={props.handleChange}
                    value={props.values.quantity}
                    name="quantity"
                    />
                    <span style={{color:"red"}}> {errors.quantity && 'required'}</span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"15px 0px"}}> 
                      <div style={{flexGrow:1,marginRight:"5px"}}>
                      <InputLabel >Category</InputLabel>
                      <Select
                    {...register("categoryId",{ required: true })}
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
                    <span style={{color:"red"}}> {errors.categoryId && 'required'}</span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                  {...register("itemCode", { required: true })}
                    fullWidth
                    label="Item Code/ Bar Code"
                    margin="dense"
                    variant="outlined"
                    onChange={props.handleChange}
                    value={props.values.itemCode}s
                    name="itemCode"
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
                    defaultValue={itemData.hsn}
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
                    defaultValue={itemData.salesPrice}
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
                    defaultValue={itemData.purchasePrice}
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
                    defaultValue={itemData.mrp}
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
                    defaultValue={itemData.discount}
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
                    defaultValue={itemData.texSlab}
                    type="number"
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
                      defaultValue={itemData.comment}
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
            )
       ):(null)
       }
      
     </Formik>
   </div>




    {/* {!!itemData &&
      <form onSubmit={handleSubmit(submitData)}>
        <Grid container spacing={3}>
         <Grid item xs={12} sm={6}>
          <TextField
            {...register("product", { required: true })}
            fullWidth
            label="Product"
            margin="dense"
            variant="outlined"
          />
          <span style={{color:"red"}}> {errors.product && 'required'}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          // ref={register}
          {...register("quantity", { required: true })}
            fullWidth
            label="Quantity"
            margin="dense"
            variant="outlined"
            name="product"
            type="number"
          />
          <span style={{color:"red"}}> {errors.quantity && 'required'}</span>
        </Grid>
    <Grid item xs={12} sm={6}>
    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"15px 0px"}}> 
      <div style={{flexGrow:1,marginRight:"5px"}}>
      <InputLabel >Category</InputLabel>
      <Select
     {...register("categoryId",{ required: true })}
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
    <span style={{color:"red"}}> {errors.categoryId && 'required'}</span>
    </Grid>
    <Grid item xs={12} sm={6}>
    <TextField
     {...register("itemCode", { required: true })}
      fullWidth
      label="Item Code/ Bar Code"
      margin="dense"
      variant="outlined"
      defaultValue={itemData.itemCode}
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
      defaultValue={itemData.hsn}
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
      defaultValue={itemData.salesPrice}
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
      defaultValue={itemData.purchasePrice}
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
      defaultValue={itemData.mrp}
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
      defaultValue={itemData.discount}
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
      defaultValue={itemData.texSlab}
      type="number"
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
        defaultValue={itemData.comment}
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
} */}
    </div>
  );
};

export default EditItemForm;




