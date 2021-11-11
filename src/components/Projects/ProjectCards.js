import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { Col, Row } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Row className="justify-content-md-center">
        <Col>
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            style={{
              maxHeight: 240,
              maxWidth: 250,
            }}
          />
        </Col>
      </Row>

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.isEmptyProj ? (
          <Button variant="secondary">
            <MdDoNotDisturbAlt /> &nbsp;
            {"Not available"}
          </Button>
        ) : (
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {"View project"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
