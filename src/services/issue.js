const { issueEntity } = require("../models");

async function newIssue(issueData) {
  const newIssueId = await issueEntity.insertIssue(issueData);
  return newIssueId;
}

async function getIssue(issueId) {
  const issue = await issueEntity.getIssue(issueId);
  return issue;
}

async function getAllIssues() {
  const allIssues = await issueEntity.getAllIssues();
  return allIssues;
}

module.exports = {
  newIssue,
  getIssue,
  getAllIssues,
};
