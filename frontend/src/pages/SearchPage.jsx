import { Col, message, Spin, Typography } from "antd";
import React from "react";
import MyLayout from "../components/MyLayout";
import { LoadingOutlined } from "@ant-design/icons";
import { useParams } from "react-router";

import client from "../api/client";
import MyCard from "../components/MyCard";
import { useState, useEffect } from "react";
const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

function SearchPage(props) {
  const { name } = useParams();
  const [mobiles, setmobiles] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    client
      .post("mobile/filter", { name: name })
      .then((resp) => {
        setmobiles(resp.data.data);
        setisloading(false);
      })
      .catch((e) => {
        message.warning(e);
      });
  }, [name]);
  return (
    <MyLayout>
      <Typography.Title level={3}>Search Results for {name}</Typography.Title>
      {isloading == true ? (
        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <Spin indicator={antIcon} size="large" />
        </div>
      ) : (
        mobiles.map((item) => {
          return (
            <Col key={item._id}>
              <MyCard
                title={item.name}
                price={item.price}
                key={item._id}
                imageurl={item.posterimage}
                _id={item._id}
              />
            </Col>
          );
        })
      )}
    </MyLayout>
  );
}

export default SearchPage;
