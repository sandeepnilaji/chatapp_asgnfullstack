const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema); // users collection

module.exports = User;
