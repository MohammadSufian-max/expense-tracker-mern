const express = require("express");
const app = express();

// ROOT ROUTE (must exist)
app.get("/", (req, res) => {
  res.status(200).send("HELLO FROM RAILWAY");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Running on", PORT);
});
