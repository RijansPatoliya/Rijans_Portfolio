import Project from "../Model/Projects.js"

export const getAllProjects = async (req,res) => {
   try{
      const projects = await Project.find().sort({createdAt:-1});
      res.json(projects);
   }catch(error){
    res.status(500).json({ error: "Server Error" });
   }
}

export const getProjectsByCategory = async(req,res) => {
    try{
        const { category } = req.params;

        // Find projects with the given category
        const projects = await Project.find({category}).sort({createdAt:-1});
        
        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects
          });

    }catch(error){
        res.status(500).json({
            success: false,
            error: 'Something went wrong'
          });
    }
}

export const createProject = async(req,res) => {
    try{
     const project = new Project(req.body);

    await project.save();

    res.status(201).json({
        success: true,
        message: "Project created successfully!",
        data: project
      });
    }catch (error) {
        res.status(500).json({
          success: false,
          error: error.message || "Server Error"
        });
      }

}