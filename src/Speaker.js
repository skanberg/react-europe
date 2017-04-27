import React from "react";
import { Row, Col, Block } from "jsxstyle";

const Speaker = ({ avatarUrl, name, twitter }) => (
  <Row marginBottom={10}>
    <img
      style={{ width: 50, height: 50, borderRadius: "50%", marginRight: 10 }}
      src={avatarUrl}
      alt=""
    />
    <Col justifyContent="space-around">
      <Block fontWeight={400}>{name}</Block>
      <Block fontWeight={300}>@{twitter}</Block>
    </Col>
  </Row>
);

export default Speaker;
