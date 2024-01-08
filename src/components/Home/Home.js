import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/bui.svg";
import Resume from "../../Assets/resume.pdf";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";
import Wave from "react-wavify";
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
      <About />
      <Projects id="projects"/>
      <Wave
        id="wave"
        fill="#e29706"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.5,
          points: 3,
        }}
      />
      <footer>
        <ul className="footer-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/Vicky1756/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/auraiwan-choosakul//"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/365shadesofgalileo/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
        <p3 class="made-by">Made with ❤️ by Vicky</p3>
      </footer>
    </section>
  );
}

export default Home;
