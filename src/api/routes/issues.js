const express = require('express')
const config = require('../../config')

const route = express.Router();

module.exports = router => {
  router.use(config.api.routes.issues, route);
  route.get("/", (req, res) => {
    return res
      .json({ test: "This is a test of the /issues route" })
      .status(200);
  });
};
