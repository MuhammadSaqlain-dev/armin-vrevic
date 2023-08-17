import React from "react";

import react from "../img/react.svg";
import linux from "../img/linux-ar21.png";
import java from "../img/Java-Logo-300x188.png";
import node from "../img/node.png";
import images from "../img/images.jpeg";
import swift from "../img/swift-15.svg";
import python from "../img/python.png";
import html from "../img/html.png";
import bootstrap from "../img/bootstrap.jpg";
import git from "../img/git.png";
import vscode from "../img/vscode.png";
import jira from "../img/Jira-new-logo.png";
import solr from "../img/solr.png";
import lucid from "../img/lucidchart_logo_Logo.jpeg";
import moby from "../img/Moby-logo.webp";
import php from "../img/php.png";

const StackSection = () => {
  return (
    <React.Fragment>
      <section id="mystack" className="mystack about">
        <div className="container">
          <div className="row" style={{ padding: "15px" }}>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${react}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${linux}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${java}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${php}")` }}
            ></div>
          </div>
          <br />
          <div className="row" style={{ padding: "15px" }}>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${node}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${images}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${swift}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${python}")` }}
            ></div>
          </div>
          <br />
          <div className="row" style={{ padding: "15px" }}>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${html}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${bootstrap}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${git}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${vscode}")` }}
            ></div>
          </div>
          <br />
          <div className="row" style={{ padding: "15px" }}>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${jira}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${solr}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${lucid}")` }}
            ></div>
            <div
              className="col-md-3 col-6 content bg-tech"
              // data-aos
              style={{ backgroundImage: `url("${moby}")` }}
            ></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StackSection;
