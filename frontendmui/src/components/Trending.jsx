import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import NavigationBar from "./NavigationBar1";
import { Grid } from "@material-ui/core";
import MyCard from "./MyCard";
import axios from "axios";

const gridItem = 3;
function Trending() {
  const [isloading, setisloading] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setisloading(true);
    axios
      .get("http://localhost:5000/api", {
        method: "GET",
      })
      // .then((response) => {
      //   response.json();
      // })
      .then((result) => {
        setdata(result.data);
        setisloading(false);
      })
      .catch((err) => {
        console.error(err);
      });
    // fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-key": "9e06c4a83cmsh812246a61c3685ap1527c9jsnd717a7d9c521",
    //     "x-rapidapi-host": "imdb8.p.rapidapi.com",
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }, []);
  return (
    <div>
      <NavigationBar />
      {isloading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {data.map((item, index) => {
            return (
              <Grid item md={gridItem} key={index}>
                <MyCard
                  description={item.description}
                  title={item.name}
                  year={item.year}
                  price={item.price}
                  imageurl={item.posterimage}
                />
              </Grid>
            );
          })}
          ``
        </Grid>
      )}
      {/* <Grid container spacing={2}>
        <Grid item md={12}>
          <Typography variant="h3">Trending:</Typography>
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
      </Grid>*/}
    </div>
  );
}

export default Trending;
