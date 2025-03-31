import express from "express"
import cors from "cors"
import connectDB from "./Config/db.js"
import projectRoutes from "./Routes/route.js"

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/projects",projectRoutes);

//start server
app.listen(3000,()=>{
     console.log("Server running on port 3000");
})