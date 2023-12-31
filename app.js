const express = require("express");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();
app.use(bodyParser.json());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

module.exports = app;
