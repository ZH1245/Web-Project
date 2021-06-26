const statusCodes = require("../config/statusCodes");
module.exports = (res, data, message, error, status) => {
  message = message || "";
  data = data || null;
  error = error || false;
  status = status || "OK";
  let statusCode = statusCodes.statusCodes[status];
  let response = {
    error,
    message,
    data,
    statusCode,
  };
  return res.status(statusCode).json(response);
};
