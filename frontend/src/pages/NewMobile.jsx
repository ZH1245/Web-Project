import React from "react";
import { useState, useEffect } from "react";
import {
  Layout,
  Input,
  Form,
  Select,
  Radio,
  InputNumber,
  DatePicker,
  Button,
  Checkbox,
  AutoComplete,
  Modal,
  Space,
  message,
} from "antd";
import axios from "axios";
import MyLayout from "../components/MyLayout";
import Text from "antd/lib/typography/Text";
import client from "../api/client";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import CPUForm from "../components/forms/Cpuform";
import SensorForm from "../components/forms/SensorForm";
import { useHistory } from "react-router";

const { Content, Header, Footer } = Layout;
const { Option } = Select;

function NewMobile() {
  const [radio, setRadio] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [NFC, setNFC] = React.useState(false);
  const [Cpu, setCpu] = useState([]);
  const [sensors, setSensor] = useState([]);
  const [brands, setbrands] = useState([]);
  const [display, setdisplay] = useState([]);
  const [camera, setcamera] = useState([]);
  const [ShowEditCPU, setShowEditCPU] = useState(false);
  const [selectedCPU, setSelectedCPU] = useState({});
  const [showAddCPU, setshowAddCPU] = useState(false);
  const [ShowEditSensor, setShowEditSensor] = useState(false);
  const [selectedSensor, setSelectedSensor] = useState({});
  const [showAddSensor, setshowAddSensor] = useState(false);
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
  const [formSensor] = Form.useForm();
  const getData = async () => {
    await client.get("cpu/get/").then((response) => {
      setCpu(response.data.data);
    });
    await client.get("brands/get/").then((response) => {
      setbrands(response.data.data.sort(compare));
    });
    await client.get("screen/get/").then((response) => {
      setdisplay(response.data.data);
    });
    await client.get("camera/get/").then((response) => {
      setcamera(response.data.data);
    });
    await client.get("sensors/get/").then((response) => {
      setSensor(response.data.data);
      // console.log(sensors);
    });
  };
  const history = useHistory();
  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setRadio(e.target.value);
  };
  const onChangeNFC = (e) => {
    console.log("radio checked", e.target.value);
    setNFC(e.target.value);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const showModal = () => {
    setVisible(true);
  };
  const submitSensorModal = (values) => {
    console.log(values);
    hideModal();
  };
  const hideModal = () => {
    setVisible(false);
  };
  const handleFinish = (e) => {
    console.log("VALUES OF FORM", e);
    const result = Cpu.filter((item) => {
      return e.cpu.toLowerCase().includes(item.name.toLowerCase());
    })[0];
    console.log(e);
    console.log(result._id);
    client({
      method: "post",
      url: "mobile/create",
      data: {
        name: e.name,
        OS: e.OS,
        cpu: result._id,
        screenSize: e.screenSize,
        display: e.display,
        sensor: e.sensor,
        storage: e.storage,
        RAM: e.RAM,
        status: e.status,
        NFC: e.NFC,
        radio: e.radio,
        backCamera: { MP: e.backCamera, flash: e.bflash },
        frontCamera: { MP: e.frontCamera, flash: e.fflash },
        relDate: e.relDate,
        price: e.price,
        hits: 0,
        brand: e.brand,
        carriers_4g: e.carriers_4g,
        carriers_5g: e.carriers_5g,
        card_slot: e.card_slot,
        bluetooth: e.bluetooth,
        wlan: e.wlan,
        battery: e.battery,
        weight: e.weight,
        color: e.color,
        IP_Rating: e.IP_Rating,
        sim_slot: e.sim_slot,
        posterimage: e.posterimage,
        mobileImage: e.mobileImage,
      },
    })
      .then((resp) => {
        console.log(resp);
        message.success("Mobile Created Successfully");
        history.push("/");
      })
      .catch((e) => {
        message.warning(e.data);
      });
  };
  const cpuOptions = Cpu.map((item) => {
    return { value: `${item.manufacturer} ${item.name}`, key: item._id };
  });

  return (
    <MyLayout>
      <div style={{ margin: "0 auto", width: "50%" }}>
        <Form
          layout="horizontal"
          onFinish={handleFinish}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="name"
            label="MOBILE Name"
            rules={[
              {
                required: true,
                message: "Please Enter Name Of Mobile!",
              },
            ]}
          >
            <Input placeholder="Mobile ModelNO e.g: Galaxy S10" />
          </Form.Item>
          <Form.Item
            label="Brand"
            name="brand"
            rules={[
              {
                required: true,
                message: "Please Select Brand of Phone!",
              },
            ]}
          >
            <Select
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select"
            >
              {brands.map((item) => {
                return <Option key={item._id}>{item.name}</Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            name="posterimage"
            label="Card image url"
            rules={[
              {
                required: true,
                message:
                  "Please Enter The URL of image to be displayed on Card!",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            name="mobileImage"
            label="Mobile Component image url"
            rules={[
              {
                required: true,
                message:
                  "Please Enter the URL of Image That will be displayed inside Specs!",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="4G"
            name="carriers_4g"
            rules={[
              {
                required: true,
                message: "Please Tell US About the phone having 4G?",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="5G"
            name="carriers_5g:"
            rules={[
              {
                required: true,
                message: "Please Select Yes/No!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Bluetooth"
            name="bluetooth"
            rules={[
              {
                required: true,
                message: "Please Select Yes/No!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="WLAN"
            name="wlan"
            rules={[
              {
                required: true,
                message: "Please Select Yes/No!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="SD Card Slot"
            name="card_slot"
            rules={[
              {
                required: true,
                message: "Please Specify SD Card Slot!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="FrontFlash"
            name="fflash"
            rules={[
              {
                required: true,
                message: "Please Select Yes/No!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="BackFlash"
            name="bflash"
            rules={[
              {
                required: true,
                message: "Please Select Yes/No!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="sim_slot"
            label="Sim Slots"
            rules={[
              {
                required: true,
                message: "Please Select from below!",
              },
            ]}
          >
            <Select allowClear>
              <Option key={"Single-Sim"}>{"Single-Sim"}</Option>
              <Option key={"Multi-Sim"}>{"Multi-Sim"}</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Enter MegaPixels of Back Camera"
            name="backCamera"
            rules={[
              {
                required: true,
                message: "Please Enter Total MegaPixels of Phone!",
              },
            ]}
          >
            <InputNumber></InputNumber>
            {/* <Select
            allowClear
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
          >
            {camera.map((item) => {
              return (
                <Option
                  key={item._id}
                >{`${item.MP}MP, Focal=  ${item.focal}mm`}</Option>
              );
            })}
          </Select> */}
          </Form.Item>
          <Form.Item
            label="Enter MegaPixels of Front Camera"
            name="frontCamera"
            rules={[
              {
                required: true,
                message: "Please Enter Total MegaPixels of Mobile!",
              },
            ]}
          >
            <InputNumber></InputNumber>
            {/* <Select
            allowClear
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
          >
            {camera.map((item) => {
              return (
                <Option
                  key={item._id}
                >{`${item.MP}MP, Focal=  ${item.focal}mm`}</Option>
              );
            })}
          </Select> */}
          </Form.Item>

          <Form.Item
            label="Weight"
            name="weight"
            rules={[
              {
                required: true,
                message: "Please input weight of Phone in Grams!",
              },
            ]}
          >
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item
            label="OS"
            name="OS"
            rules={[
              {
                required: true,
                message: "Please Enter OS!",
              },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Sensors"
            name="sensor"
            rules={[
              {
                required: true,
                message: "Please Select Atleast one Sensors!",
              },
            ]}
          >
            <Select
              allowClear
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Please select"
              // onSelect={(e, option) => {
              //   let s = sensors.filter((item) => e.includes(item.name))[0];
              //   console.log(s);
              //   setSelectedSensor(s);
              // }}
            >
              {sensors.map((item) => {
                return <Option key={item._id}>{item.name}</Option>;
              })}
            </Select>
          </Form.Item>
          {showAddSensor && (
            <SensorForm
              visible={true}
              add={true}
              hideModal={() => setshowAddSensor(false)}
            />
          )}
          {ShowEditSensor && (
            <SensorForm
              visible={true}
              //  add={true}
              object={selectedSensor}
              hideModal={() => setShowEditSensor(false)}
            />
          )}

          <Form.Item
            label="CPU"
            name="cpu"
            rules={[
              {
                required: true,
                message: "Please Select CPU!",
              },
            ]}
          >
            {/* <Select
            // mode=""
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            // defaultValue={["a10", "c12"]}
            onChange={handleChange}
          > */}
            <AutoComplete
              options={cpuOptions}
              onSelect={(e, option) => {
                let s = Cpu.filter((item) => e.includes(item.name))[0];
                console.log(s);
                setSelectedCPU(s);
              }}
              // onChange={(e) => console.log(`ONCHANGE OF AUTOCOM` + e)}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            >
              {/* {Cpu.map((item) => {
              return (
                <Option
                  key={item._id}
                >{`${item.manufacturer} ${item.name}`}</Option>
              );
            })} */}
            </AutoComplete>
            {/* </Select> */}
            {/* <Text>Not Found? Create One</Text>
          <Input placeholder="" /> */}
          </Form.Item>
          <Button onClick={() => setshowAddCPU(true)}>Add CPU</Button>
          <Button onClick={() => setShowEditCPU(true)}>Edit cPU</Button>
          {showAddCPU && (
            <CPUForm
              visible={true}
              add={true}
              hideModal={() => setshowAddCPU(false)}
            />
          )}
          {ShowEditCPU && (
            <CPUForm
              visible={true}
              //  add={true}
              object={selectedCPU}
              hideModal={() => setShowEditCPU(false)}
            />
          )}
          <Form.Item
            label="ROM"
            name="storage"
            rules={[
              {
                required: true,
                message: "Please enter Storage Size in GB's!",
              },
            ]}
          >
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item
            label="RAM"
            name="RAM"
            rules={[
              {
                required: true,
                message: "Please enter Amount Of RAM in GB's!",
              },
            ]}
          >
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item
            label="Screen Size"
            name="screenSize"
            rules={[
              {
                required: true,
                message: "Please enter Screen Size!",
              },
            ]}
          >
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item
            name="display"
            label="Screen Type"
            rules={[
              {
                required: true,
                message: "Please Select Screen Type!",
              },
            ]}
          >
            <Select
              allowClear
              style={{ width: "100%" }}
              placeholder="Select Screen Type"
            >
              {display.map((item) => {
                return <Option key={item._id}>{item.type}</Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="Radio ?"
            name="radio"
            rules={[
              {
                required: true,
                message: "Please Select Yes/No!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeRadio} value={radio}>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="NFC ?"
            name="NFC"
            rules={[
              {
                required: true,
                message: "Please Select Yes/No!",
              },
            ]}
          >
            <Radio.Group onChange={onChangeNFC} value={NFC}>
              <Radio value={true}>YES</Radio>
              <Radio value={false}>NO</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="battery"
            label="Battery Capacity"
            rules={[
              {
                required: true,
                message: "Please input Battery Capacity!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="IP_Rating" label="IP Rating">
            <Select
              allowClear
              style={{ width: "100%" }}
              mode="multiple"
              placeholder="Please Select IP Rating"
            >
              {Array.from(Array(69).keys()).map((item) => {
                return <Option key={`IP${item}`}>{`IP${item}`}</Option>;
              })}
            </Select>
            {/* <AutoComplete
            mode="multiple"
            options={Array.from(Array(69).keys()).map((item) => {
              return { value: `IP${item}` };
            })}
            // onChange={(e) => console.log(`ONCHANGE OF AUTOCOM` + e)}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          ></AutoComplete> */}
          </Form.Item>
          <Form.Item label="Colors" name="color">
            <Input placeholder="Enter Colors of this mobile"></Input>
          </Form.Item>
          <Form.Item
            label="Release Date"
            name="relDate"
            rules={[
              {
                required: true,
                message: "Please Select Release Date!",
              },
            ]}
          >
            <DatePicker></DatePicker>
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input Price!",
              },
            ]}
          >
            <InputNumber></InputNumber>
          </Form.Item>
          <Form.Item
            name="status"
            label="STATUS: "
            rules={[
              {
                required: true,
                message: "Please input Status of Mobile!",
              },
            ]}
          >
            <Input placeholder="Enter the status. e.g; rumured,released"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MyLayout>
  );
}

export default NewMobile;
