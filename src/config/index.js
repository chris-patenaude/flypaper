const dotenv = require("dotenv");

// Set application environment
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// generate environment variables with error checking
if (!dotenv.config('../.env')) {
  throw new Error("No .env file found");
}

// export a configuration object
module.exports = {
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.DATASTORE_URI,
  api: {
    prefix: "/api",
    routes: {
      user: "/user",
      issues: "/issues",
      project: "/project",
    },
  },
};
