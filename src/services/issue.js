const { issueEntity } = require("../models");

async function newIssue(issueData) {
  return issueEntity.insertIssue(issueData);
}

module.exports = {
  newIssue,
};
