"use-strict";

// Imports
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

// APP Related
const PORT = 3333;
const app = express();

// Middlewares
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, x-auth,Authorization, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH , DELETE, OPTIONS"
  );
  next();
});
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ignition", (req, res) => {
  res.send("simpleDeploy Running");
});

app.post("/files", (req, res) => {
  let pathStack = req.body["path"];
  console.log("pathStack", pathStack);
  let dirPath = path.join(__dirname, pathStack);
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      res.send("Unable to scan dir" + err);
    }
    const fileList = [];
    files.forEach(file => {
      fileList.push(file);
    });
    res.json({ files: fileList });
  });
});

const server = app.listen(PORT, () => {
  console.log("Running on Port", PORT);
});
