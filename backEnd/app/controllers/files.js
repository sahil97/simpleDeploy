const responseWrapper = require("./../wrappers/responseWrapper");
const fs = require("fs");
const path = require("path");

const files = {
  list: (req, next) => {
    let pathStack = req.body["path"];
    debugger;
    let dirPath = path.join(__dirname, pathStack);
    console.log("dirPath", dirPath);
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        next(err);
      }
      const fileList = [];
      if (files) {
        files.forEach(file => {
          fileList.push(file);
        });
        console.log("fileList", fileList);
        next(
          responseWrapper.response(
            true,
            200,
            "",
            {
              dirPath: dirPath,
              files: fileList
            },
            "json"
          )
        );
      }
    });
  }
};

module.exports = files;
