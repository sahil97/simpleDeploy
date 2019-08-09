import React from "react";
import { Icon, Menu } from "semantic-ui-react";
import "./SideBarItem.css";
import { Link } from "react-router-dom";

const SideBarItem = props => {
  const highlight = props.highlight ? "highlight-item" : null;

  return (
    <Menu.Item className={["sidebar-item", highlight].join(" ")}>
      <Link to={props.goto} className="sidebar-item-alignment-container">
        <span>
          <Icon size="large" name={props.icon} />{" "}
        </span>
        <span>{props.label}</span>
      </Link>
    </Menu.Item>
  );
};

export default SideBarItem;
