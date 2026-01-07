const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Dockerize the volume bind mount Nodejs applications");
});

app.get("/error", (req, res) => {
  throw new Error("Something went wrong!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error Occurred: " + err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
