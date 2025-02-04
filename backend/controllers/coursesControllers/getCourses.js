const Course = require("../../model/Course.model")
const handleGetCourses = async (req,res)=>{
    const userID = req.id
    const result = await Course.find({createdBy: userID}).exec()
    if(!result)
    {
        return res.status(400).json({"msg" : "No courses created"})
    }
    else
    {
        return res.status(200).json(result)
    }
}
module.exports = {handleGetCourses}