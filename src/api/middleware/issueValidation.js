const { check } = require("express-validator");

const validateNewIssue = [
  check(
    "summary",
    "Issue summaries must be between 1 and 64 characters in length"
  )
    .exists()
    .isLength({ min: 1, max: 64 })
    .trim()
    .escape(),
  check(
    "description",
    "Issue descriptions must be between 1 and 2048 characters in length"
  )
    .exists()
    .isLength({ min: 1, max: 2048 })
    .trim()
    .escape(),
  check("author", "Invalid user id in 'author' field")
    .exists()
    .isString()
    .trim()
    .escape(),
  check("project", "Invalid project id in 'project' field")
    .exists()
    .isString()
    .trim()
    .escape(),
];

module.exports = {
  validateNewIssue,
};
