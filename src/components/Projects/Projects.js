import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import duemila from "../../Assets/Projects/coverandback.jpg";
import dmsol from "../../Assets/Projects/dms.png";
import dantedì from "../../Assets/Projects/dantedì.jpg";
import programmafronte from "../../Assets/Projects/programmafronte.jpg";
import deliverOne from "../../Assets/Projects/DeliverOne.png";
import filodiretto from "../../Assets/Projects/filodiretto.jpg";
import Chromaleon from "../../Assets/Projects/logo-finale-chromaleon.png";
import ctm from "../../Assets/Projects/marconi_abano_logo.png";
import TOP from "../../Assets/Projects/logo_top_canestro.png";
import dmsolView from "../../Assets/Projects/dmsolsito.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My recent <strong className="teal">works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={programmafronte}
              isEmptyProj={false}
              title="Riccardo Mortandello's election campaigns"
              description="In 2016 and 2021, I participated in the graphic production of content for Riccardo Mortandello's election campaign running for mayor in Montegrotto Terme, a town nearby Padua. I edited videos, created flyers and brochures, managed social media and rearranged the website and YouTube channel cooperating with many other people. Check the Google drive folders named 2016 and 2021 to find out more.
              "
              link="https://drive.google.com/drive/u/0/folders/1Rwe0opWxiCmY9Pb5TCPDiDFNRooNeFgw"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={duemila}
              isEmptyProj={false}
              title="Duemila giorni insieme"
              description="Within the 2021 Riccardo Mortandello's election campaign I was in charge of a big side project: make a showcase of all the results reached by the mayor in 5 years of office. It took me about 2 months gathering all the information needed and then transforming it into a small book which was printed and delivered to every family in town."
              link="https://drive.google.com/file/d/1FM52O6krXBcCMVevmWx5qzTZI0Rl1rQC/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dantedì}
              isEmptyProj={false}
              title="Dantedì video project"
              description="To celebrate the 700th anniversary of Dante Alighieri's birth, I cooperated with the cultural department of my town in order to create a video documentary. The result is a 4-episode series of videos where an actor reads some extracts from Dante's Inferno, and a literature expert explains its deepest meaning. I used Premiere Pro and After Effects to create informative and enjoyable content to be shared on web and social platforms.
              "
              link="https://www.youtube.com/watch?v=5Y1DscSZgRk&list=PL5DaT3oZYPsoRYD_u6F88f0ZooWPXwgpQ&index=11"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chromaleon}
              isEmptyProj={false}
              title="chromaleon App"
              description="As a group project I worked in team in order to create a mockup for a potential app using Figma. The app should be used as a palette generator picking colors from a photo. The project was created with the idea to create a tool for a specific target and with potential future implementations for IOT."
              link="https://www.figma.com/proto/ZF5feC4NU6YLSCVfV1jQVh/CHROMALEON?page-id=0%3A1&node-id=5%3A10&viewport=241%2C48%2C0.25&scaling=scale-down&starting-point-node-id=5%3A10"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={filodiretto}
              isEmptyProj={false}
              title="filodiretto"
              description="I designed and produced a series of brochures named Montegrotto Terme filodiretto. Revolving around specific themes (community, environment, public works, etc.), these brochures were made for the mayor's personal and direct communication with the citizens of Montegrotto Terme.
              "
              link="https://drive.google.com/drive/u/0/folders/1v7gpFlDBvtJ23OEH2QCQMPY316t22Hhd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deliverOne}
              isEmptyProj={true}
              title="DeliverOne"
              description="In 2020, as an intern in Omicron Consulting, I helped develop the sick leave and holidays feature in an internal project. It was my first time using a great stack of technologies, and it was a real challenge since I had to manage both the back-end and the front-end sides. I used HTML5, CSS3, React.js, MySQL, J2EE and SpringBoot."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dmsol}
              isEmptyProj={false}
              title="DmSolutions' website"
              description="I cooperate with a graphic designer to create a website for a local business (lights & events). We did it using WordPress for its user-friendly interface: we do not own its future management so we decided to use a CMS in order to meet great visuals and simple usage.
              "
              link={dmsolView}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ctm}
              isEmptyProj={false}
              title="Cinema Teatro Marconi promo"
              description="In 2016 a local theater asked me for an ad promo for their newly bought instrumentation. Cooperating with an expert video maker, I was in charge of the editing using Adobe Premiere Pro, After Effects and Audition. It was particularly interesting and challenging since I needed to adapt the stereo audio of the promo to a Dolby surround 7.1 giving 3rd audio effects using Audition.
              "
              link="https://www.youtube.com/watch?v=Of47JpqNo0Q&list=PL5DaT3oZYPsoRYD_u6F88f0ZooWPXwgpQ&index=1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TOP}
              isEmptyProj={true}
              title="TOP's website"
              description="I oversaw the creation and restyling of a website for a basketball team in my hometown. The website was made in Adobe Flash and needed to be simple and with some blog features to serve as a newsfeed. I designed the UI and adapted a WordPress pre-existing theme to fit this need. Unfortunately, the team was absorbed into another team, actually closing the website forever.
              "
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
