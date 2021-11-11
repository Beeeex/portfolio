import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMysql,
} from "react-icons/di";
import { SiSpring } from "react-icons/si";

function Techstack() {
  return (
    <div id="tech_stack">
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSpring />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
