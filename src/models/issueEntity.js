const { getDatabase, ObjectID } = require("./mongoDB");
const { issues } = require("../config").api.resources;

const collectionName = issues;

async function insertIssue(issue) {
  const db = await getDatabase();
  const { insertedId } = await db.collection(collectionName).insertOne(issue);
  return insertedId;
}

async function getIssue(issueId) {
  const db = await getDatabase();
  const issue = await db
    .collection(collectionName)
    .findOne({ _id: ObjectID(issueId) });
  return issue;
}

async function getAllIssues() {
  const db = await getDatabase();
  const allIssues = await db.collection(collectionName).find().toArray();
  return allIssues;
}

module.exports = {
  insertIssue,
  getIssue,
  getAllIssues,
};
