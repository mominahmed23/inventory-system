import React from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";

const AddItemForm = ({ submitAddItem, categories }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitData = (data) => {
    submitAddItem({ ...data, ...generateId("item") });
    console.log(data);
  };

  return (
    <div>
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
            <span style={{ color: "red" }}>
              {" "}
              {errors.product && "required"}
            </span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              {...register("quantity", { required: true })}
              fullWidth
              label="Quantity"
              margin="dense"
              variant="outlined"
              type="number"
            />
            <span style={{ color: "red" }}>
              {" "}
              {errors.quantity && "required"}
            </span>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("itemCode", { required: true })}
              fullWidth
              label="Item Code/ Bar Code"
              margin="dense"
              variant="outlined"
            />
            <span style={{ color: "red" }}>
              {" "}
              {errors.itemCode && "required"}
            </span>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              {...register("hsn", { required: true })}
              fullWidth
              label="HSN/SAC Code"
              margin="dense"
              variant="outlined"
            />
            <span style={{ color: "red" }}> {errors.hsn && "required"}</span>
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
            <span style={{ color: "red" }}>
              {" "}
              {errors.salesPrice && "required"}
            </span>
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
            <span style={{ color: "red" }}>
              {" "}
              {errors.purchasePrice && "required"}
            </span>
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
            <span style={{ color: "red" }}> {errors.mrp && "required"}</span>
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
            <span style={{ color: "red" }}>
              {" "}
              {errors.discount && "required"}
            </span>
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
