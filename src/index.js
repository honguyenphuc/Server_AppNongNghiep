const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./config/db/index");
const app = express();

const server = require("http").createServer(app);
const notificationRouter = require("./routes/notifications");
const routes = require("./routes/routers");

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/notification", notificationRouter);

app.use("/api", routes);

db.connect();

app.listen(port, function () {
  console.log(`Server Started at ${port}`);
});