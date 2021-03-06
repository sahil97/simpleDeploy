import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import SideBarItem from "../SideBarItem/SideBarItem";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarItem goto="/" highlight={true} label="Home" icon="home" />
        <SideBarItem goto="/" label="Logout" icon="sign-out" />
      </Menu>
    );
  }
}

export default SideBar;
