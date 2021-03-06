import React from "react";
import { Grid } from "react-flexbox-grid";
import Talk from "./Talk";

const Day = ({ schedule }) => (
  <Grid fluid>
    {schedule.map(({ startDate, title, speakers, description }, index) => (
      <Talk
        key={index}
        startDate={startDate}
        title={title}
        speakers={speakers}
        description={description}
      />
    ))}
  </Grid>
);

export default Day;
