import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import format from "date-fns/format";

const speakerName = ({ name }) => <div>{name}</div>;

const speakerAvatar = ({ avatarUrl }) => (
  <span style={{ marginRight: 10 }}>
    <img
      style={{ width: 50, height: 50, borderRadius: "50%" }}
      src={avatarUrl}
    />
  </span>
);

const createItem = (item, index) => (
  <Row key={index} style={{ marginTop: 20 }}>
    <Col xs={2}>
      {format(item.startDate, "HH:mm")}
    </Col>
    <Col xs={10}>
      <div style={{ fontWeight: "bold", marginBottom: 10 }}>{item.title}</div>
      <div style={{ marginBottom: 10 }}>{item.speakers.map(speakerName)}</div>
      <div>{item.speakers.map(speakerAvatar)}</div>
    </Col>
  </Row>
);

/*

 <Col xs={6} md={3}>
 {schedule.map(createItem)}
 </Col>
 */

const Day = ({ schedule }) => (
  <Grid fluid>
    {schedule.map(createItem)}
  </Grid>
);

export default Day;
