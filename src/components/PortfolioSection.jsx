import React from "react";

import img1 from "../images/AppIcon-1x_U007emarketing-0-7-0-85-220.png-460x0w.webp";
import img2 from "../images/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png-460x0w.webp";
import img3 from "../images/portfolio-unite.jpg";
import img4 from "../images/portfolio-clearancespot.jpg";
import img5 from "../images/portfolio-sourcecraft.jpeg";
import img6 from "../images/portfolio-viatradingimg.jpg";
import img7 from "../images/portfolio-oracleretail.jpeg";
import img8 from "../images/_next-image";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters"></ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-6 col-lg-3 col-md-3 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img1} className="img-fluid portfolio-img" />
              <div className="portfolio-info">
                <h4>Improve the News</h4>
                <h4>Lead Engineer</h4>
                <br />
                <a
                  href="https://www.improvethenews.org/"
                  target="_blank"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "22px",
                    padding: "8px",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-3 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={img2} className="img-fluid portfolio-img" />
              <div className="portfolio-info">
                <h4>My Fasting Pal</h4>
                <h4>iOS Engineer</h4>
                <br />
                <a
                  href="https://apps.apple.com/us/app/my-fasting-pal/id1540561465"
                  target="_blank"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "22px",
                    padding: "8px",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-3 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img3} className="img-fluid portfolio-img" />
              <div className="portfolio-info">
                <h4>Unite Students</h4>
                <h4>Software Engineer</h4>
                <br />
                <a
                  href="https://www.claremont.co.uk/case-studies/unite-students-booking-system"
                  target="_blank"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "22px",
                    padding: "8px",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-3 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img4} className="img-fluid portfolio-img" />
              <div className="portfolio-info">
                <h4>Clearance Spot</h4>
                <h4>Senior Engineer</h4>
                <br />
                <a
                  href="https://clearancespot.com/"
                  target="_blank"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "22px",
                    padding: "8px",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-6 col-lg-3 col-md-3 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={img5} className="img-fluid portfolio-img" />
              <div className="portfolio-info">
                <h4>Source Craft</h4>
                <h4>CEO</h4>
                <br />
                <a
                  href="https://www.sourcecraft.hr/"
                  target="_blank"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "22px",
                    padding: "8px",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-3 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img6} className="img-fluid portfolio-img" />
              <div className="portfolio-info">
                <h4>Via Trading</h4>
                <h4>Senior Engineer</h4>
                <br />
                <a
                  href="https://www.viatrading.com/"
                  target="_blank"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "22px",
                    padding: "8px",
                  }}
                >
                  Client Info
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-3 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img7} className="img-fluid portfolio-img" />
              <div className="portfolio-info">
                <h4>Oracle Retail</h4>
                <h4>Software Engineer</h4>
                <br />
                <a
                  href="https://mstart.hr/?p=3561"
                  target="_blank"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "22px",
                    padding: "8px",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3 col-md-3 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={img8} className="img-fluid portfolio-img" />
              <div className="portfolio-info">
                <h4>Speaksubz</h4>
                <h4>Lead Engineer</h4>
                <br />
                <a
                  href="https://www.sourcecraft.hr/projects/speaksubz"
                  target="_blank"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "22px",
                    padding: "8px",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
