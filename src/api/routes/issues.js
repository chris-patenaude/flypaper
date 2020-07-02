const express = require("express");
const config = require("../../config");
const { issue } = require("../../services");

const route = express.Router();

module.exports = (router) => {
  router.use(config.api.routes.issues, route);
  route.get("/", (req, res) => {
    return res
      .json({ test: "This is a test of the /issues route" })
      .status(200);
  });

  route.post("/", async (req, res) => {
    // TODO: add in validation
    const { summary, description } = req.body;
    const entityId = await issue.newIssue({ summary, description });
    return res
      .status(201)
      .json({ message: "New issue entity created", id: entityId });
  });
};
