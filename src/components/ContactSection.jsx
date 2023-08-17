import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos>
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-map"></i>
              <h3>Address</h3>
              <p>Zagreb, Croatia</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-envelope"></i>
              <h3>Email</h3>
              <p>
                <a>armin.vrevic@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="info-box mb-4">
              <i className="bx bx-phone-call"></i>
              <h3>Phone</h3>
              <p>+385 99 402 69 12</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
