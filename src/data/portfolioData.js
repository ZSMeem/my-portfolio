const RESEARCH_IMAGE_BASE = `${import.meta.env.BASE_URL}images/research`;

export const defaultPortfolioData = {
  profile: {
    name: "Zerin Shaima Meem",
    title: "Software Engineer | AI & Research Enthusiast",
    location: "Omaha, Nebraska",
    phone: "+1 (402) 590-3433",
    email: "zerin.shaima.meem@gmail.com",
    linkedin: "https://linkedin.com/in/zerin-shaima-meem",
    github: "https://github.com/ZSMeem",
    scholar:
      "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AO4B3jupXJmInNIVZJ9E4PLNx1cYCo8RgxQ_qk7T3G8HSS521lKHsIaW7f1mIGp1zyQn9AUWuA7YJNuu5hvjGA&user=MEXMV40AAAAJ",
    avatar: "https://github.com/ZSMeem.png",
    summary:
      "Programmer with strong passion for Software Engineering and Artificial Intelligence. I enjoy building practical systems, solving algorithmic problems, and doing research that has real-world impact.",
    about:
      "I am a software engineer and graduate student who enjoys web development, AI, and systems research. My background in competitive programming strengthened my problem-solving skills, and my academic and industry experiences helped me grow as both an engineer and a researcher.",
  },
  skills: [
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "Python",
    "React.js",
    "Node.js",
    "Git/GitHub",
    "Postman",
    "Storybook",
    "Jest",
    "AWS",
  ],
  experience: [
    {
      role: "Graduate Research Assistant",
      org: "University of Nebraska Omaha",
      time: "Aug 2025 – Present",
      points: [
        "Investigating and implementing rate adaptation algorithms for wireless networking using NS-3.",
        "Designing AI-driven network congestion control algorithms for large-scale disaggregated storage systems.",
      ],
    },
    {
      role: "Software Engineer I",
      org: "Samsung R&D Institute Bangladesh",
      time: "Jan 2025 – Jul 2025",
      points: [
        "Worked on a web-based semantic knowledge graph modeling tool using Next.js.",
        "Built persistent real-time graph canvas interactions with drag-and-drop support.",
        "Used Jest, Playwright, and Storybook for testing and UI component isolation.",
      ],
    },
  ],
  education: [
    {
      degree: "Masters in Computer Science",
      school: "University of Nebraska Omaha",
      time: "Aug 2025 – Present",
      extra: "",
    },
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      school: "Chittagong University of Engineering and Technology",
      time: "Jan 2019 – May 2024",
      extra: "CGPA: 3.67/4.00",
    },
  ],
  achievements: [
    "Graduate Research and Creative Activity (GRACA) Scholarship, UNO, Summer 2026.",
    "Honorable Mention at the UNO C-Bytes Research Showcase.",
    "Solved 3000+ problems across online judges.",
    "3-time ICPC Regionalist.",
    "Global Rank 9th in ICPC AlgoQueen 2024 Final.",
  ],
  projects: [
    {
      title: "CareTrack-Connect: Health Tracking Platform",
      description:
        "A healthcare platform designed to improve communication between patients and healthcare providers, featuring pre and post appointment wellness tracking and data flow management.",
      tools: ["JavaScript", "Node.js", "Supabase", "SQL", "Vite"],
      repo: "https://github.com/UNO-CSCI4830/CareTrack-Connect",
    },
    {
      title: "Knowledge Graph-based Curriculum Planner",
      description:
        "Manually planning course prerequisites across a curriculum is tedious and error-prone. This project models courses as nodes and prerequisite relationships as directed edges in a Directed Acyclic Graph, applying cycle detection and topological sorting to compute valid course sequences and render interactive curriculum visualizations.",
      tools: ["Python", "NetworkX", "Matplotlib", "Graph Algorithms", "DAG"],
      repo: "https://github.com/ZSMeem/Knowledge-Graph-based-Curriculum-Planner-Using-Graph-Algorithms",
    },
    {
      title: "Portfolio Builder",
      description:
        "A full-stack platform that allows users to create professional portfolio websites with authentication, customizable sections, and public sharing links.",
      tools: ["React", "JavaScript", "Node.js", "PostgreSQL", "AWS RDS", "AWS Amplify"],
      repo: "https://github.com/ZSMeem/Portfolio-Builder",
    },
    {
      title: "CP CMS: Competitive Programming Community Management System",
      description:
        "A full-featured platform for contest management, real-time leaderboards, user ranking systems, and automated contest data scraping using Puppeteer and JSDOM parsing.",
      tools: ["Angular", "TypeScript", "Material UI", "Node.js", "MongoDB", "Puppeteer"],
      repo: "https://github.com/ZSMeem/cpcms",
    },
  ],
  research: [
    {
      title: "Adaptive Rate Control in Wireless Networks",
      description:
        "Traditional network rate control mechanisms depend on fixed rules that struggle with continuously changing conditions. This graduate research investigates AI-based methods to dynamically adjust communication parameters to improve throughput, latency, and reliability.",
      tools: ["NS-3", "Wireless Networking", "AI", "Rate Adaptation", "Python"],
      image: `${RESEARCH_IMAGE_BASE}/adaptive-rate-control.png`,
    },
    {
      title: "Reinforcement Learning for UAV Communication Networks",
      description:
        "UAV-based communication systems operate in highly dynamic environments where traditional optimization techniques often struggle. This graduate research explores how a Reinforcement Learning agent can learn optimal autonomous decisions for resource allocation in UAV-assisted networks.",
      tools: ["Reinforcement Learning", "UAV Networks", "MDP", "Python", "NS-3"],
      image: `${RESEARCH_IMAGE_BASE}/reinforcement-learning-uav.png`,
      repo: "https://github.com/ZSMeem/AdaptiveRateControl-for-UAV-using-DRL",
    },
    {
      title: "CSI-based Position Independent Gesture Recognition System",
      description:
        "Traditional gesture recognition systems rely on cameras and wearable sensors, raising privacy concerns. This research developed a privacy-preserving system using WiFi Channel State Information from ESP32 microcontrollers, investigating CNN, LSTM, and Vision Transformer models. Published at WIECON-ECE IEEE Conference 2024.",
      tools: ["Python", "LSTM", "CNN", "WiFi CSI", "IEEE"],
      image: `${RESEARCH_IMAGE_BASE}/csi-gesture-recognition.gif`,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=MEXMV40AAAAJ&citation_for_view=MEXMV40AAAAJ:u5HHmVD_uO8C",
    },
    {
      title: "Spot Light: Disaster Safety Assistance Mobile Application",
      description:
        "Existing infrastructure often fails during disasters, leaving people without access to emergency services. This project developed a digital platform featuring emergency communication, real-time alerts, location-based assistance, and shelter information. Published at ICCPCT 2024.",
      tools: ["Mobile Development", "Firebase", "Location Services"],
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=MEXMV40AAAAJ&citation_for_view=MEXMV40AAAAJ:u-x6o8ySG0sC",
    },
  ],
};

export function clonePortfolioData(data = defaultPortfolioData) {
  return JSON.parse(JSON.stringify(data));
}
