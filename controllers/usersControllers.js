const path = require("path")

const users = require("../models/usersModels")

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUsers = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(200).json({
    message: true,
    users,
  });
};