import { React, useState, useEffect } from "react";
// import MyLayout from './MyLayout'
import { useHistory } from "react-router-dom";
import "antd/dist/antd.less";

import {
  Layout,
  Form,
  Input,
  // Row,
  // Col,
  Button,
  Typography,
  Alert,
  message,
  // Breadcrumb,
} from "antd";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import { saveToken } from "../utils/AuthUtil";
import client from "../api/client";
import { useContext } from "react";
import decode from "jwt-decode";
import { UserContext, UserProviderContext } from "../context/UserContext";
import { connect } from "react-redux";
// const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const styles = {
  inputBox: {
    maxWidth: 450,
  },
};

function LogIn({ dispatch }) {
  const history = useHistory();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const setUserDetails = useContext(UserProviderContext);
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  const [form] = Form.useForm();
  const handleFinish = async (e) => {
    setLoading(true);
    try {
      await client
        .post("user/login", { password: e.password, email: e.email })
        .then((response) => {
          console.log(response.data.data);
          saveToken(response.data.data);
          console.log(decode(response.data.data).role);
          setUserDetails({
            loggedIn: true,
            role: decode(response.data.data).role,
            AuthToken: response.data.data,
          });
          // saveToken(response.data.data);
          message.success("Logged In Successfully");
          history.goBack();
        });
    } catch (e) {
      console.log("e is", e);
      message.error(e.response.data.message);
    }

    setLoading(false);
  };

  return (
    <div>
      <NavigationBar />
      <div
        style={{
          margin: "10px auto",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        {/* <Button
          type="link"
          onClick={() => {
            history.push("/");
          }}
        >
          Back To Home
        </Button> */}

        <Title strong level={2} type="success" underline>
          Login
        </Title>
        <div
          style={{
            // width: 600,
            // border: "2px solid red",
            margin: "0 auto",
            padding: 10,
          }}
        >
          <Form
            // style={{ border: "2px solid red" }}
            autoComplete
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onFinish={handleFinish}
          >
            {/* <Row>
          <Col> */}
            <Form.Item
              style={{ textAlign: "right" }}
              //   labelAlign="left"
              name="email"
              label="Email: "
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
                { type: "email", message: "Must be Valid E-Mail" },
              ]}
            >
              <Input
                inputMode="email"
                placeholder="Enter your Email"
                size="middle"
                style={styles.inputBox}
              />
            </Form.Item>
            {/* </Col>
        </Row>
        <Row>
          <Col> */}
            <Form.Item
              style={{ textAlign: "right" }}
              name="password"
              label="Password: "
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
                { min: 8, message: "Password must be atleast 8 characters" },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                size="middle"
                // style={{ width: "400px" }}
                style={styles.inputBox}
              />
            </Form.Item>
            {/* </Col>
        </Row> */}
            {/* <Form.Item> */}
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
            {/* </Form.Item> */}
          </Form>
        </div>

        {/* <Button
          type="primary"
          onClick={() => {
            history.push("/signup");
          }}
        >
          SignUp
        </Button> */}
      </div>
    </div>
  );
}

export default LogIn;

// token:let token = jwt.sign(
//   { _id: alreadyUser._id, username: alreadyUser.username },
//   config.get("jwtPrivateKey")
// );
