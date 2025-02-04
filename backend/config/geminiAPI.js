const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};
async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "I built a MERN stack project called \"Skill Sphere,\" which focuses on providing resources and quizzes for technical skills. Your task is to generate a complete JSON response based on the topic name I will provide. The output should adhere to the following structure and guidelines:\n\nStructure of JSON Output:\n{\n\"courseName\": \"<courseName>\",\n\"resources\": [\n{\n\"link\": \"<valid_link>\",\n\"description\": \"<description>\"\n},\n{\n\"link\": \"<valid_link>\",\n\"description\": \"<description>\"\n},\n{\n\"link\": \"<valid_link>\",\n\"description\": \"<description>\"\n},\n{\n\"link\": \"<valid_link>\",\n\"description\": \"<description>\"\n},\n{\n\"link\": \"<valid_link>\",\n\"description\": \"<description>\"\n}\n],\n\"easyQuiz\": {\n\"questions\": [\n{\n\"questionText\": \"<question>\",\n\"options\": [\"<option1>\", \"<option2>\", \"<option3>\", \"<option4>\"],\n\"answer\": \"<correct_option>\"\n},\n...\n]\n},\n\"mediumQuiz\": {\n\"questions\": [\n{\n\"questionText\": \"<question>\",\n\"options\": [\"<option1>\", \"<option2>\", \"<option3>\", \"<option4>\"],\n\"answer\": \"<correct_option>\"\n},\n...\n]\n},\n\"hardQuiz\": {\n\"questions\": [\n{\n\"questionText\": \"<question>\",\n\"options\": [\"<option1>\", \"<option2>\", \"<option3>\", \"<option4>\"],\n\"answer\": \"<correct_option>\"\n},\n...\n]\n}\n}\nGuidelines:\nCourse Name: Replace <courseName> with the exact topic name provided.\nResources: Include exactly 5 resources. For each resource:\nUse a real, valid link.\nProvide a meaningful description of the resource.\nQuizzes: Create 3 sets of quizzes, each with exactly 10 questions:\nEasy Quiz: 10 questions of basic difficulty.\nMedium Quiz: 10 questions of intermediate difficulty.\nHard Quiz: 10 questions of advanced difficulty.\nFor every question:\nProvide a clear and relevant question.\nInclude four distinct options.\nMark one correct option in the \"answer\" field.\nData Accuracy: Use complete and accurate data. No placeholders like <valid_link>, <description>, <question>, etc. All fields must contain meaningful, non-placeholder values.\nJSON Format: Ensure the output is valid JSON. Do not include any extra characters, explanations, or formatting outside of the JSON structure.\nExample Workflow:\nI will provide a topic name, e.g., \"React.js\".\nBased on this topic, you will generate a complete JSON response, containing:\n5 real resources about \"React.js\".\n3 quizzes (easy, medium, hard) with 10 questions each, relevant to \"React.js\".\nNow, Please wait until I give you the topic name so that you can generate the required JSON."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Okay, I'm ready. Please provide the topic name.\n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const x = result.response.text()
  return x.substring(8,x.length-5)
}
module.exports = run;