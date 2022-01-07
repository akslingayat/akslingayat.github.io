import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiMicrosoftazure,
  SiGooglecloud,
  SiIbmwatson,
  SiAmazonaws,
  SiOracle,
} from "react-icons/si";

function Softskillstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="skills-icons">
        Product Management
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        Detail Oriented
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        Time Management
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        Leadership
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        Project Management
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        Scrapy
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        Googling
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        Self-Starter
      </Col>
      <Col xs={4} md={2} className="skills-icons">
        Organized
      </Col>
    </Row>
  );
}

export default Softskillstack;
