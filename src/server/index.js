const express = require("express");
const debug = require("debug")("myRobots:server");
const chalk = require("chalk");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const { generalError, notFoundError } = require("./middlewares/errors");
const robotsRouter = require("./routers/robotsRouter");

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
app.use(helmet());
app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = initializeServer;