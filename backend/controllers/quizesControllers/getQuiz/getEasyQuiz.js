const easyQuiz = require("../../../model/easyQuiz.model")
const getEasyQuiz = async (req,res)=>{
    const course_id = req.params.id
    const result = await easyQuiz.findOne({courseId : course_id}).exec()
    if(!result)
    {
        return res.status(400).json({"msg" : "No Quiz Found"})
    }
    else
    {
        return res.status(200).json(result)
    }
}
module.exports = {getEasyQuiz}