import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/CV-BassanM-EN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Beeeex/portfolio/master/src/Assets/CV-BassanM-EN.pdf";
function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function turnPage(pageNum) {
    return setPageNum(pageNum);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={resumeLink}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={pageNum} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <h6>Pages:</h6>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => {
              return (
                <Button
                  variant={pageNum === page ? "secondary" : "primary"}
                  style={{ marginRight: 5 }}
                  onClick={() => turnPage(page)}
                >
                  {page}
                </Button>
              );
            })}
        </Row>
        <br></br>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
