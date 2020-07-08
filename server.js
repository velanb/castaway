if (!(process.env.NODE_ENV === "production")) {
  require("dotenv").config({
    path: "./.env",
  });
}

const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.json({
    status: "Hello",
  });
});

server.listen(process.env.PORT, () => {
  console.log("The app is up");
});
