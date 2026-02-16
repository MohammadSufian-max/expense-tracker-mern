const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// health route FIRST
app.get("/", (req, res) => {
  res.status(200).send("OK");
});

// routes
app.use("/auth", require("./router/userRouter"));
app.use("/expenses", require("./router/expenseRouter"));

// start server immediately
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on", PORT);
});

// connect DB AFTER server start
require("./db/db")();
