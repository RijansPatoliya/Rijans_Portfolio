import express from "express"
import { createProject, getAllProjects, getProjectsByCategory } from "../controllers/controller.js";

const router = express.Router();

router.get("/allProjects",getAllProjects);
router.get("/categories/:category",getProjectsByCategory)
router.post("/createProject",createProject);

export default router;
