require("dotenv").config();
const express = require("express");
const debug = require("debug")("myRobots:root");
const chalk = require("chalk");

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () =>
  debug(chalk.greenBright(`Server listening on http://localhost:${port}`))
);
