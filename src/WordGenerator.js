function getRandomElementPicker(array) {
  let alreadyPicked = [];

  return () => {
    if (alreadyPicked.length === array.length) {
      alreadyPicked = [];
      console.log("reched the max borther");
    }
    let generateIndex = () => Math.floor(Math.random() * array.length);
    let index = generateIndex();
    while (alreadyPicked.includes(index)) {
      index = generateIndex();
    }
    alreadyPicked.push(index);
    return array[index];
  };
}

export function getUniqlyRandomWordGenerator() {
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

export function getUniqlyRandomSentenceGenerator() {
  let sentences = [
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
