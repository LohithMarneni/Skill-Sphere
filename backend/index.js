require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const { verifyJWT } = require("./middleware/verifyJWT")
const registerRoutes = require("./routes/userRoutes/register")
const loginRoutes = require("./routes/userRoutes/login")
const logoutRoutes = require("./routes/userRoutes/logout")
const refreshRoutes = require("./routes/userRoutes/refresh")
const courseRoutes = require("./routes/coursesRoutes/courses")
const easyQuizRoutes = require("./routes/quizRoutes/easyQuiz")
const mediumQuizRoutes = require("./routes/quizRoutes/mediumQuiz")
const hardQuizRoutes = require("./routes/quizRoutes/hardQuiz")
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(process.env.MONGOURI).then(()=>{
    app.listen(PORT,()=>{
        console.log("Server Started...")
    })
}).catch((err)=>{
    console.log(err)
})
app.use("/api/register",registerRoutes)
app.use("/api/login",loginRoutes)
app.use("/api/logout",logoutRoutes)
app.use("/api/refresh", refreshRoutes)
app.use("/api/course" , verifyJWT ,courseRoutes)
app.use("/api/easyQuiz" , verifyJWT , easyQuizRoutes)
app.use("/api/mediumQuiz" , verifyJWT , mediumQuizRoutes)
app.use("/api/hardQuiz" , verifyJWT, hardQuizRoutes)

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the API");
});

app.all("*", (req, res) => {
    res.sendStatus(404);
});