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
import * as Yup from 'yup';
const EditItemForm = ({ submitProjectData,submitCategoryData,categories, editId,handleEditClose }) => {
  
  const editItemSchema = Yup.object().shape({
    product: Yup.string().required('Required'),
    quantity: Yup.number().required('Required'),
    salesPrice: Yup.number().required('Required'),
    hsn:Yup.string().required('Required'),
    barCode:Yup.string().required('Required'),
    itemCode:Yup.string().required('Required'),
    salesPrice:Yup.number().required('Required'),
    purchasePrice:Yup.number().required('Required'),
    mrp:Yup.number().required('Required'),
    discount:Yup.number().required('Required'),
    texSlab:Yup.number().required('Required'),
    categoryId:Yup.string().required('Required'),
  });

  const dispatch = useDispatch();
  const {items} = useSelector(state => state);

  const itemData = items.find(x => x.id === editId);
  
  const saveItem = (data) => {
    console.log(data)
    // dispatch(editItemAction(data, editId));
    // handleEditClose();
  };
  
  

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
            product: itemData.product,
            quantity:itemData.quantity,
            hsn:itemData.hsn,
            barCode:itemData.barCode,
            itemCode:itemData.itemCode,
            salesPrice:itemData.salesPrice,
            purchasePrice:itemData.purchasePrice,
            mrp:itemData.mrp,
            discount:itemData.discount,
            texSlab:itemData.texSlab,
            comment:itemData.comment,
            categoryId:itemData.categoryId
            }}

            validationSchema={editItemSchema}
            onSubmit={values =>saveItem(values)}
        >
          {!!itemData?(
                props => (
                  <form >
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          
                          fullWidth
                          label="Product"
                          margin="dense"
                          variant="outlined"
                          type="text"
                          onChange={props.handleChange}
                          value={props.values.product}
                          name="product"

                        />
                        {props.errors.product && <div id="feedback" style={{color:"red"}}>{props.errors.product}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                        
                        fullWidth
                        label="Quantity"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        onChange={props.handleChange}
                        value={props.values.quantity}
                        name="quantity"
                        />
                        {props.errors.quantity && <div id="feedback" style={{color:"red"}}>{props.errors.quantity}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"15px 0px"}}> 
                          <div style={{flexGrow:1,marginRight:"5px"}}>
                          <InputLabel >Category</InputLabel>
                          <Select
                        
                        fullWidth
                        label="Category ID"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        onChange={props.handleChange}
                        value={props.values.categoryId}
                        name="categoryId"
                        open={open}
                        onClose={handleCloseDropDown}
                        onOpen={handleOpenDropDown}
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
                        {props.errors.categoryId && <div id="feedback" style={{color:"red"}}>{props.errors.categoryId}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                        
                        fullWidth
                        label="Item Code"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        onChange={props.handleChange}
                        value={props.values.itemCode}
                        name="itemCode"
                        />
                       {props.errors.itemCode && <div id="feedback" style={{color:"red"}}>{props.errors.itemCode}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <TextField
                        
                        fullWidth
                        label="HSN"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        onChange={props.handleChange}
                        value={props.values.hsn}
                        name="hsn"
                      />
                     {props.errors.hsn && <div id="feedback" style={{color:"red"}}>{props.errors.hsn}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <TextField
                      
                      fullWidth
                      label="Sales Price"
                      margin="dense"
                      variant="outlined"
                      type="number"
                      onChange={props.handleChange}
                      value={props.values.salesPrice}
                      name="salesPrice"
                      />
                     {props.errors.salesPrice && <div id="feedback" style={{color:"red"}}>{props.errors.salesPrice}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <TextField
                        
                        fullWidth
                        label="Purchase Price"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        onChange={props.handleChange}
                        value={props.values.purchasePrice}
                        name="purchasePrice"
                        />
                         {props.errors.purchasePrice && <div id="feedback" style={{color:"red"}}>{props.errors.purchasePrice}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <TextField
                        
                        fullWidth
                        label="MRP"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        onChange={props.handleChange}
                        value={props.values.mrp}
                        name="mrp"
                      />
                      {props.errors.mrp && <div id="feedback" style={{color:"red"}}>{props.errors.mrp}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <TextField
                      
                      fullWidth
                      label="Discount"
                      margin="dense"
                      variant="outlined"
                      type="number"
                      onChange={props.handleChange}
                      value={props.values.discount}
                      name="discount"
                      />
                     {props.errors.discount && <div id="feedback" style={{color:"red"}}>{props.errors.discount}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={6}>


      
                      <TextField
                        
                        fullWidth
                        label="tex Slab"
                        margin="dense"
                        variant="outlined"
                        type="number"
                        onChange={props.handleChange}
                        value={props.values.texSlab}
                        name="texSlab"
                      />
                     {props.errors.texSlab && <div id="feedback" style={{color:"red"}}>{props.errors.texSlab}</div>} 
                      </Grid>
                      <Grid item xs={12} sm={12}>
                      <TextField
                          
                          fullWidth
                          label="Comment"
                          multiline
                          margin="dense"
                          variant="outlined"
                          type="number"
                          onChange={props.handleChange}
                          value={props.values.comment}
                          name="comment"
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




