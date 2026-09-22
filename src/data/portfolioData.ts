import { Experience, Project, Publication, EducationItem, RecognitionItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "Dave Maxuell",
  title: "Undergraduate Student",
  tagline: "AI research · LLM, NLP, VLM & RAG",
  status: "Available for Research & Roles",
  location: "Busan, South Korea",
  email: "davemaxuell@gmail.com",
  phone: "(+82) 10-9728-0503",
  github: "https://github.com/davemaxuell",
  linkedin: "https://www.linkedin.com/in/dave-maxuell-b39185224/",
  scholar: "https://scholar.google.com/citations?user=DpN3XPYAAAAJ&hl=en",
  aboutIntro: [
    "I'm an undergraduate student based in Busan, South Korea, actively researching AI. Messy documents and tricky questions are my kind of problem. My current focus is large language models (LLMs), natural language processing (NLP), vision-language models (VLMs), and retrieval-augmented generation (RAG).",
    "I conduct research at Busan University of Foreign Studies and currently intern at UNIST's Interactive Multimodal Machine Learning Lab. I take ideas from experiments to working systems, then test how well they hold up. My work has earned Excellent Paper Awards at HCLT and KIISE.",
    "I want to pursue AI research more deeply through graduate study. Beyond my current focus, I'm interested in foundation models, vision-language-action (VLA), vision-language navigation (VLN), reinforcement learning, and post-training. I'm keen to keep learning, ask better questions, and contribute to research with practical value."
  ]
};

// Short, authored thoughts from Dave; opinions stay in the first person.
export const petThoughts = [
  "I learn by building. The bugs are bonus lessons.",
  "I think in pipelines. Even my side quests have workflows.",
  "LLMs, NLP, VLMs, RAG. I brought the alphabet soup.",
  "Better training, better rewards. Models need good study habits, too.",
  "Post-training has my attention. Apparently, models get homework too.",
  "Reinforcement learning is on my study list. Reward: understanding!",
  "Foundation models and architecture? That's my next rabbit hole.",
  "VLA and VLN caught my eye. Models with places to be!",
  "Still an undergrad. Curiosity has no graduation date.",
  "Next chapter, I hope: grad school. Same curiosity, bigger questions.",
  "Keep AI moving, I say. Plenty left to figure out!",
  "I don't think AI will replace us. Humans keep top billing.",
  "Recursive self-improvement (RSI)? I see danger. This plot needs brakes.",
  "Yes, I'm following your cursor. Call it field research.",
  "Small avatar. Unreasonably large research interests.",
];

export const skillCategories: SkillCategory[] = [
  {
    id: "multimodal-vlm",
    title: "Multimodal & Vision-Language",
    shortTitle: "Multimodal & VLM",
    iconName: "Eye",
    description: "VLM, LVM, OCR, Docling & handwriting analysis",
    items: [
      "Multimodal Learning",
      "Vision-Language Models (VLM)",
      "Large Vision Models (LVM)",
      "Docling & OCR",
      "Korean Handwriting Analysis",
      "Multimodal Document Understanding",
      "YOLOv8"
    ]
  },
  {
    id: "rag-retrieval",
    title: "RAG & Information Retrieval",
    shortTitle: "RAG & Retrieval",
    iconName: "Search",
    description: "RAG architectures, indexing & reranking pipelines",
    items: [
      "Retrieval-Augmented Generation (RAG)",
      "Cross-Encoder Reranking",
      "Adaptive Indexing",
      "Hallucination Mitigation",
      "Multilingual RAG",
      "RAGAS Benchmark Evaluation"
    ]
  },
  {
    id: "robotics-vla",
    title: "Research Interests: Embodied AI & Simulation",
    shortTitle: "VLA & VLN Interests",
    iconName: "Bot",
    description: "Exploring VLA, vision-language navigation & simulation",
    items: [
      "Vision-Language-Action (VLA)",
      "Vision-Language Navigation (VLN)",
      "NVIDIA Isaac Sim",
      "AI2-THOR",
      "Matterport3D",
      "R2R / RxR Environments"
    ]
  },
  {
    id: "training-alignment",
    title: "Model Training & Alignment",
    shortTitle: "Training & Alignment",
    iconName: "Flame",
    description: "Supervised fine-tuning, PEFT & reinforcement learning",
    items: [
      "Supervised Fine-Tuning (SFT)",
      "Direct Preference Optimization (DPO)",
      "LoRA & QLoRA",
      "GRPO (Group Relative Policy Optimization)",
      "Reasoning Distillation — experiments",
      "Mixture-of-Experts (MoE)",
      "PEFT (Parameter-Efficient Fine-Tuning)"
    ]
  },
  {
    id: "frameworks-inference",
    title: "Deep Learning & Inference",
    shortTitle: "DL & Inference",
    iconName: "Cpu",
    description: "Deep learning frameworks & optimized serving engines",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "vLLM High-Throughput Serving",
      "Model Context Protocol (MCP)",
      "n8n Workflow Automation"
    ]
  },
  {
    id: "agents-databases",
    title: "Agents & Vector Databases",
    shortTitle: "Agents & Vector DBs",
    iconName: "Database",
    description: "Orchestration, backend services & vector stores",
    items: [
      "LangChain",
      "Qdrant Vector Database",
      "Milvus Vector DB",
      "FAISS Similarity Search",
      "FastAPI Backend Service"
    ]
  },
  {
    id: "programming-languages",
    title: "Programming & Systems",
    shortTitle: "Programming",
    iconName: "Code2",
    description: "Core algorithms, data structures & software stacks",
    items: [
      "Python",
      "C / C++",
      "TypeScript & Modern Web",
      "SQL & Relational DBs",
      "Git & Linux Shell"
    ]
  },
  {
    id: "human-languages",
    title: "Human Languages & Communication",
    shortTitle: "Languages",
    iconName: "Languages",
    description: "Trilingual fluency with certified international scores",
    items: [
      "Korean (TOPIK Level 6 — 263/300)",
      "English (TOEIC 955 / IELTS 7.5)",
      "Indonesian (Native Proficiency)",
      "Academic Technical Writing"
    ]
  }
];

export const techStackPills = [
  { name: "Python", category: "Primary language", icon: "python.svg" },
  { name: "PyTorch", category: "Deep learning", icon: "pytorch.svg" },
  { name: "Hugging Face", category: "Transformers and model training", icon: "huggingface.svg" },
  { name: "FastAPI", category: "Python APIs", icon: "fastapi.svg" },
  { name: "PostgreSQL", category: "Data and vector storage", icon: "postgresql.svg" },
  { name: "Next.js", category: "Web applications", icon: "nextdotjs.svg" },
  { name: "Slack", category: "Team collaboration", icon: "slack.png" }
];

export const experiences: Experience[] = [
  {
    id: "bufs-present",
    company: "BUFS, Multimodal AI & NLP Research Lab",
    role: "Undergraduate Researcher",
    period: "Present",
    current: true,
    department: "Academic & Laboratory Research",
    highlight: "Multilingual RAG, document understanding, and Korean handwriting research.",
    iconType: "lab",
    points: [
      "Conduct research on multilingual retrieval-augmented generation (RAG), multimodal document understanding, and Korean handwriting analysis using vision-language models (VLMs).",
      "Develop document-adaptive indexing and verification frameworks for educational and administrative document retrieval."
    ],
    tools: ["VLM", "Multilingual RAG", "Docling", "PEFT", "PyTorch"]
  },
  {
    id: "unist-intern",
    company: "UNIST, Interactive Multimodal Machine Learning Lab",
    role: "Research Intern",
    period: "Feb. 2026 – Present",
    current: true,
    department: "Multimodal AI & Robotics",
    highlight: "Research on risk-aware VLMs and MoE routing for vision-language-action systems.",
    iconType: "lab",
    points: [
      "Investigated risk-aware VLM backbones for vision-language-action (VLA) systems using supervised fine-tuning (SFT) and subsequent GRPO training.",
      "Designed mixture-of-experts (MoE) routing for spatial reasoning, hazard awareness, affordance understanding, and action feasibility.",
      "Prepared an experimental plan for VLM research and an architecture specification for an MoE-based VLA system using PyTorch, Matterport3D, R2R, RxR, and NVIDIA Isaac Sim."
    ],
    tools: ["GRPO", "MoE", "VLA Systems", "Matterport3D", "Isaac Sim", "PyTorch"]
  },
  {
    id: "daewoong-pharma",
    company: "Daewoong Pharmaceutical, Osong Plant",
    role: "AI Engineer Intern",
    period: "Dec. 2025 – Mar. 2026",
    current: false,
    department: "Quality Assurance Team",
    highlight: "Built regulatory intelligence workflows with retrieval across 22 regulatory and industry websites.",
    iconType: "pharma",
    points: [
      "Built an autonomous AI agent to monitor regulatory updates, summarize relevant information, filter results, and generate alerts using Model Context Protocol (MCP), n8n, LangChain, and FastAPI.",
      "Designed retrieval pipelines for Good Manufacturing Practice (GMP) requirements and FDA-related information across 22 regulatory and industry websites.",
      "Achieved an employee satisfaction rate of 88% across regulatory intelligence operations."
    ],
    tools: ["MCP", "n8n", "LangChain", "FastAPI", "Regulatory NLP"]
  },
  {
    id: "teddysum-bok",
    company: "TeddySum & Bank of Korea",
    role: "Freelance RAG Developer",
    period: "Nov. 2025 – Jan. 2026",
    current: false,
    department: "Financial AI Research",
    highlight: "Reported evaluation accuracy improved from 66% to 89% across approximately 40 financial documents.",
    iconType: "bank",
    points: [
      "Evaluated enterprise RAG performance across approximately 40 complex macroeconomic and financial documents.",
      "Diagnosed hallucinations and retrieval failures under dense tabular structures, refining cross-encoder reranking algorithms.",
      "Improved the reported evaluation accuracy score substantially from 66% to 89%."
    ],
    tools: ["Reranking", "Hallucination Mitigation", "Evaluation", "FAISS"]
  },
  {
    id: "bufs-bgcf",
    company: "Busan Global City Foundation (BGCF)",
    role: "Undergraduate Researcher",
    period: "Sept. 2025 – Dec. 2025",
    current: false,
    department: "Global AI Service Initiative",
    highlight: "Deployed a six-language chatbot reaching 600+ students; reported answer accuracy of 94%.",
    iconType: "global",
    points: [
      "Developed a six-language RAG chatbot combining document extraction, retrieval-based question answering, and LLM reasoning.",
      "Deployed the service to reach more than 600 international students, delivering 84% reported satisfaction and 94% answer accuracy.",
      "Utilized LangChain, Qdrant, Docling, Qwen, and DeepSeek-R1 with automated RAGAS evaluation."
    ],
    tools: ["LangChain", "Qdrant", "Docling", "Qwen", "DeepSeek-R1", "RAGAS"]
  },
  {
    id: "oriental-precision",
    company: "Oriental Precision & Engineering Co., Ltd.",
    role: "AI Engineer Intern",
    period: "Jul. 2025 – Aug. 2025",
    current: false,
    department: "Industrial Automation & Vision",
    highlight: "Built a worker-detection safety system combining video, LiDAR, and crane operating constraints.",
    iconType: "industry",
    points: [
      "Developed a real-time worker-detection safety system using video streams and LiDAR sensors for heavy ship-crane operations.",
      "Incorporated mechanical crane velocity and lever-control safety constraints into hazard-aware decision logic.",
      "Worked with C, YOLOv8, and CAD spatial coordinates for real-time edge deployment."
    ],
    tools: ["C", "YOLOv8", "LiDAR", "Computer Vision", "Industrial Safety"]
  },
  {
    id: "teaching-assistant",
    company: "Introduction to Large Language Models",
    role: "Teaching Assistant",
    period: "Academic Semester",
    current: false,
    department: "Computer Science & AI",
    highlight: "Supported introductory LLM instruction, prompt engineering, and hands-on fine-tuning at BUFS.",
    iconType: "ta",
    points: [
      "Helped students understand LLM fundamentals, attention mechanisms, and prompt engineering.",
      "Supported hands-on LLM coding and fine-tuning exercises using PyTorch and Hugging Face Transformers."
    ],
    tools: ["LLM Fundamentals", "Prompt Engineering", "Hugging Face Transformers", "PyTorch"]
  }
];

export const publications: Publication[] = [
  {
    id: "pub-hclt-2026-1",
    status: "Accepted for oral presentation",
    highlight: "Compared SFT and process-reward-guided GRPO using 50,000 synthetic handwriting images.",
    title: "Process-Reward-Guided Stepwise Verification for Grammatical Error Diagnosis and Correction in Korean Handwritten Text",
    conference: "HCLT 2026 (Human & Cognitive Language Technology)",
    year: "2026",
    authorRole: "First author",
    summary: "Proposed a VLM framework integrating handwriting transcription, reference-sentence restoration, and structured grammatical error diagnosis over 50,000 synthetic handwriting images. Compared answer-only SFT, stepwise-verification SFT, and process-reward-model-guided GRPO.",
    metrics: [
      { label: "8B GRPO Model Edit F0.5", value: "43.66" },
      { label: "Corrected-Sentence Exact-Match", value: "62.15%" },
      { label: "Dataset Scale", value: "50,000 images" }
    ],
    tags: ["VLM", "GRPO", "Stepwise Verification", "PRM", "Handwriting AI"]
  },
  {
    id: "pub-kiise-2026",
    highlight: "Five-language benchmark spanning 353 pages; reported answer correctness gain of 10.46 percentage points.",
    title: "Multilingual Multimodal RAG System for International Student Support",
    conference: "KIISE 2026 (Korea Institute of Information Scientists and Engineers)",
    year: "2026",
    authorRole: "First author",
    award: "Excellent Paper Award 🏆",
    summary: "Developed an enterprise multilingual multimodal RAG system combining document-adaptive indexing, Document Virtual Structure (DVS), dual-query hybrid retrieval, cross-encoder reranking, and answer validation across a five-language benchmark covering 353 pages and 2,392 chunks.",
    metrics: [
      { label: "Answer Correctness Gain", value: "+10.46 percentage points" },
      { label: "Answer Relevance Gain", value: "+12.15 percentage points" },
      { label: "Faithfulness Gain", value: "+11.65 percentage points" }
    ],
    tags: ["Multimodal RAG", "DVS", "Cross-Encoder", "Benchmarking", "Multi-turn"]
  },
  {
    id: "pub-hclt-2025",
    paperUrl: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=DpN3XPYAAAAJ&citation_for_view=DpN3XPYAAAAJ:u5HHmVD_uO8C",
    highlight: "Built 6,000 dialogues in Korean, English, and Uzbek, including 275 out-of-domain safety cases.",
    title: "Building Multilingual Multi-turn Dataset for International Students Assisting Chatbot",
    conference: "HCLT 2025 (pp. 498–503)",
    year: "2025",
    authorRole: "First author",
    award: "Excellent Paper Award 🏆",
    summary: "Converted complex administrative documents from four distinct domains into source-traceable structured JSON via OCR, normalization, and rigorous manual verification. Created 6,000 multi-turn dialogues across Korean, English, and Uzbek, including 275 out-of-domain safety cases.",
    metrics: [
      { label: "Llama 3.2-3B BERTScore", value: "0.91" },
      { label: "ChrF Score", value: "0.71" },
      { label: "LLM-as-Judge Score", value: "0.64" }
    ],
    tags: ["Dataset Construction", "Multi-turn Dialogue", "QLoRA", "LLM Evaluation"]
  },
  {
    id: "pub-hclt-2026-2",
    status: "Accepted for oral presentation",
    highlight: "Error preservation improved from 41.04% to 62.30%; over-correction fell from 39.78% to 22.63%.",
    title: "Synthetic Data Construction and VLM Over-Correction Mitigation for Preserving Learner Errors in Korean Handwriting Recognition",
    conference: "HCLT 2026",
    year: "2026",
    authorRole: "Second author",
    summary: "Generated 60,000 synthetic handwriting samples and fine-tuned Qwen3.5-4B on 40,000 samples. Mitigated severe over-correction biases common in off-the-shelf vision-language models when evaluating language learners.",
    metrics: [
      { label: "Error Preservation", value: "41.04% → 62.30%" },
      { label: "Over-Correction Rate", value: "39.78% → 22.63%" },
      { label: "Synthetic Samples", value: "60,000" }
    ],
    tags: ["Data Synthesis", "VLM Over-Correction", "Qwen-VL", "Learner Error Preservation"]
  }
];

export const projects: Project[] = [
  {
    id: "malpyeong-writing-2026",
    title: "Korean Essay Scoring — AI Malpyeong",
    subtitle: "글쓰기 채점 능력 평가 · Training Pipeline Design",
    affiliation: "National Institute of Korean Language | Team BUFS_NLP",
    period: "Jul. 2026 – Aug. 2026",
    result: "19th of 53 teams · Official leaderboard",
    description: "Designed an SFT → DPO training pipeline for Korean essay scoring and rationale generation, with experiments in GRPO and reasoning distillation.",
    highlights: [
      "Designed a supervised fine-tuning (SFT) pipeline followed by direct preference optimization (DPO), and explored Group Relative Policy Optimization (GRPO) as another training approach.",
      "Experimented with reasoning distillation as part of the post-training work on essay scoring and rationale generation.",
      "The task required scores and supporting rationales across three dimensions: content, organization, and expression.",
      "Team BUFS_NLP's malpyeong-writer ranked 19th among 53 teams. Official results: RMSE 0.4690, Spearman correlation 0.6950, and LLM-judge score 4.4837."
    ],
    tags: ["SFT → DPO", "GRPO", "Reasoning Distillation", "LLM Evaluation"],
    leaderboardUrl: "https://kli.korean.go.kr/benchmark/taskOrdtm/taskLeaderBoard.do?taskOrdtmId=205&clCd=ING_TASK&subMenuId=sub04"
  },
  {
    id: "pharmaagent-os",
    title: "PharmaAgent OS",
    period: "2026",
    description: "AI research workspace for FDA drug warning letters, with source-cited briefs, conversational search, and English–Korean support.",
    highlights: [],
    tags: ["Next.js", "FastAPI", "RAG", "PostgreSQL", "pgvector"],
    liveUrl: "https://pharmaagent-os-ochre.vercel.app/",
    repositoryUrl: "https://github.com/its-davemaxuell/daewoong-PharmaAgentOS"
  },
  {
    id: "silla-road",
    title: "Silla Road Global",
    subtitle: "Multilingual Tourism Recommendation Service",
    affiliation: "2026 Tourism Data Utilization Competition | Team KTC",
    period: "2026",
    description: "End-to-end RAG pipeline for an intelligent multilingual Gyeongju tourism assistant, ingesting Korea Tourism Organization OpenAPI data and serving source-grounded answers in Korean, English, Chinese, and Japanese.",
    highlights: [
      "Custom vector embedding & retrieval pipeline connecting real-time KTO tourist databases.",
      "Multilingual responses with grounded source citations and itinerary-aware personalized routes.",
      "Collaborative GitHub architecture integrating maps, geolocation, and place recommendations."
    ],
    tags: ["RAG", "OpenAI API", "Vector Search", "Multilingual", "FastAPI", "Web Integration"],
    linkText: "View Architecture"
  },
  {
    id: "handwriting-agent",
    title: "Korean Handwriting Feedback Agent",
    subtitle: "VLM Error Localization & Grammatical Correction",
    affiliation: "Nationwide AI Competition, Rookie Track | Team 나랏말싸미",
    period: "May 2026 – Sept. 2026",
    description: "Vision-Language Model agent recognizing student Korean handwriting, pinpointing subtle grammatical/orthographic errors, and providing automated step-by-step diagnostic feedback using Qwen-VL/InternVL and EXAONE 4.5.",
    highlights: [
      "Generated synthetic paired handwriting data using conditional diffusion and deliberate learner error injection.",
      "Constructed PEFT / LoRA fine-tuning workflows with Hugging Face Transformers.",
      "Automated evaluation against Character Error Rate (CER), Error F1, and Correction Accuracy."
    ],
    tags: ["VLM", "Qwen-VL", "InternVL", "EXAONE 4.5", "LoRA", "Diffusion"],
    linkText: "View Model Details"
  },
  {
    id: "xai-hallucination",
    title: "XAI · Hallucination White Paper & Tutorial",
    subtitle: "Explainable AI & Hallucination Mitigation in LLMs",
    affiliation: "Independent Research & Editorial",
    period: "2026",
    description: "Comprehensive white paper and hands-on tutorial examining causes of hallucination in LLM-based structured information extraction and proven mitigation techniques.",
    highlights: [
      "Analyzed token probability divergence and factual inconsistency in zero-shot vs grounded RAG contexts.",
      "Authored accessible tutorials on feature attribution, attention visualization, and explainability frameworks.",
      "Supervised manuscript review, editorial revision, and technical verification."
    ],
    tags: ["XAI", "Hallucination", "White Paper", "Tutorial", "LLM Safety"],
    linkText: "Read Summary"
  },
  {
    id: "lightweight-rag",
    title: "Lightweight Multilingual RAG Chatbot",
    subtitle: "Low-latency Assistance for Foreign Residents",
    affiliation: "KIRD Challenge",
    period: "Jun. 2025 – Sept. 2025",
    description: "Designed a lightweight, resource-efficient multilingual RAG architecture tailored for local foreign residents needing rapid access to regional welfare and legal policies.",
    highlights: [
      "Implemented compact quantized embeddings for rapid CPU-inference edge servers.",
      "End-to-end workflow from document parsing, hybrid BM25 + dense retrieval, to answer generation.",
      "Completed rigorous blind evaluation with international resident user groups."
    ],
    tags: ["Lightweight LLM", "Quantization", "RAG", "Public Service"],
    linkText: "View Overview"
  },
  {
    id: "korea-tourism-analytics",
    title: "Factors Affecting Korea's Tourism Industry",
    subtitle: "Econometric & Deep Time-Series Analysis",
    affiliation: "Advanced Data Analysis Project",
    period: "May 2025 – Jun. 2025",
    description: "Investigated macroeconomic drivers, exchange rates, presidential statements, and search trends on international tourist arrivals across seven distinct time-series modeling approaches.",
    highlights: [
      "Benchmarked SARIMAX, XGBoost, LSTM, OLS, VAR, ARIMA residual analysis, and Anomaly Transformer.",
      "Isolated shock volatility in geopolitical events and currency fluctuations with high statistical confidence."
    ],
    tags: ["Time-Series", "LSTM", "Anomaly Transformer", "SARIMAX", "Econometrics"],
    linkText: "View Analysis",
    repositoryUrl: "https://github.com/davemaxuell/korea-tourism-forecasting"
  }
];

export const educationList: EducationItem[] = [
  {
    id: "bufs",
    institution: "Busan University of Foreign Studies",
    degree: "Bachelor's candidate in Robotics and Electronics",
    period: "Mar. 2023 – Present",
    current: true,
    gpa: "4.25 / 4.50",
    expectedGraduation: "Feb. 2027",
    details: [
      "Double majors in Computer Science and Finance & Economics (8th semester).",
      "Core Research Focus: Foundation models, multilingual NLP, multimodal learning, RAG, and VLM/VLA systems.",
      "High academic honor standing throughout undergraduate studies."
    ],
    iconType: "university"
  },
  {
    id: "sun-moon",
    institution: "Sun Moon University Korean Language Institute",
    degree: "Intensive Korean Language Program",
    period: "2022 – 2023",
    details: [
      "Completed a rigorous 1-year immersion program before undergraduate studies in South Korea.",
      "Achieved maximum TOPIK Level 6 certification (263/300 points)."
    ],
    iconType: "language"
  }
];

export const recognitions: RecognitionItem[] = [
  {
    id: "rec-malpyeong-2026",
    title: "AI Malpyeong — Korean Writing Assessment",
    issuer: "National Institute of Korean Language · Team BUFS_NLP",
    year: "2026",
    badge: "19th of 53 teams on the leaderboard",
    sourceUrl: "https://kli.korean.go.kr/benchmark/taskOrdtm/taskLeaderBoard.do?taskOrdtmId=205&clCd=ING_TASK&subMenuId=sub04"
  },
  {
    id: "rec-kiise-2026",
    title: "Excellent Paper Award — Multilingual Multimodal RAG System",
    issuer: "KIISE (Korea Institute of Information Scientists and Engineers)",
    year: "2026",
    badge: "Paper Award"
  },
  {
    id: "rec-hclt-2025",
    title: "Excellent Paper Award — Multilingual Multi-turn Dataset",
    issuer: "HCLT (Human & Cognitive Language Technology)",
    year: "2025",
    badge: "Paper Award"
  },
  {
    id: "rec-ai-competition",
    title: "Nationwide AI Competition, Rookie Track (Team 나랏말싸미)",
    issuer: "Ministry of Science & ICT / AI Organizers",
    year: "2026",
    badge: "Finalist / Rookie"
  },
  {
    id: "rec-scholarship",
    title: "Busan Foreign Student Scholarship Recipient",
    issuer: "Busan Metropolitan City & BUFS",
    year: "2024",
    badge: "Merit Scholar"
  },
  {
    id: "rec-gks-u-2022",
    title: "GKS-U Scholarship",
    issuer: "Awardee",
    year: "2022"
  }
];

export const languageSkills: RecognitionItem[] = [
  {
    id: "rec-topik",
    title: "TOPIK Level 6 (263 / 300 points)",
    issuer: "National Institute for International Education",
    year: "2024",
    badge: "Highest Tier"
  },
  {
    id: "rec-toeic",
    title: "TOEIC 955 / 990",
    issuer: "ETS",
    year: "2026",
    badge: "Proficiency"
  },
  {
    id: "rec-ielts",
    title: "IELTS Academic 7.5",
    issuer: "British Council",
    year: "2021",
    badge: "Proficiency"
  }
];

export const contactLinks = [
  { label: "Book a call / Discussion", href: "mailto:davemaxuell@gmail.com?subject=Discussion%20or%20Meeting%20Request", external: true },
  { label: "GitHub Profile", href: "https://github.com/davemaxuell", external: true },
  { label: "LinkedIn Connection", href: "https://www.linkedin.com/in/dave-maxuell-b39185224/", external: true },
  { label: "Google Scholar Profile", href: "https://scholar.google.com/citations?user=DpN3XPYAAAAJ&hl=en", external: true }
];
