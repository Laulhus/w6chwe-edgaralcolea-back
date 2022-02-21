const express = require("express");
const {
  getAllRobots,
  deleteRobot,
  getRobot,
  createRobot,
} = require("../../controllers/robotsController");
const auth = require("../middlewares/auth");

const robotsRouter = express.Router();

robotsRouter.get("/", getAllRobots);
robotsRouter.get("/:idRobot", getRobot);
robotsRouter.delete("/delete/:idRobot", auth, deleteRobot);
robotsRouter.post("/create", auth, createRobot);

module.exports = robotsRouter;
