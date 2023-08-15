import React from "react";

const HeroSection = () => {
  return (
    <React.Fragment>
      <section id="hero" className="d-flex align-items-center">
        <div className="container-fluid" data-aos>
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 className="word" style={{ minHeight: "64px" }}>
                Freelance Developer
              </h1>
              <h2>10+ years of experience</h2>

              <div style={{ marginTop: "50px" }}>
                <a
                  href="https://arminvrevic.com/#about"
                  className="btn-get-started scrollto"
                  style={{ margin: "10px" }}
                >
                  Read more
                </a>
                <br />
                <a
                  href="https://arminvrevic.com/Armin_Vrevic_CV.pdf"
                  id="cvDownload"
                  style={{ marginTop: "50px", display: "none" }}
                  className="btn-get-started scrollto"
                  download
                >
                  Download CV
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
