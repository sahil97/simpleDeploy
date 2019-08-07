import React, { Component } from "react";
import "./FileBrowser.css";
import File from "../../containers/File/File";
import { TiArrowBack } from "react-icons/ti";
import axios from "../../axios-files";

class FileBrowser extends Component {
  state = {
    fileList: ["file1", "file2"],
    filePath: [],
    dirPath: ""
  };

  componentDidMount() {
    this.fetchFiles("");
  }

  fetchFiles = filePath => {
    axios
      .post("/files", {
        path: this.state.filePath.join("/")
      })
      .then(res => {
        if (res.data.files) {
          this.setState({
            dirPath: res.data.dirPath,
            fileList: res.data.files
          });
        }
      });
  };

  fileClickHandler = filename => {
    if (filename.split(".").length > 1) {
      alert("You can only click on folders");
    } else {
      if (filename === "up") {
        filename = "..";
      }
      let filePath = this.state.filePath;
      filePath.push(filename);
      console.log("filePath", filePath);
      this.fetchFiles(this.state.filePath);
    }
  };

  render() {
    let fileDiv = this.state.fileList.map(file => {
      return (
        <tr key={file}>
          <td>
            <File filename={file} onClick={e => this.fileClickHandler(file)} />
          </td>
        </tr>
      );
    });

    return (
      <div className="container mt-5 fileBrowserContainer">
        <h1>Browse Directory</h1>
        <hr />

        <div className="fileSystem">
          <div className="d-flex justify-content-between form-group">
            <input
              type="text"
              className="form-control path"
              value={this.state.dirPath}
              readOnly
            />
            <button className="up" onClick={e => this.fileClickHandler("up")}>
              <TiArrowBack className="upArrow" /> Up
            </button>
          </div>
          <div className="fileList">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">FileName</th>
                </tr>
              </thead>
              <tbody>{fileDiv}</tbody>
            </table>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default FileBrowser;
