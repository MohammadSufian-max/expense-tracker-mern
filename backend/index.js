const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require("./db/db");
const userRouter = require('./router/userRouter');
const expenseRouter = require('./router/expenseRouter');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check route (VERY IMPORTANT)
app.get("/", (req, res) => {
    res.status(200).send("OK");
});

app.use('/auth', userRouter);
app.use('/expenses', expenseRouter);

// Start server FIRST
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on ${PORT}`);
});

// THEN connect DB
connectDb();
