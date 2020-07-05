const express = require("express");
const {
  check,
  validationResult,
  getValidationErrors,
} = require("express-validator");
const config = require("../../config");
const { issue } = require("../../services");
const { validateNewIssue } = require("../middleware").issueValidation;

const route = express.Router();

module.exports = (router) => {
  router.use(`/${config.api.resources.issues}`, route);

  route.get("/", async (req, res) => {
    try {
      const allIssues = await issue.getAllIssues();
      return res.status(200).json(allIssues);
    } catch (error) {
      console.error(error);
      error.status(500);
      next(error);
    }
  });

  route.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const issues = await issue.getIssue(id);
      return res.status(200).json(issues);
    } catch (error) {
      console.error(error);
      error.status(500);
      next(error);
    }
  });

  route.post( "/", validateNewIssue,
    async (req, res) => {
      try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          const errResults = errors.array({ onlyFirstError: true });
          return res.status(422).jsonp(errResults);
        }

        const { summary, description } = req.body;
        const entityId = await issue.newIssue({ summary, description });

        return res
          .status(201)
          .json({ message: "New issue entity created", id: entityId });
      } catch (e) {
        console.error(e);
      }
    }
  );
};
