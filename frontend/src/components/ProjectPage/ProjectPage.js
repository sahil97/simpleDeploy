import React, { Component } from "react";
import "./ProjectPage.css";

class ProjectPage extends Component {
  render() {
    return (
      <div className="container projectPageContainer">
        <header className="projectPageHeader">
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
        <nav>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link Active" href="#">
                Settings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Activity
              </a>
            </li>
          </ul>
        </nav>
        <div className="projectDetails">
          <h5> Project Details</h5>
          <form>
            <div class="form-group">
              <label for="projectNameInput">Name</label>
              <input
                type="text"
                class="form-control"
                id="projectNameInput"
                placeholder="Enter Name"
              />
            </div>
            <div class="form-group">
              <label for="descriptionInput">Describe your project</label>
              <input
                type="text"
                className="form-control"
                id="descriptionInput"
                placeholder="description"
              />
            </div>
            <div className="form-group">
              <label for="pathInput">Project Path</label>
              <input
                type="text"
                className="form-control"
                id="pathInput"
                placeholder="Project Path"
              />
            </div>
            <div className="form-group">
              <label for="gitRepo">Git Repository</label>
              <input
                type="text"
                className="form-control"
                id="gitRepo"
                placeholder="Git Repository Link"
              />
            </div>

            <div className="form-group">
              <label for="entryFileInput">Project Entry File</label>
              <input
                type="text"
                className="form-control"
                id="entryFileInput"
                placeholder="Project Entry File"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <button type="submit" className="ml-3 btn btn-light" disabled>
              Cancel
            </button>
          </form>
        </div>
        <div className="projectDestroy mt-5 mb-5">
          <hr />
          <div className="d-flex justify-content-between mt-5">
            <div className="">
              <h3>Delete project</h3>
              <p>
                To delete a project, you must move or delete all resources
                within it. Default project cannot be deleted.
              </p>
            </div>
            <div className="">
              <button className="btn btn-danger"> Delete Project</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
