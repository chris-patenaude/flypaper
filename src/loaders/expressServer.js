const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("../api");
const config = require("../config");

module.exports = async (app) => {
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(cors());
  app.use(morgan("combined"));

  app.use(config.api.prefix, routes());

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  // Handle 401 errors
  app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  // Handle other errors
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      error: {
        message:
          err.status != 500 ? err.message : "Internal server error encountered",
      },
    });
  });
};
