import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Vicky</span>, a passionate
            Software Developer based in Canberra. My focus lies in back-end
            development, specializing in Python and Golang.
            <br />
            <br />
            Continual growth and skill development drive my professional
            journey. I'm detail-oriented, love experimenting to innovate, and
            thrive both as a team player and a leader.
            <br />
            <br />
            🌐 Beyond my professional roles, I'm also passionate about...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Crafting the perfect cup of coffee
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring diverse wines
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and discovering new cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There's always a perfect wine for every moment!"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
