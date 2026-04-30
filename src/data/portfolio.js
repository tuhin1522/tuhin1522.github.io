export const profile = {
  name: 'Md Tuhin Molla',
  shortName: 'Tuhin',
  role: 'Software Engineer & AI Engineer',
  roles: ['Software Engineer', 'Full-Stack AI/ML Engineer'],
  tagline: 'Building intelligent, scalable products with LLMs, RAG pipelines, and modern web stacks.',
  intro: 'I design end-to-end AI products that blend strong UX with reliable backend systems from medical chatbots to intelligent story-generation platforms.',
  bio: `I'm a passionate Software and AI Engineer with a strong foundation in building production-ready applications. I specialize in developing LLM-powered tools, RAG pipelines, and full-stack web platforms that solve real-world problems.\n\nMy work spans from ideation—understanding user needs and business constraints—all the way to deployment and iteration. I enjoy working at the intersection of AI and product, turning cutting-edge research into usable, impactful software.\n\nWhether it's a medical Q&A chatbot, a story generation engine, or a civic-tech platform, I focus on reliability, clarity, and measurable impact.`,
  focusAreas: [
    'LLM applications & RAG systems',
    'Deep learning & computer vision',
    'Product-focused full-stack engineering',
    'Civic tech & social impact',
  ],
  highlights: [
    'FastAPI, Django, React, and Tailwind for production-ready apps',
    'Vector search with ChromaDB, LangChain orchestration, and Ollama LLMs',
    'Analytics-driven decision support for businesses and institutions',
    'Collaborative open-source contributor with cross-team experience',
  ],
  resumeUrl: '/resume.pdf',
}

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Jatiya Kabi Kazi Nazrul Islam University',
    location: 'Trishal, Mymensingh',
    period: '2022 – 2026',
    details: 'Focus on Machine Learning, Software Engineering, and Algorithms.',
  },
]

export const experience = [
  {
    title: 'Research Assistant',
    company: 'Jatiya Kabi Kazi Nazrul Islam University',
    period: 'July 2025 – Present',
    type: 'Research',
    location: 'Trishal, Mymensingh',
    bullets: [
      'Developed a real-time face recognition and head pose estimation system using FaceNet embeddings and cosine similarity, improving identity verification accuracy and inference performance.',
      'Enhanced a 6DoF head pose estimation pipeline by integrating deformable attention and transfer learning with ResNet, improving feature representation and pose prediction stability.',
      'Designed a scalable PyTorch-based pipeline for 3D face geometry modeling and facial landmark detection, enabling accurate and efficient head pose estimation.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Machine Learning & Deep Learning',
    icon: '🤖',
    items: ['Regression', 'Ensemble Learning', 'Feature Engineering', 'Naive Bayes', 'Unsupervised Learning', 'Reinforcement Learning', 'CNNs', 'RNNs', 'Transformers', 'Computer Vision'],
  },
  {
    title: 'Generative AI & LLMs',
    icon: '🤖',
    items: ['Prompt Engineering', 'LLM Fine-Tuning', 'RAG', 'Vector Databases', 'Hugging Face', 'Agents'],
  },
  {
    title: 'Backend Engineering & Libraries',
    icon: '⚙️',
    items: ['FastAPI', 'PostgreSQL', 'MySQL', 'ChromaDB', 'OpenCV', 'PyTorch', 'Numpy', 'REST APIs', 'JWT Auth', 'Pandas', 'Matplotlib', 'Scikit-learn', 'LangChain', 'LangGraph'],
  },
  {
    title: 'Frontend & UX',
    icon: '🎨',
    items: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    items: ['Git & GitHub', 'Docker', 'Linux', 'CI/CD', 'n8n', 'DVC', 'MLflow'],
  },
]

export const interests = ['Generative AI', 'Applied ML', 'Product Design', 'Civic Tech', 'Data Storytelling', 'Open Source']

export const featuredProjects = [
  {
    title: 'MedicalChatbot',
    description: 'An AI-powered medical Q&A chatbot delivering grounded, trustworthy answers sourced from indexed medical PDFs. Solves the challenge of reliable medical information retrieval through a secure, production-ready system with safety guardrails.',
    highlights: [
      'Built a full RAG pipeline with Ollama, LangChain, and ChromaDB for reliable retrieval.',
      'Implemented JWT auth, conversation memory, and an admin metrics dashboard.',
      'Applied content safety guardrails to prevent hallucination and misinformation.',
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'LangChain', 'ChromaDB', 'Ollama', 'PostgreSQL'],
    links: { github: 'https://github.com/tuhin1522/MedicalChatbot' },
    categories: ['AI/ML', 'Backend', 'Web'],
    ai: true,
  },
  {
    title: 'StoryPathAI',
    description: 'An interactive story generation platform that transforms user prompts into rich, branching choose-your-own-adventure narratives. Leverages LLMs to create coherent, immersive storytelling experiences.',
    highlights: [
      'Orchestrated async story generation jobs with FastAPI and background workers.',
      'Delivered a clean, immersive React UI for interactive story creation and reading.',
      'Designed a branching narrative engine that maintains story coherence across choices.',
    ],
    tech: ['FastAPI', 'React', 'Vite', 'Python', 'LLM Integration'],
    links: { github: 'https://github.com/tuhin1522/StoryPathAI' },
    categories: ['AI/ML', 'Web'],
    ai: true,
  },
  {
    title: 'Bangla Political Memes Classification',
    description: 'A machine learning research project addressing misinformation in Bangladeshi social media by automatically classifying politically sensitive memes using multimodal NLP and computer vision techniques.',
    highlights: [
      'Applied multimodal ML combining NLP and computer vision for meme classification.',
      'Curated and annotated a dataset of Bangla political memes for model training.',
      'Achieved high accuracy on a challenging low-resource language classification task.',
    ],
    tech: ['Python', 'NLP', 'Computer Vision', 'Transformers', 'Deep Learning'],
    links: { github: 'https://github.com/tam1mBD/bangla-political-memes-classification' },
    collaborator: 'tam1mBD',
    categories: ['AI/ML', 'Data & Analytics'],
    ai: true,
  },
  {
    title: 'Biometric Attendance System',
    description: 'A smart biometric-based attendance management system replacing manual tracking with face recognition. Designed for educational institutions and workplaces to ensure accurate, tamper-proof attendance records.',
    highlights: [
      'Integrated face recognition for automated, contactless attendance logging.',
      'Built a real-time dashboard for tracking attendance and generating reports.',
      'Designed for scalability across departments with multiple recognition modes.',
    ],
    tech: ['Python', 'Face Recognition', 'OpenCV', 'Flask', 'SQLite'],
    links: { github: 'https://github.com/avishek-sarkar/Biometric-Attendance-System' },
    collaborator: 'avishek-sarkar',
    categories: ['AI/ML', 'Backend'],
    ai: true,
  },
]

export const otherProjects = [
  {
    title: 'ProjectCanvas',
    description: 'AI-driven university project showcase platform that transforms student work into searchable, recruiter-ready portfolios with automated documentation generation.',
    tech: ['React', 'Django', 'MySQL', 'Gemini AI'],
    links: { github: 'https://github.com/tuhin1522/ProjectCanvas' },
  },
  {
    title: 'Praachurjo',
    description: 'AI-powered SME ecosystem for Smart Bangladesh with LSTM demand forecasting, pricing intelligence, and supplier recommendations.',
    tech: ['React', 'FastAPI', 'Node.js', 'MySQL', 'LSTM'],
    links: { github: 'https://github.com/tuhin1522/Praachurjo' },
  },
  {
    title: 'NagarikDrishti',
    description: 'AI-powered urban issue reporting and municipal response system for faster civic resolution with AI-assisted prioritization.',
    tech: ['AI', 'Civic Tech', 'React', 'FastAPI'],
    links: { github: 'https://github.com/tuhin1522/NagarikDrishti' },
  },
  {
    title: 'SQL Retail Sales Analysis',
    description: 'End-to-end SQL analytics project uncovering revenue trends, customer segments, and actionable sales drivers for retail businesses.',
    tech: ['PostgreSQL', 'SQL', 'Data Analysis'],
    links: { github: 'https://github.com/tuhin1522/SQL-Retail-Sales-Analysis' },
  },
  {
    title: 'faceRecognition Research',
    description: 'Deep learning research on face recognition accuracy and robustness under varied lighting, pose, and real-world conditions.',
    tech: ['Python', 'Deep Learning', 'Computer Vision'],
    links: { github: 'https://github.com/tuhin1522/faceRecognition_research' },
  },
]

export const blogs = [
  {
    id: 'rag-chatbot-lessons',
    title: 'Building a RAG Chatbot from Scratch: Lessons Learned',
    excerpt: 'After shipping a production RAG chatbot for medical Q&A, here are the architectural decisions, pitfalls, and practical patterns I wish I knew earlier—covering chunking strategies, vector store tuning, and safety guardrails.',
    date: '2025-04-10',
    category: 'AI/ML',
    readTime: '8 min read',
    tags: ['RAG', 'LangChain', 'FastAPI', 'LLM'],
    featured: true,
  },
  {
    id: 'vector-databases-chromadb',
    title: 'Vector Databases Explained: ChromaDB and Beyond',
    excerpt: 'Vector databases are the backbone of modern AI retrieval systems. This deep dive explores how ChromaDB works, when to use it vs. Pinecone or Weaviate, and how to optimize embedding similarity search for production.',
    date: '2025-03-22',
    category: 'AI/ML',
    readTime: '6 min read',
    tags: ['ChromaDB', 'Vector Search', 'Embeddings'],
    featured: false,
  },
  {
    id: 'fastapi-production-patterns',
    title: 'FastAPI in Production: Patterns for Scalable AI Backends',
    excerpt: "FastAPI is more than a quick API framework—it's a powerful production tool when used right. Explore async handlers, dependency injection, background tasks for LLM jobs, and authentication patterns.",
    date: '2025-02-15',
    category: 'Backend',
    readTime: '7 min read',
    tags: ['FastAPI', 'Python', 'Backend', 'API Design'],
    featured: false,
  },
  {
    id: 'ai-product-thinking',
    title: 'AI Product Thinking: From Research to Deployable Features',
    excerpt: 'The gap between an AI demo and a production feature is huge. Explore how to define success metrics, handle edge cases, build feedback loops, and ship AI responsibly.',
    date: '2025-01-28',
    category: 'Product',
    readTime: '5 min read',
    tags: ['AI Product', 'Product Design', 'MLOps'],
    featured: true,
  },
]

export const contact = {
  email: 'mdtuhin1499@gmail.com',
  github: 'https://github.com/tuhin1522',
  linkedin: 'https://www.linkedin.com/in/md-tuhin-molla15/',
  location: 'Dhaka, Bangladesh',
  availability: 'Open to full-time roles in software engineering and AI.',
}

export const achievements = [
  {
    year: '2025',
    rank: 'Top 29% (44/151)',
    event: 'National Datathon CUET CSE FEST 2025',
    icon: '📊'
  },
  {
    year: '2025',
    rank: 'Top 17% (8/47)',
    event: 'TechMind Hackathon 2025 at JKKNIU',
    icon: '💡'
  },
  {
    year: '2025',
    rank: 'Top 9% (5/55)',
    event: 'UIU CSE FEST 2025 (LFR)',
    icon: '🤖'
  },
  {
    year: '2024',
    rank: 'Top 14% (50/500)',
    event: 'NASA Space Apps Challenge 2024',
    icon: '🚀'
  },
  {
    year: '2024',
    rank: 'Top 11% (3/27)',
    event: 'Intra JKKNIU programming contest 2024',
    icon: '💻'
  },
  {
    year: '2023',
    rank: 'Top 7% (4/51)',
    event: 'Hult Prize on Campus Program at JKKNIU',
    icon: '🌍'
  },
  {
    year: '2023',
    rank: 'Top 12% (6/48)',
    event: 'Robo Tech Olympiad 2023 (LFR)',
    icon: '⚙️'
  },
  {
    year: '',
    rank: '550+ DSA solved',
    event: 'Competitive Programming',
    icon: '🏆'
  }
]


// Legacy exports
export const filters = ['All', 'AI/ML', 'Web', 'Backend', 'Data & Analytics']
export const projects = [...featuredProjects, ...otherProjects]
export const experienceHighlights = experience
