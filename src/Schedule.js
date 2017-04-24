import React from "react";
import format from "date-fns/format";
import SwipeableViews from 'react-swipeable-views';

const createItem = (item, index) => (
  <div key={index}>
    {format(item.startDate, "YYYY-MM-DD HH:mm")}: {item.title}
  </div>
);

const Schedule = ({ schedule }) => (
  <SwipeableViews>
    <div>{schedule[16].map(createItem)}</div>
    <div>{schedule[17].map(createItem)}</div>
    <div>{schedule[18].map(createItem)}</div>
    <div>{schedule[19].map(createItem)}</div>
    <div>{schedule[20].map(createItem)}</div>
  </SwipeableViews>
);

export default Schedule;
