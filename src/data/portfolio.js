export const profile = {
  name: 'Md Tuhin Molla',
  role: 'AI/ML Engineer & Full-Stack Developer',
  tagline:
    'Building intelligent, scalable products with LLMs, RAG pipelines, and modern web stacks.',
  intro:
    'I design end-to-end AI products that blend strong UX with reliable backend systems—from medical chatbots to university project intelligence platforms.',
  focusAreas: [
    'LLM applications & RAG systems',
    'Deep learning & computer vision',
    'Product-focused full-stack engineering',
  ],
  highlights: [
    'FastAPI, Django, React, and Tailwind for production-ready apps',
    'Vector search with ChromaDB, LangChain orchestration, and Ollama LLMs',
    'Analytics-driven decision support for businesses and institutions',
  ],
}

export const filters = ['All', 'AI/ML', 'Web', 'Backend', 'Data & Analytics']

export const projects = [
  {
    title: 'MedicalChatbot',
    description:
      'AI-powered medical Q&A chatbot delivering grounded answers over indexed PDFs with secure auth and safety guardrails.',
    highlights: [
      'Built a RAG pipeline with Ollama, LangChain, and ChromaDB for trustworthy retrieval.',
      'Implemented JWT auth, conversation memory, and admin metrics for production readiness.',
    ],
    tech: [
      'FastAPI',
      'React',
      'TypeScript',
      'LangChain',
      'ChromaDB',
      'Ollama',
      'PostgreSQL',
    ],
    links: {
      github: 'https://github.com/tuhin1522/MedicalChatbot',
    },
    categories: ['AI/ML', 'Backend', 'Web'],
    ai: true,
  },
  {
    title: 'ProjectCanvas',
    description:
      'AI-driven university project showcase platform that transforms student work into searchable, recruiter-ready portfolios.',
    highlights: [
      'Automated documentation generation and tech-tag extraction with Gemini AI.',
      'Enabled project discovery with similarity detection and trend analytics.',
    ],
    tech: ['React', 'Tailwind CSS', 'Django', 'DRF', 'MySQL', 'Gemini AI'],
    links: {
      github: 'https://github.com/tuhin1522/ProjectCanvas',
    },
    categories: ['AI/ML', 'Backend', 'Web'],
    ai: true,
  },
  {
    title: 'Praachurjo',
    description:
      'AI-powered SME ecosystem for Smart Bangladesh with forecasting, pricing intelligence, and supplier recommendations.',
    highlights: [
      'Applied LSTM forecasting and reinforcement learning for demand and price optimization.',
      'Integrated AI assistants, sentiment analysis, and supplier matching workflows.',
    ],
    tech: [
      'React',
      'Tailwind CSS',
      'FastAPI',
      'Node.js',
      'MySQL',
      'LSTM',
      'Reinforcement Learning',
    ],
    links: {
      github: 'https://github.com/tuhin1522/Praachurjo',
    },
    categories: ['AI/ML', 'Backend', 'Web'],
    ai: true,
  },
  {
    title: 'StoryPathAI',
    description:
      'Interactive story generation app that turns prompts into choose-your-own-adventure experiences.',
    highlights: [
      'Built a FastAPI service to orchestrate story generation jobs and status polling.',
      'Delivered a clean React UI for story creation and immersive reading.',
    ],
    tech: ['FastAPI', 'React', 'Vite'],
    links: {
      github: 'https://github.com/tuhin1522/StoryPathAI',
    },
    categories: ['AI/ML', 'Web'],
    ai: true,
  },
  {
    title: 'faceRecognition_research',
    description:
      'Deep learning research focused on boosting face recognition accuracy, robustness, and real-world reliability.',
    highlights: [
      'Experimented with modern embeddings and evaluation strategies for higher precision.',
      'Optimized model performance for varied lighting and pose conditions.',
    ],
    tech: ['Python', 'Deep Learning', 'Computer Vision'],
    links: {
      github: 'https://github.com/tuhin1522/faceRecognition_research',
    },
    categories: ['AI/ML'],
    ai: true,
  },
  {
    title: 'SQL Retail Sales Analysis',
    description:
      'End-to-end SQL analytics project that uncovers revenue trends, customer segments, and sales drivers.',
    highlights: [
      'Designed the schema, cleaned data, and built reusable analytics queries.',
      'Delivered actionable business insights across products and customer cohorts.',
    ],
    tech: ['PostgreSQL', 'SQL', 'Data Analysis'],
    links: {
      github: 'https://github.com/tuhin1522/SQL-Retail-Sales-Analysis',
    },
    categories: ['Data & Analytics'],
    ai: false,
  },
  {
    title: 'NagarikDrishti',
    description:
      'AI-powered urban issue reporting and response system for faster civic resolution.',
    highlights: [
      'Streamlines citizen issue intake with AI-assisted prioritization.',
      'Improves municipal response visibility through structured workflows.',
    ],
    tech: ['AI', 'Civic Tech', 'Service Design'],
    links: {
      github: 'https://github.com/tuhin1522/NagarikDrishti',
    },
    categories: ['AI/ML', 'Web'],
    ai: true,
  },
]

export const experienceHighlights = [
  {
    title: 'RAG & LLM Product Builder',
    description:
      'Delivered production-ready RAG chatbots with authentication, memory, and safety validation for reliable AI experiences.',
  },
  {
    title: 'AI-Powered Knowledge Platforms',
    description:
      'Designed AI documentation and discovery workflows that turn scattered academic work into searchable, recruiter-ready assets.',
  },
  {
    title: 'Decision Intelligence for SMEs',
    description:
      'Applied forecasting, optimization, and recommendation models to unlock data-driven growth for small businesses.',
  },
]

export const skillGroups = [
  {
    title: 'AI & Machine Learning',
    items: [
      'LLMs & RAG pipelines',
      'LangChain orchestration',
      'ChromaDB vector search',
      'Deep learning & CV',
      'Forecasting & optimization',
    ],
  },
  {
    title: 'Backend Engineering',
    items: ['FastAPI', 'Django / DRF', 'Node.js', 'PostgreSQL', 'MySQL', 'REST APIs'],
  },
  {
    title: 'Frontend & UX',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    title: 'Data & Analytics',
    items: ['SQL analytics', 'Schema design', 'Business insights', 'Data cleaning'],
  },
]

export const interests = ['Generative AI', 'Applied ML', 'Product design', 'Civic tech', 'Data storytelling']

export const contact = {
  email: 'mdtuhin1499@gmail.com',
  github: 'https://github.com/tuhin1522',
  linkedin: 'https://www.linkedin.com/in/md-tuhin-molla15/',
}
