const {getDatabase} = require('./mongoDB');

// TODO: make this more generic
const collectionName = 'issues'

async function insertIssue(issue) {
  const db = await getDatabase();
  const {insertedId} = await db.collection(collectionName).insertOne(issue);
  return insertedId;
}

module.exports = {
  insertIssue
}