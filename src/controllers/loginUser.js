const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: User } = require("../database/models/User");

const loginUser = async (req, res, next) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  if (!user) {
    const error = new Error("User not found");
    next(error);
  } else {
    const rightPassword = await bcrypt.compare(password, user.password);
    if (!rightPassword) {
      const error = new Error("Wrong credentials");
      next(error);
    } else {
      const userData = { name: userName, id: user.id };
      const token = jwt.sign(userData, process.env.JWT_SECRET);
      res.json({ token });
    }
  }
};

export default loginUser;
