import React from "react";

import toptal from "../images/img-toptal.png";
import telegram from "../images/img-telegram.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright-wrap d-md-flex py-4">
          <div className="mr-md-auto text-center text-md-left">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Armin Vrević</span>
              </strong>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a
              href="https://www.linkedin.com/in/armin-vrević-19ba1961/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="skype:arminarmin688?add" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="https://github.com/avrevic" className="github">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.toptal.com/resume/armin-vrevic"
              className="upwork"
            >
              <img style={{ width: "18px" }} src={toptal} />
            </a>
            <a href="https://t.me/armincro" className="upwork">
              <img style={{ width: "18px" }} src={telegram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
