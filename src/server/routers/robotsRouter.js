const express = require("express");
const {
  getAllRobots,
  deleteRobot,
  getRobot,
  createRobot,
} = require("../../controllers/robotsController");

const robotsRouter = express.Router();

robotsRouter.get("/", getAllRobots);
robotsRouter.get("/:idRobot", getRobot);
robotsRouter.delete("/delete/:idRobot", deleteRobot);
robotsRouter.post("/create", createRobot);

module.exports = robotsRouter;
