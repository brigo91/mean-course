const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.create({ email, password })
});

module.exports = router;