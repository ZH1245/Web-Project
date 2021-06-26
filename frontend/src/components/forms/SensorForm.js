import { useForm } from "antd/lib/form/Form";
import { Form, Input, InputNumber, message, Modal } from "antd";
import React from "react";
import client from "../../api/client";
const SensorForm = ({ visible, add, object, hideModal }) => {
  const handlePost = (values) => {
    // add
    client({
      method: "post",
      url: "sensor/create",
      data: {
        _id: object._id,
        name: values.name,
      },
    })
      .then((res) => {
        message.success("Cpu Added Successfully");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(values);
    hideModal();
  };
  const handleEdit = (values) => {
    client({
      method: "put",
      url: "sensor/update",
      data: {
        _id: object._id,
        name: values.name,
      },
    })
      .then((res) => {
        message.success("Cpu EDITED Successfully");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const [form] = useForm();
  return (
    <Modal
      title="Modal"
      visible={visible}
      // onOk={hideModal}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            add ? handlePost(values) : handleEdit(values);
            form.resetFields();
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      onCancel={hideModal}
      okText="Submit"
      cancelText="Cansel"
    >
      <Form
        form={form}
        initialValues={object ? object : {}}
        allowClear="true"
        // autoComplete="true"
        // onFinish={submitSensorModal}
      >
        <Form.Item
          name="name"
          label="Sensor Name"
          rules={[
            {
              required: true,
              message: "Please enter Name!",
            },
          ]}
        >
          <Input placeholder="Enter Sensor Name"></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SensorForm;
