import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="teal"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I discovered HTML when I was 13.
              <br />
              <br />
              Through my studies and experiences I became familiar with
              <b className="teal">
                {" "}
                Java,<br></br> Javascript and React.{" "}
              </b>
              <br />
              <br />
              My fields of interest include building new{" "}
              <b className="teal">Web Technologies and Products </b> <br></br>
              and creating contents in areas related to{" "}
              <b className="teal">Graphic Design and Video Editing.</b>
              <br />
              <br />
              Whenever possible, I apply my passion for developing and designing
              products ranging from{" "}
              <b className="teal">simple websites and app mockups</b> to
              <b className="teal"> graphic content</b> like <br></br>
              <b className="teal">videos, flyers and informative brochures.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Beeeex"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/massimiliano-bassan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCrUND2Ld_TQyOGwKz_Kjm7g"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="orange">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
