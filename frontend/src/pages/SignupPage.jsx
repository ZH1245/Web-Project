import { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button, Typography, message } from "antd";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import client from "../api/client";
const styles = {
  inputBox: { width: "400px" },
};
function SignupPage() {
  const handleFinish = (e) => {
    console.log(e);
    client({
      method: "post",
      url: "user/signup",
      data: {
        lastName: e.lastName,
        firstName: e.firstName,
        password: e.password,
        email: e.email,
        type: "local",
      },
    })
      .then((resp) => {
        message.success("SignUp Successfully");
        console.log(resp);
      })
      .catch((e) => {
        message.error(e.response.data.message);
        console.log(e);
      });
  };
  const history = useHistory();

  useEffect(() => {}, []);
  return (
    <div>
      <NavigationBar key="signup" />
      <div style={{ width: 600, margin: "10px auto", textAlign: "center" }}>
        <Typography.Title>SignUp</Typography.Title>
        <Form autoComplete onFinish={handleFinish}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please enter your firstName!",
              },
            ]}
          >
            <Input placeholder="Enter First Name" maxLength={10} />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please enter your lastName!",
              },
            ]}
          >
            <Input placeholder="Enter Last Name" style={styles.inputBox} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email: "
            rules={[
              {
                required: true,
                message: "Please input VAlID Email!",
              },
              { type: "email", message: "Must Be Valid E-Mail" },
            ]}
          >
            <Input placeholder="Enter Email" style={styles.inputBox}></Input>
          </Form.Item>
          <Form.Item
            name="password"
            label="Password: "
            rules={[
              {
                required: true,
                message: "Please input your PASSWORD!",
              },
              { min: 8, message: "Password must be atleast 8 Characters" },
            ]}
          >
            <Input.Password
              placeholder="Enter Password"
              style={styles.inputBox}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </Form>
        <br />
        <Button
          type="link"
          onClick={() => {
            history.push("/");
          }}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
}

export default SignupPage;
