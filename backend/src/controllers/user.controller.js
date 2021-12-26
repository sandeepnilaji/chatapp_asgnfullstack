const User = require("../models/user.model");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    // console.log(user.username);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
