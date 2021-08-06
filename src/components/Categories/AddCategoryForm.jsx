import React from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";

const AddCategoryForm = ({ submitCategoryData , handleClose}) => {
  const { register, handleSubmit ,formState: { errors }} = useForm();

  const submitData = (data) => {
    submitCategoryData({ ...data, ...generateId("category") });
    handleClose();
  };
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={12}>
      <TextField
        {...register("name", { required: true })}
        fullWidth
        label="Name"
        margin="dense"
        variant="outlined"
      />
      <div style={{ color: "red" }}>
              {" "}
              {errors.name && "required"}
      </div>
  </Grid>
  </Grid>
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

export default AddCategoryForm;
