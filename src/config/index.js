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
  api: {
    prefix: "/api",
    resources: {
      user: "user",
      issues: "issues",
      project: "project",
    },
  },
  auth0: {
    domain: process.env.AUTH0_DOMAIN,
    apiID: process.env.AUTH0_API_IDENTIFIER
  }
};
