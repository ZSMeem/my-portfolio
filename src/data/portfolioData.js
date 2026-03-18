export const defaultPortfolioData = {
  profile: {
    name: "Zerin Shaima Meem",
    title: "Software Engineer | AI & Research Enthusiast",
    location: "Omaha, Nebraska",
    phone: "+1 (402) 590-3433",
    email: "zerin.shaima.meem@gmail.com",
    linkedin: "https://linkedin.com/in/zerin-shaima-meem",
    github: "https://github.com/ZSMeem",
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
      title: "CSI-based Position Independent Gesture Recognition System",
      description:
        "An LSTM-based gesture recognition system using WiFi CSI data, published in IEEE WIECON-ECE 2024.",
    },
    {
      title: "CUET Competitive Programming Community Management System",
      description:
        "A platform for real-time leaderboard tracking, contest monitoring, and performance visualization for competitive programmers.",
    },
  ],
};

export function clonePortfolioData(data = defaultPortfolioData) {
  return JSON.parse(JSON.stringify(data));
}
