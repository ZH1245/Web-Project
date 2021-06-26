import { useForm } from "antd/lib/form/Form";
import { Form, Input, InputNumber, message, Modal } from "antd";
import React from "react";
import client from "../../api/client";
const CPUForm = ({ visible, add, object, hideModal }) => {
  const handlePost = (values) => {
    // add
    client({
      method: "post",
      url: "cpu/create",
      data: {
        name: values.name,
        cores: values.cores,
        manufacturer: values.manufacturer,
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
      url: "cpu/update",
      data: {
        _id: object._id,
        name: values.name,
        cores: values.cores,
        manufacturer: values.manufacturer,
      },
    })
      .then((res) => {
        message.success("Cpu EDITED Successfully");
        hideModal();
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const [form] = useForm();
  const title = add == true ? "Add CPU" : "Edit CPU";
  return (
    <Modal
      title={title}
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
          label="CPU Name"
          rules={[
            {
              required: true,
              message: "Please enter Name!",
            },
          ]}
        >
          <Input placeholder="Enter CPU Name"></Input>
        </Form.Item>
        <Form.Item
          name="cores"
          label="Enter Number of Cores"
          rules={[
            {
              required: true,
              message: "Please enter No of Cores!",
            },
          ]}
        >
          <InputNumber placeholder="Enter Cores"></InputNumber>
        </Form.Item>
        <Form.Item
          name="manufacturer"
          label="Manufacurer Name"
          rules={[
            {
              required: true,
              message: "Please Enter Manufacturer name!",
            },
          ]}
        >
          <Input placeholder="Enter Manufacturer Name"></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CPUForm;
