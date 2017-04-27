import React from "react";
import { Row, Col } from "react-flexbox-grid";
import format from "date-fns/format";
import Speaker from "./Speaker";

const Talk = ({ startDate, title, speakers }) => (
  <Row style={{ marginTop: 20 }}>
    <Col xs={2}>
      {format(startDate, "HH:mm")}
    </Col>
    <Col xs={10}>
      <div style={{ fontWeight: 700, marginBottom: 10 }}>{title}</div>
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
