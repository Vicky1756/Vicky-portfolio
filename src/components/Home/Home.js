import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/bui.svg";
import Home2 from "./Home2";
import Resume from "../../Assets/resume.pdf";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hey!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Vicky</strong>
              </h1>

              <div style={{ padding: 40, textAlign: "left" }}>
                <Type />
              </div>
              <button class="button" href={Resume}>
                View Resume
              </button>
            </Col>

            <Col md={5}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
