// 2.0 Dockerize nodejs application

const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Dockerize The Nodejs application Optimizely");
});

// Error route
app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error Occurred: " + err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
