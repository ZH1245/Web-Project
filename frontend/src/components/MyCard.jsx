import React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
const { Meta } = Card;

function MyCard(props) {
  const history = useHistory();
  return (
    <Card
      hoverable
      style={{
        width: 170,
        margin: "10px",
        height: "320px",
        padding: "10px",
        borderRadius: "10px",
      }}
      onClick={() => {
        history.push(`/mobile/${props._id}`);
      }}
      cover={<img alt="example" src={props.imageurl} />}
    >
      <Meta
        title={`${props.title}`}
        description={`Price: ${props.price}/-RS`}
        // onClick={() => {
        //   history.push(`/mobile/${props._id}`);
        // }}
      />
    </Card>
  );
}

export default MyCard;
