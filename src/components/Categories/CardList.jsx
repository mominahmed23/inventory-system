import React from "react";
import { Paper, Box, Typography, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.text.disabled,
  },
}));

const CardList = ({ item }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Box paddingY={2} paddingX={3}>
        <Typography className={classes.title} variant="h6">
          {item.name}
        </Typography>
        <Chip label={item.email} />
      </Box>
    </Paper>
  );
};

export default CardList;
