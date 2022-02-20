const Robot = require("../database/models/Robot");

const getAllRobots = async (req, res) => {
  const robots = await Robot.find();
  res.json({ robots });
};

const deleteRobot = async (req, res, id) => {
  await Robot.findByIdAndDelete(id);
  res.json({ id });
};
module.exports = { getAllRobots, deleteRobot };
