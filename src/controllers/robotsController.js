const debug = require("debug")("myRobots:src:controllers");
const Robot = require("../database/models/Robot");

const getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json(robots);
};

const getRobot = async (req, res) => {
  const { idRobot } = req.params;
  const robot = await Robot.findById(idRobot);
  res.json(robot);
};

const deleteRobot = async (req, res, next) => {
  const { idRobot } = req.params;
  try {
    const robot = await Robot.findByIdAndDelete(idRobot);
    if (robot) {
      res.json({ id: robot.id });
    } else {
      const error = new Error("Robot not found");
      error.code = 404;
      next(error);
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
};

const createRobot = async (req, res, next) => {
  try {
    const newRobot = await Robot.create(req.body);
    debug(newRobot);
    res.json(newRobot);
  } catch (error) {
    error.code = 403;
    next(error);
  }
};

module.exports = { getAllRobots, getRobot, deleteRobot, createRobot };
