import React from "react";
import { Col, Block } from "jsxstyle";
import logo from "./logo.png";

const LoadingIndicator = () => (
  <Col height="100%" alignItems="center" justifyContent="center">
    <img src={logo} width={80} height={80} />
    <Block fontSize={14} marginTop={20}>Loading...</Block>
  </Col>
);

export default LoadingIndicator;
