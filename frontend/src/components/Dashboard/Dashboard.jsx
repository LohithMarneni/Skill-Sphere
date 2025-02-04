import Card from "./Card"
function Dashboard() {
  return (
    <div className="box flex flex-col gap-2 p-2">
        <div className="welcome flex justify-center items-center p-10 flex-col gap-2">
            <h2 className="text-7xl text-black hover:text-violet-700 hover:scale-110 transition-all duration-200">Welcome to Skill Sphere</h2>
            <p className="text-xl">Your Ultimate AI-Powered Learning Companion</p>
            <button className="px-4 py-2 bg-black text-white rounded-lg">Get Started</button>
        </div>
        <div>
            <div className="p-4 flex justify-center items-center">
                <p className="font-extrabold p-2 text-3xl text-black">Why Choose Skill Sphere</p>
            </div>
            <div className="flex justify-between items-center px-30">
                <Card heading="Personalized Learning" text="AI-crafted roadmaps for any topic."/>
                <Card heading="Expert Resources" text="High-quality tutorials and articles."/>
                <Card heading="Gamified Quizzes" text="Easy, Medium, and Hard levels."/>
            </div>
        </div>
        <div>
            <div className="p-4 flex justify-center items-center">
                <p className="font-extrabold p-2 text-3xl text-black">Key Features</p>
            </div>
            <div className="flex justify-between items-center px-30">
                <Card heading="Tailored learning paths for every user." text=""/>
                <Card heading="Trusted resources from expert sources." text=""/>
                <Card heading="Interactive quizzes to track progress." text=""/>
            </div>
        </div>
        <div>
            <div className="p-4 flex justify-center items-center">
                <p className="font-extrabold p-2 text-3xl text-black">Our Impact</p>
            </div>
            <div className="flex justify-between items-center px-30">
                <Card heading="Faster Learning" text="Structured guidance for quick mastery."/>
                <Card heading="For Everyone" text="Students, professionals, and hobbyists."/>
                <Card heading="Confidence Boost" text="Achieve goals step-by-step."/>
            </div>
        </div>
        <div>
            <div className="p-4 flex justify-center items-center">
                <p className="font-extrabold p-2 text-3xl text-black">Use Cases</p>
            </div>
            <div className="flex justify-between items-center px-30">
                <Card heading="Grow your career with new skills." text=""/>
                <Card heading="Excel academically with clear roadmaps." text=""/>
                <Card heading="Learn new hobbies with structured plans." text=""/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard