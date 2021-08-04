import React from "react";
import { Box, Button, Dialog } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const FormModal = ({ open, handleClose, title, children }) => {
  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <Box marginY={2}>
        <Typography align="center" variant="h5">
          {title}
        </Typography>
        <hr color="#cecece"/>
      </Box>

      <Box paddingY={2} paddingX={4}>
        {children}
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          onClick={handleClose}
        >
          cancel
        </Button>
      </Box>
    </Dialog>
  );
};

export default FormModal;
