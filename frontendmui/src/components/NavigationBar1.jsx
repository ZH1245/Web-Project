import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  // Menu,
  // MenuItem,
  Toolbar,
  // Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MyDrawer from "./MyDrawer1";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menuBtn: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(2),
  },
  Search: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
}));

function NavigationBar() {
  const history = useHistory();
  const classes = useStyles();
  const [isOpened, setDrawerOpened] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpened(!isOpened);
  };

  return (
    <React.Fragment>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton
            className={classes.menuBtn}
            onClick={toggleDrawer}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Button
            // variant="button"
            color="inherit"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Button>
          <Button
            // variant="button"
            color="inherit"
            onClick={() => {
              history.push("/popular");
            }}
          >
            Popular
          </Button>
          <InputBase
            color="inherit"
            placeholder="Search for Mobile Phone"
            className={classes.Search}
          ></InputBase>
          <Button
            variant="primary"
            color="inherit"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login / Signup
          </Button>
        </Toolbar>
      </AppBar>
      <MyDrawer
        drawertoggle={isOpened}
        closeDrawer={() => setDrawerOpened(false)}
      />
    </React.Fragment>
  );
}

export default NavigationBar;
