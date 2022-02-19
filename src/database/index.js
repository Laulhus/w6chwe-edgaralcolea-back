const mongoose = require("mongoose");
const chalk = require("chalk");
const debug = require("debug")("myRobots:src:database");

const connectDatabase = (connectString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectString, (error) => {
      if (error) {
        reject(error);
        return;
      }
      debug(chalk.blue("Connected to database"));
      resolve();
    });
  });

module.exports = connectDatabase;
