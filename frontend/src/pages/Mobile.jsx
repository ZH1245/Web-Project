import React from "react";
import { useEffect, useState } from "react";
import { List, Typography } from "antd";
import { Table } from "react-bootstrap";
import "antd/dist/antd.less";

import { useParams } from "react-router";
import MyLayout from "../components/MyLayout";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import client from "../api/client";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";
import jwtDecode from "jwt-decode";
import { getToken } from "../utils/AuthUtil";
const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
const { Text } = Typography;
const styles = {
  details: {
    textAlign: "center",
  },
};
function Mobile() {
  const { id } = useParams();
  const userDetails = useContext(UserContext);
  const [mobile, setMobile] = useState([]);
  const [comments, setComments] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    setisloading(true);
    await client
      .get(`mobile/get/${id}`)
      .then((res) => {
        // console.log(res.data.data);
        setMobile(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
    await client
      .get(`comments/getbyMobile/${id}`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
    setisloading(false);
  };

  return (
    <MyLayout>
      {isloading === true ? (
        <div style={{ margin: "0 auto" }}>
          <Spin indicator={antIcon} size="large" />
        </div>
      ) : mobile.length == 0 ? (
        <div>No Data Found</div>
      ) : (
        <>
          <div
            style={{
              padding: 20,
              margin: "0 auto",
              display: "inline",

              // justifyContent: "center",
            }}
          >
            <img
              src={mobile.mobileImage}
              alt={`${mobile.name}_image`}
              className="img-fluid"
              width="400px"
            />
            <br />

            <Table responsive style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <td colSpan={2} style={{ textAlign: "center" }}>
                    <Typography.Title level={3}>{mobile.name}</Typography.Title>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{"Brand"}</td>
                  <td>{mobile.brand.name}</td>
                </tr>
                <tr>
                  <td>{"OS"}</td>
                  <td>{mobile.OS}</td>
                </tr>
                <tr>
                  <td>{"Back Camera"}</td>
                  <td>
                    {mobile.backCamera.MP +
                      "MP, Flash: " +
                      mobile.backCamera.flash}
                  </td>
                </tr>
                <tr>
                  <td>{"Front Camera"}</td>
                  <td>
                    {mobile.frontCamera.MP +
                      "MP, Flash: " +
                      mobile.frontCamera.flash}
                  </td>
                </tr>
                <tr>
                  <td>{"RAM"}</td>
                  <td>{mobile.RAM + " GB"}</td>
                </tr>
                <tr>
                  <td>{"STORAGE"}</td>
                  <td>{mobile.storage + " GB"}</td>
                </tr>
                <tr>
                  <td>{"Sensors"}</td>
                  <td>
                    {mobile.sensor
                      .map((item) => {
                        return item.name;
                      })
                      .join(" , ")}
                  </td>
                </tr>
                <tr>
                  <td>{"Bluetooth"}</td>
                  <td>{mobile.bluetooth ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <td>{"NFC"}</td>
                  <td>{mobile.NFC ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <td>{"Radio"}</td>
                  <td>{mobile.radio ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <td>{"IP_Rating"}</td>
                  <td>{mobile.IP_Rating.join(" , ")}</td>
                </tr>
                <tr>
                  <td>{"Release Date"}</td>
                  <td>{mobile.relDate.split("T")[0]}</td>
                </tr>
                <tr>
                  <td>{"Price"}</td>
                  <td>{mobile.price + "/-RS"}</td>
                </tr>
                <tr>
                  <td>{"Status"}</td>
                  <td>{mobile.status}</td>
                </tr>
              </tbody>
            </Table>
            <div>
              <Typography.Title level={2} strong>
                User opinions & Comments
              </Typography.Title>
              {comments.length == 0 ? (
                <div>No Comments Yet</div>
              ) : (
                <div>
                  {comments.map((item) => {
                    return (
                      <Comments
                        description={item.description}
                        time={item.time}
                        key={item._id}
                        id={item._id}
                        userId={item.userId._id}
                        name={item.userId.firstName}
                      />
                    );
                  })}
                </div>
              )}
              {/* <div>
              {comments.map((item) => {
                return (
                  <Comments
                    description={item.description}
                    time={item.time}
                    key={item._id}
                    id={item._id}
                    userId={item.userId._id}
                    name={item.userId.firstName}
                  />
                );
              })}
            </div> */}

              {userDetails.loggedIn && (
                <div>
                  <Typography.Title level={3}>Add Comments</Typography.Title>
                  {/* <div>Hi Zain Rondo You can add here fucking comments</div> */}
                  <AddComment mobileId={mobile._id} />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </MyLayout>
  );
}

export default Mobile;
