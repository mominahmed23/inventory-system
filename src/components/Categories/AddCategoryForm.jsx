import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";

const AddCategoryForm = ({ submitCategoryData , handleClose}) => {
  const { register, handleSubmit } = useForm();

  const submitData = (data) => {
    submitCategoryData({ ...data, ...generateId("category") });
    handleClose();
  };
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <TextField
        {...register("name")}
        fullWidth
        label="Name"
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

export default AddCategoryForm;
