import React from "react";
import cxs from "cxs";

const Tab = ({ day, onClick, selected }) => {
  const containerClass = cxs({
    width: "20%",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottom: "1px solid #2F4592",
    fontWeight: selected ? 700 : 400,
  });

  return (
    <div className={containerClass}>
      <div
        onClick={() => {
          onClick(day);
        }}
      >{`Day ${day}`}</div>
    </div>
  );
};

export default Tab;
