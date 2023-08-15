import React from "react";

import imgAbout from "../images/img-about.jpg";
import checkIcon from "../images/img-check-icon.png";
import linkedIn from "../images/img-LinkedIn_icon_circle.svg.png";
import github from "../images/img-480px-Octicons-mark-github.svg.png";
import toptal from "../images/img-toptal.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="150"
            id="about-dummy-img"
          >
            <img src={imgAbout} className="img-fluid" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
            data-aos="fade-right"
          >
            <h3>
              Lead Engineer, IT Consultant and Software Architect experience
            </h3>
            <br />
            <ul>
              <li>
                <img src={checkIcon} className="check-icon" />
                Relational database design and programming
              </li>
              <li>
                <img src={checkIcon} className="check-icon" />
                Backend development
              </li>
              <li>
                <img src={checkIcon} className="check-icon" />
                Frontend development
              </li>
              <li>
                <img src={checkIcon} className="check-icon" />
                iOS development
              </li>
              <li>
                <img src={checkIcon} className="check-icon" />
                IT Consultancy
              </li>
            </ul>
            <a href="https://www.linkedin.com/in/armin-vrevi%C4%87-19ba1961/">
              <img style={{ width: "36px" }} src={linkedIn} />
            </a>
            <a href="https://github.com/avrevic" style={{ marginLeft: "8px" }}>
              <img style={{ width: "36px" }} src={github} />
            </a>
            <a
              href="https://www.toptal.com/resume/armin-vrevic"
              style={{ marginLeft: "8px" }}
            >
              <img style={{ width: "36px" }} src={toptal} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
