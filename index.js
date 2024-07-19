// index.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connection from "./database/connection.js";
import router from "./routes/auth.js";

const app = express();

// Bodyparser Middleware
app.use(express.json());

connection();

// Define Routes
app.use("/api/auth", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
