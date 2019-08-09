let responseWrapper = {
  response: (
    status,
    statusCode = 200,
    message = " ",
    data = null,
    type = "json"
  ) => {
    let responseObject = {
      type: type,
      status: status,
      statusCode: statusCode,
      message: message,
      data: data
    };

    return responseObject;
  }
};

module.exports = responseWrapper;
