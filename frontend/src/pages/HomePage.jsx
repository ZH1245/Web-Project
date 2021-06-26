import { Col, Row, Typography } from "antd";
import { useState, useEffect } from "react";
import MyCard from "../components/MyCard";
import MyLayout from "../components/MyLayout";
import client from "../api/client";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

function HomePage() {
  const [mobiles, setMobiles] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await client
      .get(`mobile/get`)
      .then((resp) => {
        console.log(resp.data.data);
        setMobiles(resp.data.data.sort((a, b) => a.relDate > b.relDate));
      })
      .catch((e) => {
        console.log(e);
      });
    setisloading(false);
  };
  return (
    <MyLayout>
      <Typography.Title level={4}>Latest Mobiles</Typography.Title>
      <Row>
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
      </Row>
    </MyLayout>
  );
}

export default HomePage;
