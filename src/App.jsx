import { useState, useEffect, useRef } from "react";
import GameMenu from "./GameMenu";

function Countdown({ time, onFinish }) {
  const [timeout, setTimeout] = useState(time);

  useEffect(() => {
    if (timeout <= 0) {
      onFinish?.();
      clearInterval();
    }
    const interval = setInterval(() => {
      setTimeout((timeout) => timeout - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeout]);

  return <span>Time left: {timeout}</span>;
}

function GameCard({ time, mode, onFinish }) {
  const generatorRef = useRef(
    mode === "word"
      ? getUniqlyRandomWordGenerator()
      : getUniqlyRandomSentenceGenerator(),
  );

  const [score, setScore] = useState(0);
  const [textValue, setTextValue] = useState("");
  const [currentRandomText, setCurrentRandomText] = useState(
    generatorRef.current(),
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTextValue(value);

    if (value.trim() === currentRandomText.trim()) {
      setScore((prev) => prev + 1);
      setTextValue("");
      setCurrentRandomText(generatorRef.current());
    }
  };

  const RenderText = () => {
    return <p className={`font-bold text-xl text-center my-4`}>
      {currentRandomText}
    </p>;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-purple-600 w-screen h-screen">
      <div className="flex flex-col gap-4 shadow-xl shadow-gray-500 bg-white rounded-md p-8 max-w-[560px] w-full">
        <p className="flex flex-row justify-between font-bold text-gray-700">
          <span>Score: {score}</span>
          <Countdown time={time} onFinish={onFinish} />
        </p>
        
        {RenderText()}

        <input
          className="w-full p-3 border-2 rounded-lg focus:outline-none transition-colors duration-200 bg-white text-gray-800 border-gray-300 focus:border-purple-500"
          placeholder="Type here..."
          dir="ltr"
          type="text"
          value={textValue}
          onChange={handleInputChange}
          autoFocus
        />
      </div>
    </div>
  );
}

function App() {
  const [gameOptions, setGameOptions] = useState(["sentece", 30]);

  if (gameOptions) {
    return <GameCard time={gameOptions[1]} />;
  } else {
    return (
      <GameMenu
        onGameStart={(mode, time) => {
          setGameOptions([mode, time]);
        }}
      />
    );
  }
}

export default App;

function getRandomElementPicker(array) {
  return () => {
    let generateIndex = () => Math.floor(Math.random() * array.length);
    let index = generateIndex();
    return array[index];
  };

  // todo idk
  let alreadyPicked = [];

  return () => {
    if (alreadyPicked.length === array.length) alreadyPicked = [];

    let generateIndex = () => Math.floor(Math.random() * array.length);
    let index = generateIndex();
    while (alreadyPicked.includes(index)) {
      index = generateIndex();
    }
    alreadyPicked.push(index);
    return array[index];
  };
}

function getUniqlyRandomWordGenerator() {
  /* prettier-ignore */
  const words = [
    "Node.js", "Express", "OAuth", "Git", "Docker", "CI/CD", "API", "Kubernetes",
    "React", "Redux", "JavaScript", "MongoDB", "GraphQL", "Postman", "Terraform",
    "Jest", "ESLint", "WebSocket", "Firebase", "Redis", "Cloud", "DevOps", "S3",
    "AWS", "WebRTC", "Agile", "Microservices", "NoSQL", "Database", "Testing",
    "Frontend", "Backend", "ES6", "Promise", "Asynchronous", "Serverless", "Mobile",
    "Container", "Hot-reload", "Versioning", "MVC", "JWT", "API-REST", "JWTs",
    "Normalization", "Webpack", "Indexing", "Terraform", "Docker-compose", "AWS-S3",
    "UX", "UI", "Authentication", "WebDev", "Continuous-Integration", "Automated-Tests",
    "Blockchain", "BigData", "Algorithms", "MachineLearning", "AI", "CloudStorage",
    "AgileMethodologies", "Refactoring", "Scrum", "GitHub", "TechStack", "BuildTools",
    "Microservices", "DevLab", "Hackathon", "Innovation", "Collaborative", "OpenSource",
    "Mentorship", "Coding", "Software", "Scalability", "Optimization", "CodingBootcamp",
    "FullStack", "JavaScriptFramework", "Containerization", "CI", "GitLab", "CloudInfrastructure",
    "LiveData", "RealTime", "APIIntegration", "CrossPlatform", "VersionControl", "AutomatedBuild",
    "FrontendFramework", "BackendArchitecture", "TechCommunity", "TechEvent", "HackathonEvent",
    "ProblemSolving", "Innovative", "Solution", "Networking", "TechTools", "Resourceful",
    "HackathonTeam", "Developer", "Codebase", "TechMeetup", "APIRequests", "Refactor", "DataStructure",
    "TechStack", "OpenSourceContribution", "FrontendDesign", "SoftwareArchitecture", "ContinuousDelivery",
    "JavaScriptLibrary", "AIProgramming", "AugmentedReality", "UserExperience", "CodeReview", "SoftwareDevelopment",
    "AlgorithmicThinking", "CI/CDPipeline", "CodeOptimization", "AppDeployment", "TechHackathon"
  ];
  return getRandomElementPicker(words);
}
function getUniqlyRandomSentenceGenerator() {
  const sentences = [
    "Use Git for version control",
    "OAuth handles user authentication",
    "Nodejs powers the backend server",
    "Docker ensures consistent environments",
    "The API returns JSON data",
    "Use Postman to test APIs",
    "Redux manages global state",
    "GraphQL queries API data efficiently",
    "JWT provides secure authentication",
    "WebSockets enable real-time updates",
    "CI/CD automates code deployment",
    "Kubernetes handles app scaling",
    "React builds dynamic user interfaces",
    "Vuejs powers the frontend app",
    "Agile methodology guides our sprints",
    "The app supports dark mode",
    "Use ESLint to enforce standards",
    "Indexing speeds up database queries",
    "Firebase provides real-time storage",
    "Terraform manages cloud infrastructure",
    "Jest tests our application code",
    "WebRTC supports video and audio",
    "localStorage stores user preferences",
    "Use Redis for data caching",
    "HTML, CSS, JS build frontend",
    "The app is mobile-first",
    "We use MongoDB for storage",
    "Docker Compose runs containerized services",
    "The DevLab Hackathon inspires creativity",
    "DevLab brings developers together",
    "The game uses JWTs",
    "Firebase handles authentication",
    "Devlab is the best hackathon in existence",
    "We follow the MVC pattern",
    "OAuth 2.0 allows secure login",
    "API versioning ensures compatibility",
    "Test code using TDD principles",
    "The server returns HTTP 404",
    "Asynchronous code uses async/await",
    "Our API follows REST principles",
    "Code reviews improve code quality",
    "Deploy to AWS for reliability",
  ];

  return getRandomElementPicker(sentences);
}
