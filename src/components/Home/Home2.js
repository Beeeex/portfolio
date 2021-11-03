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
              I know HTML since when I was 13 years old.
              <br />
              <br />
              Through my studies and experiences I became familiar with
              <i>
                <b className="teal"> Java, Javascript and React. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="teal">Web Technologies and Products </b> and also
                in areas related to{" "}
                <b className="teal">Graphic Design and Video editing.</b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing and designing
              products ranging from{" "}
              <b className="teal">Simple Websites and Mockups</b> to
              <i>
                <b className="teal"> creating Graphic Content</b>
              </i>
              &nbsp; like
              <i>
                <b className="teal">Videos, Flyers, Informative brochures</b>
              </i>
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
            <p>
              Feel free to <span className="orange">connect </span>with me
            </p>
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
