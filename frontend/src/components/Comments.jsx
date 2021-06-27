import moment from "moment";
import React, { createElement, useEffect, useState } from "react";
import { Comment, Tooltip, Avatar, Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import jwtDecode from "jwt-decode";

import { useContext } from "react";
import { UserContext, UserProviderContext } from "../context/UserContext";
import { getToken } from "../utils/AuthUtil";
import client from "../api/client";

function Comments(props) {
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserProviderContext);
  // const [action, setAction] = useState(null);
  useEffect(() => {}, []);

  const handleDelete = async (id) => {
    console.log(id);
    await client.delete(`comments/delete/${id}`).then((res) => {
      message.success("Comment Deleted");
      window.location.reload();
    });
  };
  return (
    <Comment
      // style={{ display: "flex", textAlign: "center" }}
      // actions={actions}
      id={props.key}
      key={props.key}
      author={props.name}
      avatar={<Avatar icon={<UserOutlined />} style={{ margin: 6 }}></Avatar>}
      content={<p>{props.description}</p>}
      userid={props.userId}
      datetime={
        <Tooltip title={new Date(props.time).toLocaleTimeString()}>
          {/* <span>{moment().fromNow()}</span> */}
          <span>
            {new Date(props.time).toDateString() +
              " " +
              new Date(props.time).toLocaleTimeString()}
          </span>
        </Tooltip>
      }
    >
      {userDetails.loggedIn ? (
        jwtDecode(getToken())._id == props.userId ? (
          <Button
            style={{ float: "right" }}
            // type="danger"
            danger
            onClick={() => {
              handleDelete(props.id);
            }}
          >
            Delete
          </Button>
        ) : (
          <br />
        )
      ) : (
        <br />
      )}
    </Comment>
  );
}

export default Comments;
