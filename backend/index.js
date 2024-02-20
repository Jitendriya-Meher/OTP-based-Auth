const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { connectDB } = require('./connection');
require("dotenv").config();

const port = 4000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// db connection
connectDB();

// routes
const authRoutes = require("./routes/auth-routes");
app.use("/api",authRoutes);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});