import React from "react";
import cxs from "cxs";

const containerClass = cxs({
  display: "flex",
  flexDirection: "row",
  marginBottom: 10,
  img: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    marginRight: 10,
  },
});

const infoClass = cxs({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});

const nameClass = cxs({
  fontWeight: 400,
});

const twitterClass = cxs({
  fontWeight: 300,
});

const Speaker = ({ avatarUrl, name, twitter }) => (
  <div className={containerClass}>
    <img src={avatarUrl} alt="" />
    <div className={infoClass}>
      <div className={nameClass}>{name}</div>
      <div className={twitterClass}>@{twitter}</div>
    </div>
  </div>
);

export default Speaker;
