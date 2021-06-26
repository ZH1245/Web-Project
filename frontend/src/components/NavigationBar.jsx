import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Button, Input, Anchor, Avatar, Typography, message } from "antd";
import logo from "../assets/logo.jpg";
import { UserOutlined } from "@ant-design/icons";
import { delToken, getToken } from "../utils/AuthUtil";
import { useContext } from "react";
import { Alert } from "antd";
import { UserContext, UserProviderContext } from "../context/UserContext";

// import store from "../redux/store";
import jwtDecode from "jwt-decode";
// const logo = require("../assets/logo.jpg");
const { Link } = Anchor;

const { Search } = Input;
const styles = {
  navButtons: {
    width: 100,
  },
};
function NavigationBar() {
  const history = useHistory();
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserProviderContext);

  // console.log(store.getState());
  const handleLogout = () => {
    delToken();
    setUserDetails({ loggedIn: false, AuthToken: "", role: "" });

    message.success("Logged Out Successfully");
    history.push("/");
  };
  return (
    <Navbar
      key="navbar"
      bg="light"
      expand="lg"
      style={{
        padding: "5px",
        // display: "flex",
        // justifyContent: "space-between",
        // overflow: "hidden",
        // border: "2px solid red",
      }}
    >
      <Navbar.Brand key="brand">
        {/* <Link href="/" title="PhoneHUB"></Link> */}
        {/* <Nav.Link href="/"> */}
        {/* <Button type="link"> */}
        <div className="logo">
          <img
            src={logo}
            alt="PhoneHUB Logo"
            width="155px"
            onClick={() => {
              history.push("/");
            }}
          />
        </div>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        key="toggle"
        style={{ marginLeft: "auto" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Search
          style={{ padding: 5 }}
          placeholder="SEARCH FOR MOBILES"
          enterButton="Search"
          onSearch={(e) => {
            history.push("/Search/" + e);
          }}
        />

        {userDetails.loggedIn ? (
          <div
            key="loggedIn"
            style={{
              // display: "inline",
              float: "right",
              margin: 0,
              // marginRight: "auto",
              // marginLeft: 0,
              // textAlign: "center",
            }}
          >
            <div style={{ margin: 5, display: "inline" }}>
              <Avatar icon={<UserOutlined />} style={{ margin: 6 }}></Avatar>
              <Typography.Text strong>
                {jwtDecode(getToken()).firstName}
              </Typography.Text>
            </div>
            <Button
              style={styles.navButtons}
              onClick={() => handleLogout()}
              // style={{ width: "100px" }}
            >
              LogOut
            </Button>
            {/* {userDetails.role == "admin" ? (
              <Button
                danger
                onClick={() => {
                  history.push("/addMobile");
                }}
              >
                ADD
              </Button>
            ) : (
              <div />
            )} */}
          </div>
        ) : (
          <div
            key="notLoggedIn"
            style={{
              display: "inline",
              float: "right",
              marginRight: "auto",
              marginLeft: 0,
              textAlign: "center",
            }}
          >
            <Button
              //   type="primary"
              onClick={() => history.push("/login")}
              style={styles.navButtons}
              // style={{ width: "100px" }}
            >
              Login
            </Button>
            <Button
              style={styles.navButtons}
              type="secondary"
              danger
              onClick={() => history.push("/signup")}
              // style={{ width: "100px" }}
            >
              SignUp
            </Button>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
