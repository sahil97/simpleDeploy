import React, { Component } from "react";
import File from "../../components/File/File";
import axios from "../../axios-files";

class Container extends Component {
  state = {
    fileList: ["file1", "file2"]
  };

  componentDidMount() {
    console.log("componentDidMout - Main");
    axios.get("/ignition").then(res => console.log("res", res.data));
  }

  fileClickHandler = filename => {
    let filePath = this.state.filePath;
    filePath.push(filename);
    console.log(this.state.filePath);
  };

  render() {
    let fileDiv = this.state.fileList.map(file => {
      return (
        <File
          key={file}
          filename={file}
          onClick={e => this.fileClickHandler(file)}
        />
      );
    });

    return (
      <div>
        <h1>Container Working</h1>
        <div onClick={e => this.fileClickHandler("..")}>Up</div>
        <br />
        {fileDiv}
      </div>
    );
  }
}

export default Container;
