import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Dashboard from "./containers/Dashboard/Dashboard";
import ProjectsPage from "./containers/ProjectPage/ProjectPage";
import FileBrowser from "./containers/FileBrowser/FileBrowser";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="row">
        <SideBar />
        <div className="ContentWrapper">
          <Switch>
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/fileBrowser" component={FileBrowser} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
