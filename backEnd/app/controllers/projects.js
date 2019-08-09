const responseWrapper = require("./../wrappers/responseWrapper");

const projects = {
  list: async (req, next) => {
    try {
      next(responseWrapper.response(true, 200, "", ["1", "2", "3"]));
    } catch (err) {
      next(err);
    }
  }
};

module.exports = projects;
