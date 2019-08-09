import React, { Component } from "react";
import "./Dashboard.css";
import { FaChevronDown } from "react-icons/fa";
import ProjectName from "../../containers/ProjectName/ProjectName";

class Dashboard extends Component {
  projectNameClickHandler = projectName => {
    this.props.history.push("/projects");
  };

  render() {
    return (
      <div className="container Dashboard">
        <h1>Project Dashboard</h1>
        <hr />
        <div className="row">
          <table className="table projectListing">
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
