import React from "react";
import { Block } from "jsxstyle";

const Tab = ({ day, onClick, selected }) => (
  <Block
    width="20%"
    textAlign="center"
    paddingTop={15}
    paddingBottom={15}
    borderBottom="1px solid #2F4592"
    fontWeight={selected ? 700 : 400}
  >
    <div
      onClick={() => {
        onClick(day);
      }}
    >{`Day ${day}`}</div>
  </Block>
);

export default Tab;
