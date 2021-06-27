import React from "react";

import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import MyLayout from "../components/MyLayout";
import { LoadingOutlined } from "@ant-design/icons";

import { Spin, Typography } from "antd";

// import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import MyCard from "../components/MyCard";
import client from "../api/client";
import { Col, Row } from "antd";
const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

function Brands() {
  // const history = useHistory();
  // const params = useParams();
  const [isloading, setisloading] = useState(true);
  const [data, setData] = useState([]);

  const { id } = useParams();
  // const { name } = useParams();
  useEffect(() => {
    console.log(id);
    getData();
    // axios
    //   .get(`http://localhost:4000/api/brands/get/`)
    //   .then((res) => {
    //     setisloading(false);
    //     setbrands(res.data.data);
    //     // setbrands(brands.sort());
    //     console.log(brands);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // {name==item.name
    // item._id}
    // setisloading(true);
  }, [id]);
  const getData = async () => {
    await client
      .get(`mobile/getBrand/${id}`)
      .then((res) => {
        setisloading(false);
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setisloading(false);
  };
  return (
    <MyLayout>
      {isloading === true ? (
        <div style={{ margin: "0 auto" }}>
          <Spin indicator={antIcon} size="large" />
        </div>
      ) : data.length >= 0 ? (
        <>
          <Row>
            {data.map((item) => {
              return (
                <Col>
                  <MyCard
                    title={item.name}
                    imageurl={item.posterimage}
                    price={item.price}
                    key={item._id}
                    _id={item._id}
                  />
                </Col>
              );
            })}
          </Row>
        </>
      ) : (
        <>
          <div>NO DATA</div>
        </>
      )}
    </MyLayout>
  );
}

export default Brands;
