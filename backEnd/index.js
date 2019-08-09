"use-strict";

// Imports
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

// APP Related
const PORT = 3333;
const app = express();

// routes
const routes = require("./app/routes");

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

app.use("/", routes.api(app));

// app.post("/files", (req, res) => {
//   let pathStack = req.body["path"];
//   debugger;
//   let dirPath = path.join(__dirname, pathStack);
//   console.log("dirPath", dirPath);
//   fs.readdir(dirPath, (err, files) => {
//     if (err) {
//       return {};
//     }
//     const fileList = [];
//     if (files) {
//       files.forEach(file => {
//         fileList.push(file);
//       });
//       console.log("fileList", fileList);
//       // return responseWrapper.response(true, 200, "", {
//       //   files: fileList,
//       //   dirPath: dirPath
//       // });
//       res.json({
//         files: fileList,
//         dirPath: dirPath
//       });
//     }
//   });
// });

const server = app.listen(PORT, () => {
  console.log("Running on Port", PORT);
});
