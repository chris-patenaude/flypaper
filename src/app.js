const express = require("express");
const config = require("./config");

async function startServer() {
  const app = express();

  await require("./loaders")(app);

  app.listen(config.port, (err) => {
    if (err) {
      // TODO: look into Logger library
      console.error(err);
      process.exit(1);
      return;
    }

    console.log(`Server listening on port: ${config.port}`);
  });
}

startServer();
