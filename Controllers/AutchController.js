const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      //create new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        type: req.body.type,
      });
      //save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(404).json("user not found");
      } else {
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!validPassword) {
          res.status(400).json("wrong password");
        } else {
          const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
          res.header("auth-token", token).send(token);
          //res.status(200).json(user);
        }
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
