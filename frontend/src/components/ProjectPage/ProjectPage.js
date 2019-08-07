import React, { Component } from "react";
import "./ProjectPage.css";

class ProjectPage extends Component {
  render() {
    return (
      <div className="container mt-5">
        <header>
          <div className="row">
            <img
              alt="projectLogo"
              src="https://coder.clothing/images/stories/virtuemart/product/reactjs-logo-sticker.jpg"
              className="img img-thumbnail projectThumb"
            ></img>
            <div className="projectName">
              <h3>
                Project Name
                <span className="optionalDefault">Default</span>
              </h3>
              <h6>Project description or whateveasdas asdqwasd</h6>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default ProjectPage;
