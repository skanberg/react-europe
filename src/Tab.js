import React from "react";
import { Block } from "jsxstyle";

const Tab = ({ day, selectDay }) => (
  <Block
    width="20%"
    textAlign="center"
    paddingTop={10}
    paddingBottom={10}
    borderBottom="1px solid #2F4592"
  >
    <div
      onClick={() => {
        selectDay(day);
      }}
    >{`Day ${day}`}</div>
  </Block>
);

export default Tab;
