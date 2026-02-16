const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Running on", process.env.PORT);
});
