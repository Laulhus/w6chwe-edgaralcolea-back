const express = require("express");
const debug = require("debug")("myRobots:server");
const chalk = require("chalk");
const morgan = require("morgan");
const notFoundError = require("./middlewares/errors");

const app = express();

const initializeServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.greenBright(`Server listening on http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => reject(error));
  });

app.use(morgan("dev"));
app.use(express.json());

app.use(notFoundError);
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({ error: true, message: "Internal server error." });
});

module.exports = initializeServer;
