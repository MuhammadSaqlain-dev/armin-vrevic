import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <header id="header" className="fixed-top">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-9 d-flex align-items-center">
              <h1 className="logo mr-auto">
                <a href="index.html" style={{ fontSize: "80%" }}>
                  Armin Vrevi&#263;
                </a>
              </h1>

              <nav className="nav-menu d-none d-lg-block">
                <ul>
                  <li className="active">
                    <a href="https://arminvrevic.com/#hero">Home</a>
                  </li>
                  <li>
                    <a href="https://arminvrevic.com/#about">About</a>
                  </li>
                  <li>
                    <a href="https://arminvrevic.com/#services">Services</a>
                  </li>
                  <li>
                    <a href="https://arminvrevic.com/#mystack">My Stack</a>
                  </li>
                  <li>
                    <a href="https://arminvrevic.com/#testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="https://arminvrevic.com/#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="https://arminvrevic.com/#faq">Info</a>
                  </li>
                  <li>
                    <a href="https://arminvrevic.com/#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
