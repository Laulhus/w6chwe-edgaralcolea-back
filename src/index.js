require("dotenv").config();
const debug = require("debug")("myRobots:root");
const chalk = require("chalk");
const connectDatabase = require("./database");
const initializeServer = require("./server/initializeServer");
const app = require("./server/index");

const port = process.env.PORT || 5000;
const databasebUrl = process.env.DB_URL;

(async () => {
  try {
    await connectDatabase(databasebUrl);
    await initializeServer(port, app);
    debug(chalk.magenta.bgBlackBright("Initialization succesful!"));
  } catch (error) {
    debug(chalk.redBright(`Error: ${error.message}`));
  }
})();
