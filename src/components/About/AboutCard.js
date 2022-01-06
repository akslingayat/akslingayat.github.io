import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { BsDot } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Akshay Lingayat </span>
            <br />
            <br />
            <p> I currently work as a Managing Consultant @IBM Consulting and am looking to transition into the product management space.</p>
            <br />
            <p> A little bit about my <span className="purple"> product </span> experience. I currently manage two products (PaaS) taking on several roles and responsibilities.
                I manage the product roadmap, define user features, and ensure the overall user experience meets and exceeds client expectations.
                Additionally I manage the CI/CD pipeline identifying dependencies, leading QA and overseeing operational deployments.
                Since the beginning of my professional career I have been a big proponent of Lean/Agile methodologies. 
                I have grown my agile and lean experience to the point where I now lead the agile implementation side of the house acting as SCRUM Master and Lean Coach, making sure my programs run efficiently and effectively.</p>
            <br/> Apart from playing around with new tech and managing several programs I also like to:
          </p>
          <ul>
            <li className="about-activity">
              <BsDot /> Excercising
            </li>
            <li className="about-activity">
              <BsDot /> Eating: @CheatDayDC
            </li>
            <li className="about-activity">
              <BsDot /> Reading
            </li>
            <li className="about-activity">
              <BsDot /> Hiking
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
