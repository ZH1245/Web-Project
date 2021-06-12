import React from "react";
import { Box, Button, Grid, IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
const styles = {
  container: {
    height: "200px",
    display: "flex",
    flexDirection: "column",
    // width: "200px",
    margin: 5,
    padding: 10,
    // border: "1px dotted black",
    // borderRight: "1px dotted red",
    borderRadius: 20,
  },
  button: {
    margin: 4,
  },
  text: { margin: 2 },
};
function MyBox(props) {
  return (
    <Box style={styles.container}>
      <img src={props.imageurl} width="200px" />
      <Typography variant="h5" style={styles.text}>
        {props.title}
      </Typography>
      <Typography variant="h6" style={styles.text}>
        {`Price : ${props.price}`}
      </Typography>
      <Grid container>
        <Button variant="outlined" color="secondary" style={styles.button}>
          <IconButton>
            <FavoriteIcon color="secondary" />
          </IconButton>
          Want
        </Button>
        <Button variant="contained" color="primary" style={styles.button}>
          Specs
        </Button>
      </Grid>
    </Box>
  );
}

export default MyBox;
