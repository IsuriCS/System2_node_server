const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: "https://intern-task-7efcc.web.app",
}));

app.post("/login", (req, res) => {
  const {username, password} = req.body;

  if (username === "testUser" && password === "abc123") {
    return res.status(200).json({message: "Login successful!"});
  } else {
    return res.status(401).json({error: "Invalid username or password"});
  }
});

app.use((req, res) => {
  res.status(404).json({error: "Route not found"});
});

module.exports = app;
