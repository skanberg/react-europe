import React from "react";
import cxs from "cxs";
import logo from "./logo.png";

const containerClass = cxs({
  flexDirection: "column",
  display: "flex",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
});

const textClass = cxs({
  fontSize: 18,
  marginTop: 20,
});

const LoadingIndicator = () => (
  <div className={containerClass}>
    <img src={logo} width={150} height={150} alt="" />
    <div className={textClass}>Loading...</div>
  </div>
);

export default LoadingIndicator;
