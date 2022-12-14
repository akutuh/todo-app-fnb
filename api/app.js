const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const todosRouter = require("./controllers/todos");

const mongoose = require("mongoose");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/api/todos", todosRouter);

const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../frontend/build/index.html"));
});

module.exports = app;
