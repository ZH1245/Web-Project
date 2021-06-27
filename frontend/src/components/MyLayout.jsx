import axios from "axios";
import "antd/dist/antd.css";
import NavigationBar from "./NavigationBar";
import { React, useContext } from "react";
import { Layout, Menu, Input, Typography, Button } from "antd";
import { UserContext, UserProviderContext } from "../context/UserContext";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import client from "../api/client";

const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { SubMenu } = Menu;
const styles = {
  border: { border: "2px solid red" },
};
const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

function Nav(props) {
  const history = useHistory();
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserProviderContext);
  const [isloading, setisloading] = useState(true);
  const [brands, setbrands] = useState([]);
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await client
      .get("brands/get")
      .then((resp) => {
        // console.log(resp.data.data);
        setbrands(resp.data.data.sort(compare));
        // console.log(brands);
      })
      .catch((e) => {
        console.log(e);
      });
    setisloading(false);
  };
  return (
    // <React.Fragment>
    <Layout className="layout">
      {/* <Header theme="dark" hasSider={true}> */}
      <NavigationBar />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            key="menu"
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu title="BRANDS" key="brands">
              {isloading ? (
                <div style={{ margin: "0 auto" }}>
                  <Spin indicator={antIcon} size="large" />
                </div>
              ) : (
                brands.map((item, index) => {
                  return (
                    <Menu.Item
                      key={item._id}
                      id={item._id}
                      onClick={() => {
                        // history.push(`/brands/${item._id}`);
                        history.push(`/brands/${item._id}`);
                      }}
                    >
                      {item.name}
                    </Menu.Item>
                  );
                })
              )}
            </SubMenu>
            {/* <Menu.Item key="search">Filter Search</Menu.Item> */}
            <Menu.Item
              key="popularity"
              onClick={() => {
                history.push("/popularity");
              }}
            >
              Popularity Table
            </Menu.Item>
            {userDetails.role == "admin" ? (
              <Menu.Item
                key="addmobile"
                danger
                onClick={() => {
                  history.push("/addMobile");
                }}
              >
                Add Mobile
              </Menu.Item>
            ) : (
              <div />
            )}
          </Menu>
        </Sider>
        <Content style={{ display: "inline", margin: 15 }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Nav;
