import React from "react";
import parse from "date-fns/parse";
import format from "date-fns/format";
import addHours from "date-fns/add_hours";

const createItem = (item, index) => (
  <div key={index}>
    {format(addHours(parse(item.startDate), 2), "YYYY-MM-DD HH:mm Z")}
  </div>
);

const Schedule = ({ schedule }) => (
  <div>
    schedule
    {schedule.map(createItem)}
  </div>
);

export default Schedule;
