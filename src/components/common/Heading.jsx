import React from "react";
import { Typography } from "@material-ui/core";

const Heading = ({ name }) => {
  return (
    <Typography gutterBottom variant="h5">
      {name}
    </Typography>
  );
};

export default Heading;
