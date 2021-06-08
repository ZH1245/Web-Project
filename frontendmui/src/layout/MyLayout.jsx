import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavigationBar from "../components/NavigationBar1";
import MyDrawer from "../components/MyDrawer1";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function MyLayout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavigationBar />
      <MyDrawer />
    </div>
  );
}

export default MyLayout;
