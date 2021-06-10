import {
  ListItemText,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from "react-router-dom";
const useStyle = makeStyles({
  drawer: {
    width: 230,
  },
});

function MyDrawer1(props) {
  const classes = useStyle();
  const history = useHistory();
  return (
    // <SwipeableDrawer
    <Drawer
      variant="temporary"
      classes={{ paper: classes.drawer }}
      open={props.drawertoggle}
      onClose={props.closeDrawer}
    >
      <List>
        {["Nokia", "Samsung"].map((text, index) => (
          <ListItem button key={index}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <ListItemText
              primary={text}
              onClick={() => {
                console.log(`Clicked on ${text}`);
                history.push(`/mobiles/${text.toLowerCase()}`);
              }}
            />
            {/* <ListItem></ListItem> */}
          </ListItem>
        ))}
      </List>
    </Drawer>
    // </SwipeableDrawer>
  );
}

export default MyDrawer1;
