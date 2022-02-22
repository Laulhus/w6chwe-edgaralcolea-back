const chalk = require("chalk");
const debug = require("debug")("myRobots:server:initializeServer");

const initializeServer = (port, app) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.greenBright(`Server listening on http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => reject(error));
  });

module.exports = initializeServer;
