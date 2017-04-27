import React from "react";
import { Row, Col, Block } from "jsxstyle";

const Speaker = ({ avatarUrl, name, twitter }) => (
  <Row marginBottom={10}>
    <img
      style={{ width: 50, height: 50, borderRadius: "50%", marginRight: 10 }}
      src={avatarUrl}
      alt=""
    />
    <Col justifyContent="space-around" fontWeight={300}>
      <Block>{name}</Block>
      <Block>@{twitter}</Block>
    </Col>
  </Row>
);

export default Speaker;
