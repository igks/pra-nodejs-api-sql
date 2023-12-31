const express = require("express");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/posts");

const app = express();
app.use(bodyParser.json());

app.use("/posts", postRoutes);

module.exports = app;
