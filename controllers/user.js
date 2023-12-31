const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  const existUser = await User.findOne({ where: { email: req.body.email } });
  if (existUser) {
    return res.status(400).json({
      message: "Email already exist!",
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const securePassword = bcrypt.hashSync(req.body.password, salt);

  const payload = {
    ...req.body,
    password: securePassword,
  };

  try {
    const user = await User.create(payload);
    res.status(200).json({
      message: "User registered successfully!",
      user,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      user: null,
      error: null,
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).json({
      message: "User not found!",
    });
  }

  const isAuthenticated = bcrypt.compareSync(password, user.password);
  if (isAuthenticated) {
    const token = jwt.sign(
      {
        email: user.email,
        userId: user.id,
      },
      "secret"
    );

    return res.status(200).json({
      message: "Logged in successfully!",
      user,
      token,
      error: null,
    });
  }

  res.status(401).json({
    message: "Invalid credential!",
    user: null,
    error: null,
  });
}

module.exports = { signup, login };
