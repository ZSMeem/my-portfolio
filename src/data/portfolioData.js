const RESEARCH_IMAGE_BASE = `${import.meta.env.BASE_URL}images/research`;
const PROJECT_IMAGE_BASE = `${import.meta.env.BASE_URL}images/projects`;
const ACHIEVEMENT_IMAGE_BASE = `${import.meta.env.BASE_URL}images/achievements`;

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
      "Software engineer and researcher with a strong background in competitive programming, software engineering, and AI/networking research. I enjoy building practical systems, solving algorithmic problems, and conducting research that has real-world impact. Currently pursuing a Master's in Computer Science at UNO, where my research focuses on the intersection of AI and networking.",
    about:
      "My journey spans three interconnected areas. I've built algorithmic problem-solving skills through competitive programming (3000+ problems, three-time ICPC Regionalist), gained software engineering experience through industry roles at Samsung R&D and full-stack projects, and pursued research through two international conference publications and graduate-level AI/networking work as a research assistant at UNO. I am passionate about designing intelligent systems that combine software engineering and artificial intelligence to solve real-world problems.",
  },
  skills: [
    {
      category: "Programming Languages",
      items: [
        "C++",
        "Python",
        "JavaScript",
        "TypeScript",
        "C",
        "Java",
        "SQL",
        "HTML",
        "CSS",
        "LaTeX",
        "Markdown",
      ],
    },
    {
      category: "Frontend Development",
      items: [
        "React",
        "Next.js",
        "Angular",
        "Material UI",
        "Angular Material",
        "CSS",
        "Tailwind",
        "Bootstrap",
        // "Syncfusion",
        // "React Flow",
        // "responsive UI development",
      ],
    },
    {
      category: "Backend Development",
      items: [
        "Node.js",
        "Express.js",
        "Django",
        "Firebase",
        "REST APIs",
        // "authentication workflows",
      ],
    },
    {
      category: "Databases",
      items: [
        "PostgreSQL",
        "AWS RDS",
        "Supabase",
        "MongoDB",
        "MySQL",
        // "Firebase Realtime Database/Firestore",
      ],
    },
    {
      category: "Machine Learning",
      items: [
        "TensorFlow",
        "Keras",
        "PyTorch",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "CNNs",
        "LSTMs",
        "Autoencoders",
        "GANs",
        "Grad-CAM",
        "CBAM",
        "reinforcement learning concepts",
      ],
    },
    {
      category: "Networking and Simulation",
      items: [
        "ns-3",
        // "HPCC simulator",
        "DCTCP",
        "DCQCN",
        "TIMELY",
        "HPCC",
        // "HPCC-PINT",
        "QCN",
        "RoCEv2",
        "RDMA",
        "ECN",
        "PFC",
        "TCP",
        // "queue analysis",
        // "FCT analysis",
      ],
    },
    {
      category: "Wireless and Sensing",
      items: [
        "WiFi CSI",
        "ESP-32",
        "CSI Toolkit",
        // "SNR/BER/packet-loss analysis",
        "adaptive rate control",
        // "Minstrel/Minstrel-HT concepts",
      ],
    },
    {
      category: "Testing and Tools",
      items: [
        "Jest",
        "Playwright",
        "Storybook",
        "Postman",
        "Git",
        "GitHub",
        "JIRA",
        // "Docker",
        "Linux",
        // "shell scripting",
        "Jupyter Notebook",
        "VS Code",
        "CLion",
      ],
    },
    {
      category: "Cloud and DevOps",
      items: [
        "AWS EC2",
        "AWS S3",
        "AWS RDS",
        "AWS IAM",
        "AWS Amplify",
        "Docker",
        "basic ECR/ECS exposure",
      ],
    },
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
    {
      category: "Honors and Awards",
      items: [
        "Graduate Research and Creative Activity (GRACA) Scholarship, University of Nebraska at Omaha, $5,000, Summer 2026.",
        'Honorable Mention, UNO C-BYTES Research Showcase, poster titled "A Comparative Analysis of Congestion Control Algorithms in Large-Scale Datacenters," Dec. 2025.',
        "ICPC AlgoQueen 2024 Finalist, Global Rank 9, Top 1%.",
        "Three-time ICPC Dhaka Regionalist.",
        "1st place among 132 participants, CUET Reception Programming Contest, 2019.",
      ],
    },
    {
      category: "Competitive Programming",
      items: [
        "Solved 3000+ problems across online judges.",
        "Codeforces Expert; maximum rating 1607.",
        "CodeChef 3-star; maximum rating 1788.",
        "AtCoder rating 957.",
        "Mentored junior programmers in algorithmic problem solving, graph algorithms, recursion, backtracking, dynamic programming, and contest preparation.",
      ],
      image: `${ACHIEVEMENT_IMAGE_BASE}/481788654_28741316665512686_6111080548469494225_n.jpg`,
    },
    {
      category: "Posters and Presentations",
      items: [
        '"A Comparative Analysis of Congestion Control Algorithms in Large-Scale Datacenters," UNO C-BYTES Research Showcase, Honorable Mention, Dec. 2025.',
        '"A CSI-Based Position Independent Gesture Recognition System Using Deep Learning," IEEE WIECON-ECE 2024.',
        '"Spot Light: Disaster Safety Assistance Mobile Application," ICCPCT 2024.',
      ],
      image: `${ACHIEVEMENT_IMAGE_BASE}/1764885692451.jpeg`,
    },
    {
      category: "Academic and Professional Service",
      items: [
        "Programming mentor, CUET Computer Club.",
        "Secretary, CUET Computer Club.",
        "Student community contributor, Bangladesh Student Association, University of Nebraska at Omaha.",
        "Assisted with student activities, event planning, and community-facing materials.",
      ],
      image: `${ACHIEVEMENT_IMAGE_BASE}/1660806653066.jpeg`,
    },
  ],
  developmentProjects: [
    {
      title: "CareTrack-Connect: Health Tracking Platform",
      description:
        "A healthcare platform designed to improve communication between patients and healthcare providers, featuring pre and post appointment wellness tracking and data flow management.",
      tools: ["JavaScript", "Node.js", "Supabase", "SQL", "Vite"],
      repo: "https://github.com/UNO-CSCI4830/CareTrack-Connect",
      image: `${PROJECT_IMAGE_BASE}/healthcare.png`,
    },
    {
      title: "Portfolio Builder",
      description:
        "A full-stack platform that allows users to create professional portfolio websites with authentication, customizable sections, and public sharing links.",
      tools: ["React", "JavaScript", "Node.js", "PostgreSQL", "AWS RDS", "AWS Amplify"],
      repo: "https://github.com/ZSMeem/Portfolio-Builder",
      image: `${PROJECT_IMAGE_BASE}/portfolio.jpg`,
    },
    {
      title: "CP CMS: Competitive Programming Community Management System",
      description:
        "A full-featured platform for contest management, real-time leaderboards, user ranking systems, and automated contest data scraping using Puppeteer and JSDOM parsing.",
      tools: ["Angular", "TypeScript", "Material UI", "Node.js", "MongoDB", "Puppeteer"],
      repo: "https://github.com/ZSMeem/cpcms",
    },
  ],
  aiProjects: [
    {
      title: "Knowledge Graph-based Curriculum Planner",
      description:
        "Manually planning course prerequisites across a curriculum is tedious and error-prone. This project models courses as nodes and prerequisite relationships as directed edges in a Directed Acyclic Graph, applying cycle detection and topological sorting to compute valid course sequences and render interactive curriculum visualizations.",
      tools: ["Python", "NetworkX", "Matplotlib", "Graph Algorithms", "DAG"],
      repo: "https://github.com/ZSMeem/Knowledge-Graph-based-Curriculum-Planner-Using-Graph-Algorithms",
      image: `${PROJECT_IMAGE_BASE}/KG.png`,
    },
    {
      title: "Unsupervised Anomaly Detection on Network Traffic using Autoencoders",
      description:
        "Labeled attack data is scarce and constantly goes stale as new attack types emerge. This project trains a TensorFlow/Keras autoencoder exclusively on normal network traffic from the NSL-KDD dataset, flagging anomalies by reconstruction error and achieving 0.956 ROC-AUC and 86% accuracy without ever seeing attack examples during training.",
      tools: ["Python", "TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy"],
      repo: "https://github.com/ZSMeem/Unsupervised-Anomaly-Detection-on-Network-Traffic-using-Autoencoders-on-the-NSL-KDD-Dataset",
      image: `${PROJECT_IMAGE_BASE}/autoencoder.png`,
    },
    {
      title: "Comparative Analysis of Deep Learning Models for IMDB Sentiment Classification",
      description:
        "Choosing the right model for sentiment classification isn't always about deep learning being \"better.\" This project benchmarks Logistic Regression with TF-IDF against LSTM, Text CNN, and DistilBERT on IMDB movie reviews, finding that Logistic Regression achieved the strongest F1-score (0.871) while training 5-10x faster than the neural models.",
      tools: ["Python", "TensorFlow", "Keras", "scikit-learn", "Hugging Face", "Pandas"],
      repo: "https://github.com/ZSMeem/Comparative-Analysis-of-Deep-Learning-Models-for-IMDB-Sentiment-Classification",
      image: `${PROJECT_IMAGE_BASE}/sentimentsnalysis.jpg`,
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
