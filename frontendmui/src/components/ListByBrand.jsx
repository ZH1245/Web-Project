import { CircularProgress, Grid } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MyLayout from "../layout/MyLayout";
// import MyCard from "./MyCard";
import MyBox from "./MyBox";
import NavigationBar from "./NavigationBar1";

function ListByBrand() {
  const { brand } = useParams();
  const [mobbrand, setbrand] = useState("");
  const [isloading, setisloading] = useState(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    setisloading(true);
    console.log(brand);
    setbrand(brand);
    axios
      .get("http://localhost:5000/api/mobiles/" + brand, {
        method: "GET",
      })
      .then((result) => {
        setdata(result.data);
        setisloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [brand]);
  return (
    <div>
      {/* <NavigationBar /> */}
      <MyLayout />
      {isloading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {data.map((item, index) => {
            return (
              <Grid item md={3} key={index}>
                {/* <MyCard */}
                <MyBox
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
    </div>
  );
}

export default ListByBrand;
