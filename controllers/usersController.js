const express = require("express");

const users = express.Router({ mergeParams: true });
const {
  getAllUsers,
  getUser,
  newUser,
  deleteUser,
  updateUser,
} = require("../queries/users");

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// UPDATE
users.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await updateUser(id, req.body);
  if (updatedUser.id) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json("User not found");
  }
});

// NEW
users.post("/", async (req, res) => {
  const user = await newUser(req.body);
  res.json(user);
});

// DELETE
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json("User not found");
  }
});

// TEST JSON NEW
// {
//   "username": "Cho",
//   "first_name": "Cho",
//   "last_name": "Chang",
//   "password": "Ravenclaw4ev@",
//   "email": "cc@hogwarts.edu"
// }
module.exports = users;
