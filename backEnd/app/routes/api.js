const express = require("express");
const api = require("../controllers");

const apiRoutes = router => {
  router = express.Router();
  router.get("/projects", api.http(api.projects.list));
  router.post("/files", api.http(api.files.list));
  return router;
};

module.exports = apiRoutes;
