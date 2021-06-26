import React from "react";
import MyLayout from "../components/MyLayout";
import { useEffect, useState } from "react";
import { List, Typography, Spin, Table } from "antd";
import client from "../api/client";

import { LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Text } = Typography;
function PopulairtyTable({}) {
  const [isloading, setIsloading] = useState(true);
  const [mobiles, setmobiles] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const history = useHistory();
  // const [columns, setColumns] = useState([]);
  const columns = [
    {
      title: "Mobile Name",
      dataIndex: "name",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      render: (value, row) => {
        return (
          <span
            onClick={() => {
              history.push("/mobile/" + row._id);
            }}
          >
            {value}
          </span>
        );
      },
      sortDirections: ["descend"],
    },
    {
      title: "Hits",
      dataIndex: "hits",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.hits - b.hits,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await client
      .get("mobile/get")
      .then((res) => {
        setmobiles(res.data.data);

        setDataTable(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setIsloading(false);
  };
  return (
    <MyLayout>
      <div>
        <Table
          columns={columns}
          dataSource={dataTable}
          onChange={onChange}
          loading={isloading}
        />
        {/* {isloading === true ? (
          <div style={{ margin: "0 auto" }}>
            <Spin indicator={antIcon} size="large" />
            <Table
              columns={columns}
              dataSource={dataTable}
              onChange={onChange}
            />
          </div>
        ) : (
        
          //   mobiles.map((item) => {
          //     return (
          //       <div
          //         style={{
          //           display: "flex",
          //           flexDirection: "row",
          //           justifyContent: "space-between",
          //         }}
          //       >
          //         <Text>{item.name} </Text> <Text>{"Hits: " + item.hits}</Text>
          //       </div>
          //     );
          //   })
          // <br />
        )} */}
      </div>
    </MyLayout>
  );
}

export default PopulairtyTable;
