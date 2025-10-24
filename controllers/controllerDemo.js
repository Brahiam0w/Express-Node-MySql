// controllers/userController.js
const users = require("../models/userModel");

const getUsers = (req, res) => {
  res.json(users);
};

module.exports = { getUsers };
