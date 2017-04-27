import React from "react";
import { Row, Col } from "react-flexbox-grid";
import format from "date-fns/format";
import Speaker from "./Speaker";

const Talk = ({ startDate, title, speakers, description }) => (
  <Row style={{ marginTop: 20 }}>
    <Col xs={2} sm={2} smOffset={2}>
      {format(startDate, "HH:mm")}
    </Col>
    <Col xs={10} sm={6}>
      <div style={{ fontWeight: 700, marginBottom: 10 }}>{title}</div>
      <div style={{ fontWeight: 300, marginBottom: 10 }}>{description}</div>
      <div>
        {speakers.map(({ avatarUrl, name, twitter }, index) => (
          <Speaker
            key={index}
            avatarUrl={avatarUrl}
            name={name}
            twitter={twitter}
          />
        ))}
      </div>
    </Col>
  </Row>
);

export default Talk;
