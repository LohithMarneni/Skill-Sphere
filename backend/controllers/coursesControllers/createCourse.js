const run = require("../../config/geminiAPI")
const Course = require("../../model/Course.model")
const easyQuiz = require("../../model/easyQuiz.model")
const mediumQuiz = require("../../model/mediumQuiz.model")
const hardQuiz = require("../../model/hardQuiz.model")
const createCourse = async (data , userId)=>{
    try
    {
        const newCourse = new Course(
            {
                courseName: data.courseName,
                resources : data.resources,
                createdBy : userId
            }
        )
        await newCourse.save()
        let courseID = newCourse._id
        const newEasyQuiz = new easyQuiz(
            {
                questions : data.easyQuiz.questions,
                courseId : courseID
            }
        )
        await newEasyQuiz.save()
        const newMediumQuiz = new mediumQuiz(
            {
                questions : data.mediumQuiz.questions,
                courseId : courseID
            }
        )
        await newMediumQuiz.save()
        const newHardQuiz = new hardQuiz(
            {
                questions : data.hardQuiz.questions,
                courseId : courseID
            }
        )
        await newHardQuiz.save()
        return true;
    }
    catch(err)
    {
        console.log(err)
        return false;
    }
}
const handleCreateCourse = async (req,res)=>{
    const username = req.user 
    const topicName = req.body.courseName
    const prompt = `The topic name is ${topicName}`
    const result = await run(prompt)
    const data = await JSON.parse(result)
    const isCreated = createCourse(data , req.id)
    if(isCreated){
        return res.status(200).json({"data" : data , "user" : username , "_id" : req.id});
    }
    else
    {
        return res.status(400).json({"msg" : "Unable to create course..."})
    }
}
module.exports = {handleCreateCourse}