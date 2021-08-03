/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@material-ui/core";
import FormModal from "../common/FormModal";
import AddClientForm from "./AddCategoryForm";
import { addCategoryAction } from "../../redux/actions/categories/index";

const Categories = ({submitCategoryData}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box paddingBottom={3}>
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
      {open && (
        <FormModal
          title="Add New Category"
          open={open}
          handleClose={handleClose}
        >
          <AddClientForm submitCategoryData={submitCategoryData} handleClose={handleClose}/>
        </FormModal>
      )}
    </Box>
  );
};

export default Categories;
