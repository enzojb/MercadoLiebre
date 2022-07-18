const express = require("express");
const server = express();
const port = 3030;
const start = () => console.log("Starting server...");
const path = require("path");
const public = path.join(__dirname, "../public");
const statics = express.static(public);

server.listen(port, start());

server.use(statics);

server.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/index.html"));
});
server.get("/register", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/register.html"));
});
server.get("/login", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/login.html"));
});