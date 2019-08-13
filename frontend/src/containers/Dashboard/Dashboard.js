import React, { Component } from "react";
import "./Dashboard.css";
import { FaChevronDown } from "react-icons/fa";
import ProjectName from "../../components/ProjectName/ProjectName";
import { Icon } from "semantic-ui-react";

class Dashboard extends Component {
  projectNameClickHandler = projectName => {
    this.props.history.push("/projects");
  };

  render() {
    return (
      <div className="container Dashboard">
        <div className="d-flex justify-content-between">
          <h1>Project Dashboard</h1>
          <button className="btn btn-secondary">
            {" "}
            <span>
              <Icon size="large" name="long arrow alternate right" />
            </span>
            New Project
          </button>
        </div>
        <hr />
        <div className="row">
          <table className="col-12 table projectListing">
            <thead className="grey lighten-2">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Created</th>
                <th scope="col">Last Updated</th>
                <th scope="col">Currently Active</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="projectName">
                  <ProjectName
                    onClick={e => {
                      this.projectNameClickHandler("Testing123");
                    }}
                    name="Testing123"
                    attrs="React"
                  />
                </td>
                <td>Yesterday</td>
                <td>Yesterday</td>
                <td>Yes</td>
                <td>
                  <a href="#">
                    More <FaChevronDown />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
