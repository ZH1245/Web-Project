import { Grid, Typography } from "@material-ui/core";
import React from "react";
import MyLayout from "../layout/MyLayout";
import MyCard from "./MyCard";
import NavigationBar from "./NavigationBar1";
// import { makeStyles } from "@material-ui/core";
const gridItem = 3;
// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   cards: {
//     margin: "5px 0",
//   },
// };
// const useStyles = makeStyles((theme) => {});
function HomePage() {
  // const classes = useStyles();
  return (
    <div>
      {/* <NavigationBar /> */}
      <MyLayout />
      {/* <Container style={styles.container}> */}
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography variant="h3">Latest:</Typography>
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            style
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
      </Grid>
      {/* </Container> */}
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography variant="h3">Most Pop:</Typography>
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            style
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
        <Grid item md={gridItem}>
          <MyCard
            description="SOME MOVIE DESCRIP"
            title="MARVEL Avengers"
            year="2008"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
