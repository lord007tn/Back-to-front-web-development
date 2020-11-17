const router = require("express").Router();
const User = require("../models/user.models");

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.post("/register", async (req, res) => {
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(422).json("Email already exist");
  } catch (err) {
    return res.status(500).json(err);
  }
  const salt = await bcryptjs.genSalt(16);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.post("/login", async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json("Email/Password Wrong");
    const validPassword = await bcryptjs.compare(
      req.body.password,
      user.password
      );
    if (!validPassword) return res.status(401).json("Email/Password Wrong");
      const token = jwt.sign({id: user._id}, "ffdqkjgkjo", { expiresIn: "10h" });
    return res
      .status(200)
      .json({ token: token, user: user });
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
