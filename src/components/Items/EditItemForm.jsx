import React from "react";
import { Box, TextField, Button, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";

const EditItemForm = ({ categories }) => {
  const { register, handleSubmit } = useForm();

  const submitData = (data) => {
    console.log("clicked...");
  };
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <TextField
        {...register("Product")}
        fullWidth
        label="Product"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("Quantity")}
        fullWidth
        label="Quantity"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("categoryId")}
        fullWidth
        label="Choose Category"
        margin="dense"
        variant="outlined"
        select
      >
        {categories.length ? (
          categories.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))
        ) : (
          <MenuItem value="">Not Available</MenuItem>
        )}
      </TextField>
      <TextField
        {...register("ItemCode")}
        fullWidth
        label="Item Code/ Bar Code"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("HSN")}
        fullWidth
        label="HSN/SAC Code"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("salesPrice")}
        fullWidth
        label="Sales Price"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("PurchasePrice")}
        fullWidth
        label="Purchase Price"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("mrp")}
        fullWidth
        label="MRP"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("discount")}
        fullWidth
        label="Discount"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("texSlab")}
        fullWidth
        multiline
        label="Tex Slab"
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
  );
};

export default EditItemForm;
