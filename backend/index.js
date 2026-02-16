const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require("./db/db");
const userRouter = require('./router/userRouter');
const expenseRouter = require('./router/expenseRouter');

dotenv.config(); // load env vars

const app = express();

app.use(cors());
app.use(express.json());

// ROOT ROUTE (for Railway test)
app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use('/auth', userRouter);
app.use('/expenses', expenseRouter);

connectDb();

// FIXED PORT
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server on :- ${port}`);
});
