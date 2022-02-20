const Robot = require("../database/models/Robot");

const getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
};

const deleteRobot = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedId = await Robot.findByIdAndDelete(id);
    if (deletedId) {
      res.json(deletedId);
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

module.exports = { getAllRobots, deleteRobot };
