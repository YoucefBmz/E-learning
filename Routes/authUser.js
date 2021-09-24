const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { loginUser, registerUser } = require("../Controllers/AutchController");

//REGISTER
router.post("/register", registerUser);

//LOGIN
router.post("/login", loginUser);

module.exports = router;
