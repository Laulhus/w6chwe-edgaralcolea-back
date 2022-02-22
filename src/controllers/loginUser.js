const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../database/models/User");

const loginUser = async (req, res, next) => {
  const { userName, password } = req.body;
  const foundUser = await User.findOne({ userName });
  if (!foundUser) {
    const error = new Error("User not found");
    error.code = 404;
    next(error);
  } else {
    const rightPassword = await bcrypt.compare(password, foundUser.password);
    if (!rightPassword) {
      const error = new Error("Wrong credentials");
      error.code = 401;
      next(error);
    } else {
      const userData = { name: userName, id: foundUser.id };
      const token = jwt.sign(userData, process.env.JWT_SECRET);
      res.json({ token });
    }
  }
};

module.exports = loginUser;
