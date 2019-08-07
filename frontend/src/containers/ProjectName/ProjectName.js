import React from "react";
import "./ProjectName.css";
import { FaReact } from "react-icons/fa";

const ProjectName = props => {
  return (
    <div className="ProjectName row">
      <div className="icon">
        <FaReact className="fa-icon" />
      </div>
      <div className="desc">
        <h6 onClick={props.onClick}>{props.name}</h6>
        <p>{props.attrs}</p>
      </div>
    </div>
  );
};

export default ProjectName;
