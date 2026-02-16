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

// Root route
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use('/auth', userRouter);
app.use('/expenses', expenseRouter);

connectDb();

// VERY IMPORTANT LINE
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on ${PORT}`);
});
