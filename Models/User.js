const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      //// even student or former
      type: String,
      required: true,
    },
    posts: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
