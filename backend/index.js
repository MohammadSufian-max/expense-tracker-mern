const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// health route
app.get("/", (req, res) => {
  res.send("API running");
});

// routes
app.use("/auth", require("./router/userRouter"));
app.use("/expenses", require("./router/expenseRouter"));

// start server FIRST
app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log("Server running");
});

// DB connect AFTER
require("./db/db")();
