import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hello there!, I'm  <span className="purple">Vicky Choosakul </span> 
          A <span className="purple"> Canberra-based </span> Software Developer.
            <br /> specialised in back-end development using Python and Golang. 
            <br />
            Extremely motivated to constantly develop my skills and grow professionally. 
            A good observer and pays attention to detail. Loves to experiment around in order 
            to find improved as well as explore new prospects. A team player and a good leader.
            <br />
            <br />
            🌐 Beyond my professional roles, I'm passionate about...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> brewing coffee
            </li>
            <li className="about-activity">
              <ImPointRight /> Wine tasting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There's a Riesling for everything!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
