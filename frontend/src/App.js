import React from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Dashboard from "./components/Dashboard/Dashboard";
import ProjectsPage from "./components/ProjectPage/ProjectPage";
import FileBrowser from "./components/FileBrowser/FileBrowser";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/fileBrowser" component={FileBrowser} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
