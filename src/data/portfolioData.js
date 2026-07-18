// ============================================================
// portfolioData.js — Centralized configuration for Kyathi Bhavya's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Neeli Kyathi Bhavya",
  firstName: "Kyathi",
  brandName: "Neeli Kyathi Bhavya",
  title: "AI/ML Engineer & Data Science Student",
  location: "Andhra Pradesh, India",
  phone: "+91 7569263719",
  emails: {
    primary: "kyathi568@gmail.com",
    secondary: "kyathi568@gmail.com",
  },
  summary:
    "Enthusiastic CSE (Data Science) student with hands-on experience building production-grade Machine Learning and AI systems. Passionate about turning real-world data into intelligent solutions — from delivery delay prediction to multi-agent hiring pipelines and secure RAG applications.",
  resumeUrl: "/Kyathi_Bhavya_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/kyathi-hub",
  linkedin: "https://www.linkedin.com/in/kyathi-bhavya-0b27b1329/",
  instagram: "https://instagram.com/",
};

export const heroContent = {
  greeting: "Hi, I'm Neeli Kyathi Bhavya",
  titleHighlight: "AI/ML Engineer & Data Science Student",
  subtitle:
    "I build intelligent ML systems, AI-powered applications, and data-driven solutions using Python, Scikit-learn, and modern AI tools.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Kyathi_Bhavya_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Neeli Kyathi Bhavya</span>, a CSE (Data Science) student from Andhra Pradesh, India, passionate about building intelligent ML systems and AI-powered applications that solve real-world problems.`,
  techStack: ["Python", "Machine Learning", "Deep Learning"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming & Libraries",
      skills: [
        { name: "Python", level: 92 },
        { name: "NumPy", level: 88 },
        { name: "Pandas", level: 90 },
        { name: "Scikit-learn", level: 88 },
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 78 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 83 }
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Supervised Learning", level: 90 },
        { name: "Unsupervised Learning", level: 82 },
        { name: "Classification", level: 92 },
        { name: "Regression", level: 88 },
        { name: "XGBoost", level: 85 },
        { name: "Random Forest", level: 88 }
      ]
    },
    {
      title: "Data Handling",
      skills: [
        { name: "Data Preprocessing", level: 92 },
        { name: "Feature Engineering", level: 88 },
        { name: "Label Encoding", level: 85 },
        { name: "Data Visualization", level: 87 }
      ]
    },
    {
      title: "AI & NLP",
      skills: [
        { name: "RAG Pipelines", level: 82 },
        { name: "LLM Integration", level: 80 },
        { name: "ChromaDB", level: 78 },
        { name: "Sentence Transformers", level: 80 },
        { name: "Multi-Agent Systems", level: 78 }
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "FastAPI", level: 80 },
        { name: "Streamlit", level: 88 },
        { name: "Git & GitHub", level: 85 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 92 }
      ]
    },
    {
      title: "Computer Science Concepts",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 83 },
        { name: "DBMS", level: 82 },
        { name: "SQL", level: 80 }
      ]
    }
  ]
};

// Brand New Content Creation Data — repurposed as AI/ML Focus section
export const contentCreation = {
  badge: "My Approach",
  heading: "How I Build AI-Powered Solutions",
  description: "I follow a structured, data-driven approach to design and deploy intelligent systems that deliver real-world impact.",
  categories: [
    {
      title: "Data Engineering",
      description: "Collecting, cleaning, and feature-engineering raw datasets to build solid foundations for ML models.",
      stats: "100K+ Records Processed",
      icon: "📊"
    },
    {
      title: "Model Development",
      description: "Training and evaluating ML models — from classical algorithms to deep learning and ensemble methods.",
      stats: "90%+ Model Accuracy",
      icon: "🧠"
    },
    {
      title: "AI Applications",
      description: "Building end-to-end AI pipelines with RAG, LLMs, and multi-agent systems for intelligent automation.",
      stats: "4 AI Projects Shipped",
      icon: "🤖"
    },
    {
      title: "Interactive Dashboards",
      description: "Delivering insights through Streamlit and Plotly dashboards with real-time predictions and visualizations.",
      stats: "Production-Ready UIs",
      icon: "⚡"
    }
  ]
};

// Brand New Leadership Data
export const leadershipList = [
  {
    title: "IBM SkillsBuild — AI Fundamentals",
    description: "Completed IBM's official AI Fundamentals certification, gaining structured knowledge in machine learning concepts, neural networks, and responsible AI practices.",
    role: "Certified Learner",
    badge: "Certification"
  },
  {
    title: "ExcelR — Cracking Coding Interviews",
    description: "Completed intensive coding interview preparation covering data structures, algorithms, and problem-solving strategies to build strong engineering fundamentals.",
    role: "Certified Learner",
    badge: "Certification"
  },
  {
    title: "Academic Excellence — CGPA 8.18",
    description: "Maintaining a strong academic record in B.Tech CSE (Data Science) while simultaneously building and shipping multiple ML and AI projects.",
    role: "CSE Data Science Student",
    badge: "Academic"
  }
];

// Brand New Internships Data
export const internshipsList = [
  {
    organization: "Rise Krishna Sai Prakasam Group of Institutions",
    role: "B.Tech CSE (Data Science) Student",
    duration: "2023 – Present",
    skills: ["Machine Learning", "Data Science", "AI Systems", "Python"],
    tech: ["Python", "Scikit-learn", "TensorFlow", "Streamlit"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex ML problems into clean, logical, and modular pipelines." },
  { name: "Analytical Thinking", icon: "🔍", desc: "Extracting meaningful patterns from raw data and translating insights into action." },
  { name: "Continuous Learning", icon: "📚", desc: "Staying current with ML research, AI tools, and emerging frameworks through self-study." },
  { name: "Attention to Detail", icon: "🎯", desc: "Ensuring data quality, model integrity, and production-readiness across every project." },
  { name: "Communication", icon: "💬", desc: "Presenting technical findings clearly through dashboards, documentation, and reports." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working effectively in academic and project teams to deliver shared goals on time." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly picking up new tools like RAG pipelines, LangGraph, and vector databases." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech academics with shipping multiple production-grade AI projects." }
];

export const projects = [
  {
    id: "amazon-delay",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Amazon Delivery Delay Predictor",
    description:
      "A production-style ML system built on 100K+ real Olist e-commerce orders that predicts delivery delays before they happen. Engineered 30+ features including GPS-based delivery distance, carrier lag, weather, and driver history. XGBoost classifier achieves 0.91 ROC-AUC with SHAP explainability surfacing the top reasons behind every prediction. Two-page Streamlit dashboard with live KPIs, risk charts, and real-time prediction with operational recommendations.",
    techTags: ["Python", "XGBoost", "SHAP", "Streamlit", "Plotly", "Scikit-learn", "Pandas"],
    links: {
      github: "https://github.com/kyathi-hub",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "rag-contract",
    number: "02",
    badge: null,
    title: "Secure RAG Contract Risk Analyzer",
    description:
      "An AI-powered legal document assistant that lets users upload PDF contracts and ask natural language questions — with answers grounded strictly in the uploaded document. Full RAG pipeline: PyMuPDF parsing → chunking → sentence-transformer embeddings → ChromaDB retrieval → Groq LLM. Layered security guardrails block prompt injection pre-retrieval and verify answer grounding post-generation. Includes automated clause risk scoring and a live analytics dashboard.",
    techTags: ["Python", "FastAPI", "Streamlit", "ChromaDB", "Groq LLM", "PyMuPDF", "Docker"],
    links: {
      github: "https://github.com/kyathi-hub",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "hiring-pipeline",
    number: "03",
    badge: null,
    title: "AI Hiring Pipeline Simulator",
    description:
      "A multi-agent AI system that simulates the complete corporate hiring process end-to-end. 10 specialized agents — Resume Parser, JD Analyzer, ATS Evaluator, Resume Optimizer, HR Recruiter, Technical Interviewer, Hiring Manager, Recruiter Decision, Hiring Committee, and Interview Coach — run in sequence. A weighted voting system produces a final Hire/No-Hire decision with confidence score and a personalized interview prep plan.",
    techTags: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "ChromaDB", "OpenAI", "Docker"],
    links: {
      github: "https://github.com/kyathi-hub",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "theft-detection",
    number: "04",
    badge: null,
    title: "Smart Grid Electricity Theft Detection",
    description:
      "Tackled the $96B global Non-Technical Loss problem by building an end-to-end ML pipeline for automated electricity theft detection. Engineered a 560K+ instance benchmark dataset using real OEDI energy data with 6 mathematically modeled theft behaviors injected via a custom Python theft-generator. Benchmarked 5 ML models with Random Forest achieving 94.71% accuracy — outperforming others by 10%+. Results delivered through an interactive Streamlit dashboard.",
    techTags: ["Python", "Scikit-learn", "Random Forest", "Streamlit", "Pandas", "NumPy"],
    links: {
      github: "https://github.com/kyathi-hub",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      icon: "🤖",
    },
    {
      name: "Cracking Coding Interviews",
      issuer: "ExcelR",
      icon: "💻",
    },
  ],
  viewAllUrl:
    "https://drive.google.com/drive/folders/1HjHtp4yi6_3QnQ70_1jPyX-yQHC_ppjD",
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering (Data Science)",
  institution: "Rise Krishna Sai Prakasam Group of Institutions",
  cgpa: "8.18",
  graduation: "2027",
  twelfth: "12th – Chaitanya Junior College (2021–2023)",
  tenth: "10th – Andhra Pradesh Secondary Education Board (2020–2021)",
};

export const footerContent = {
  taglines: [
    "AI/ML Engineering & Data Science",
    "Python · Machine Learning · Deep Learning",
    "Intelligent Systems & AI Applications",
  ],
  credential: "B.Tech CSE (Data Science) · CGPA 8.18",
  copyright: `© ${new Date().getFullYear()} Neeli Kyathi Bhavya | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
