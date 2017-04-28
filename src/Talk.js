import React from "react";
import { Row, Col } from "react-flexbox-grid";
import cxs from "cxs";
import format from "date-fns/format";
import Speaker from "./Speaker";

const containerClass = cxs({
  marginTop: 20,
});

const titleClass = cxs({
  fontWeight: 700,
  marginBottom: 10,
});

const descriptionClass = cxs({
  fontWeight: 300,
  marginBottom: 10,
});

const Talk = ({ startDate, title, speakers, description }) => (
  <Row className={containerClass}>
    <Col xs={2} sm={2} smOffset={2}>
      {format(startDate, "HH:mm")}
    </Col>
    <Col xs={10} sm={6}>
      <div className={titleClass}>{title}</div>
      <div className={descriptionClass}>{description}</div>
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
