import express from "express";
import cors from "cors";
import connectDB from "./Config/db.js";
import projectRoutes from "./Routes/route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);

// Start server after MongoDB connection
const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });