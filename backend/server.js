import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

const port = process.env.PORT || 5000;

// Default test route
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// Auth routes
app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
