import React from "react";
import Card from "react-bootstrap/Card";
import { FaPlane, FaChess, FaWalking } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! My name is <span className="orange">Massimiliano Bassan</span>.{" "}
            I'm a web designer, graphic and video editor from{" "}
            <a href="https://en.wikipedia.org/wiki/Padua">
              <span className="teal">Padua, Italy</span>
            </a>
            .
            <br />
            <br />
            You can find my professional{" "}
            <a href="#tech_stack">
              <span className="teal">skillset</span>
            </a>{" "}
            below and my{" "}
            <a href="">
              <span className="teal">projects</span>
            </a>{" "}
            in the dedicated section.
            <br />
            <br />
            Outside working hours, here are some other activities that I love to
            do!
          </p>
          <ul>
            <li className="about-activity">
              <FaPlane /> &nbsp; Travelling
            </li>
            <li className="about-activity">
              <FaWalking /> &nbsp; Walking
            </li>
            <li className="about-activity">
              <FaChess /> &nbsp; Playing games
            </li>
          </ul>
          <br></br>
          <p style={{ marginBlockEnd: 0, color: "rgb(126 153 176)" }}>
            "Don't fear the adversity you face every day; <br></br>
            remember that the kite flies high when the wind blows <br />
            against it, never when it is in its favor."{" "}
          </p>
          <footer className="blockquote-footer">Anon</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
