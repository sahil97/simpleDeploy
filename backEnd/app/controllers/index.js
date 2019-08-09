const Router = require("express").Router();
const projects = require("./projects");
const files = require("./files");
const _ = require("lodash");

const init = () => {
  return;
};

const http = apiMethod => {
  return (req, res) => {
    let ip;
    if (req.headers["x-forwarded-for"]) {
      ip = req.headers["x-forwarded-for"].split(",")[0]; // for systems behind a proxy
    } else if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress;
    } else {
      ip = req.ip;
    }
    try {
      let object = _.extend({}, req.headers, req.files, req.fields, {
          body: _.extend({}, req.body, req.params, req.query),
          ip: ip,
          file: req.file,
          locals: res.locals,
          requestUrl: req.protocol + "://" + req.get("host") + req.originalUrl
        }),
        requestType = req.method, //value will be GET,POST,PUT,PATCH,DELETE
        requestUrl = req["route"]["path"],
        options = _.extend({}, req.files, req.query, req.params);
      console.log("-------------Request-----------------");
      console.log(object.requestUrl);
      console.log(object.ip);
      console.log("-------------------------------------");
      apiMethod(object, response => {
        console.log("res", response);
        res.send(response);
      });
    } catch (error) {
      console.log("==========ERROR==========");
      console.log(error.name);
      console.log(error.message);
      res.send(error.message);
    }
  };
};

module.exports = {
  init: init,
  http: http,
  projects: projects,
  files: files
};
