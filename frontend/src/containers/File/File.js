import React from "react";

const file = props => {
  return <div onClick={props.onClick}>{props.filename}</div>;
};

export default file;
