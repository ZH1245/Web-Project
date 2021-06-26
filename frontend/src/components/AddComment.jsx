import React from "react";
import { Button, Form, Input, message } from "antd";
import client from "../api/client";
import { getToken } from "../utils/AuthUtil";
import jwtDecode from "jwt-decode";
function AddComment(props) {
  const today = new Date();
  const handleFinish = (e) => {
    client({
      method: "post",
      url: "comments/create",
      data: {
        userId: jwtDecode(getToken())._id,
        description: e.description,
        time: today,
        mobileId: props.mobileId,
      },
    })
      .then((resp) => {
        message.success("Comment Added");
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Form autoComplete="true" onFinish={handleFinish}>
        <Form.Item name="description">
          <Input.TextArea placeholder="Enter Comment Here" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddComment;
