const express = require("express");
const issuesRoute = require("./routes/issues");

module.exports = () => {
  const router = express.Router();
  issuesRoute(router);
  return router;
};
