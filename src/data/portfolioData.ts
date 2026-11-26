import { Experience, Project, Publication, EducationItem, RecognitionItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "Dave Maxuell",
  title: "Undergraduate Student",
  tagline: "AI research · LLM, VLM, VLA/VLN & Multimodal RAG",
  status: "Available for Research & Roles",
  location: "Busan, South Korea",
  email: "davemaxuell@gmail.com",
  phone: "(+82) 10-9728-0503",
  github: "https://github.com/davemaxuell",
  linkedin: "https://www.linkedin.com/in/dave-maxuell-b39185224/",
  scholar: "https://scholar.google.com/citations?user=DpN3XPYAAAAJ&hl=en",
  cvUrl: "https://docs.google.com/document/d/1fJ1FdzzXGrje7FAMMglRCvJLzkBgA7TI/edit#heading=h.fpj7oqtimrw9",
  aboutIntro: [
    "I'm a graduating undergraduate AI researcher and engineer (expected Feb. 2027), working across the full lifecycle from deep learning and LLM/VLM pretraining and post-training (SFT, LoRA/QLoRA, DPO, GRPO) to domain data modeling, enterprise multimodal RAG, and AI agents.",
    "I conduct research at Busan University of Foreign Studies (Prof. Pum-Mo Ryu) and intern at UNIST's Interactive Multimodal Machine Learning Lab (Prof. Taehwan Kim). Across industry and research, my work has raised Bank of Korea financial RAG evaluation from 66% to 89%, deployed an on-premise regulatory agent at Daewoong Pharmaceutical (88% reported satisfaction), served 600+ students with a six-language RAG chatbot (91% accuracy), earned Excellent Paper Awards at HCLT and KIISE, and won a Bronze Prize among 1,718 participants by pretraining a 46.3M-parameter language model from scratch.",
    "I'm looking for full-time AI engineering and applied ML roles starting in 2027, where I can build and ship production systems around foundation models, AI agents, post-training, and reinforcement learning methods."
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
    title: "Multimodal & Document Understanding",
    shortTitle: "Multimodal & VLM",
    iconName: "Eye",
    description: "Deep learning, VLM/VLA/VLN, OCR, ColQwen & document understanding",
    items: [
      "Deep Learning & Multimodal Learning",
      "Vision-Language Models (VLM)",
      "Document Understanding & Schema Parsing",
      "PaddleOCR-VL & Docling",
      "ColPali & ColQwen Multi-Vector Retrieval",
      "Korean Handwriting Analysis",
      "YOLOv8 & LiDAR Sensor Fusion"
    ]
  },
  {
    id: "rag-retrieval",
    title: "RAG & Information Retrieval",
    shortTitle: "RAG & Retrieval",
    iconName: "Search",
    description: "Hybrid retrieval, reranking, evaluation & multimodal RAG",
    items: [
      "Enterprise & Multilingual RAG",
      "BM25 + BGE-M3 Hybrid Retrieval & RRF",
      "Cross-Encoder Reranking (BGE-Reranker-v2-M3)",
      "Document Virtual Structure (DVS) & Adaptive Indexing",
      "Hallucination Mitigation & Evidence Grounding",
      "RAGAS & LLM-as-Judge Evaluation"
    ]
  },
  {
    id: "robotics-vla",
    title: "Embodied AI: VLA, VLN & Simulation",
    shortTitle: "VLA & VLN",
    iconName: "Bot",
    description: "Risk-aware VLA, continuous VLN & 3D embodied environments",
    items: [
      "Vision-Language-Action (VLA)",
      "Continuous Vision-Language Navigation (VLN)",
      "NVIDIA Isaac Sim",
      "Habitat-Sim / Habitat-Lab",
      "Matterport3D",
      "R2R-CE / RxR-CE Environments"
    ]
  },
  {
    id: "training-alignment",
    title: "Model Training, Post-Training & ML",
    shortTitle: "Training & Alignment",
    iconName: "Flame",
    description: "From-scratch pretraining, SFT, PEFT, RL & classical ML",
    items: [
      "LLM Pretraining from Scratch",
      "Supervised Fine-Tuning (SFT) & DAgger",
      "LoRA & QLoRA",
      "RL Post-Training (DPO, GRPO, TPO, CFPO)",
      "Multimodal RL & Reasoning Distillation",
      "ML Algorithms (XGBoost, SARIMAX, LSTM)"
    ]
  },
  {
    id: "frameworks-inference",
    title: "Frameworks & Serving",
    shortTitle: "Frameworks & Serving",
    iconName: "Cpu",
    description: "Deep learning frameworks, high-throughput serving & APIs",
    items: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "vLLM High-Throughput Serving",
      "scikit-learn",
      "FastAPI"
    ]
  },
  {
    id: "agents-databases",
    title: "Agents, Vector DBs & Automation",
    shortTitle: "Agents & Vector DBs",
    iconName: "Database",
    description: "Agent orchestration, browser/voice control & vector stores",
    items: [
      "LangChain & LangGraph",
      "Qdrant, FAISS & pgvector",
      "Structured Tool Calling & MCP",
      "Stagehand v4 & Playwright",
      "SQLite & PostgreSQL"
    ]
  },
  {
    id: "programming-languages",
    title: "Programming & Systems",
    shortTitle: "Programming",
    iconName: "Code2",
    description: "Software engineering, data modeling & GPU workflows",
    items: [
      "Python",
      "TypeScript / React / Next.js / Electron",
      "C / C++",
      "Data Analysis & Modeling",
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
      "Indonesian (Native)",
      "Korean (TOPIK Level 6 — 263/300)",
      "English (TOEIC 955 / IELTS 7.5)",
      "Academic Technical Writing"
    ]
  }
];

export const techStackPills = [
  { name: "Python", category: "Primary language", icon: "python.svg" },
  { name: "PyTorch", category: "Deep learning", icon: "pytorch.svg" },
  { name: "Hugging Face", category: "Transformers and model training", icon: "huggingface.svg" },
  { name: "LangChain", category: "RAG and agent orchestration", icon: "langchain.svg" },
  { name: "CUDA", category: "GPU acceleration and training", icon: "nvidia.svg" },
  { name: "FastAPI", category: "Python APIs", icon: "fastapi.svg" },
  { name: "PostgreSQL", category: "Data and vector storage", icon: "postgresql.svg" },
  { name: "Next.js", category: "Web applications", icon: "nextdotjs.svg" },
  { name: "Claude Code", category: "AI coding agent", icon: "claude.svg" },
  { name: "Codex", category: "AI coding agent", icon: "openai.svg" },
  { name: "Cursor", category: "AI-assisted IDE", icon: "cursor.svg" },
  { name: "Slack", category: "Team collaboration", icon: "slack.png" }
];

export const experiences: Experience[] = [
  {
    id: "bufs-present",
    company: "Busan University of Foreign Studies",
    role: "Undergraduate Researcher (Prof. Pum-Mo Ryu)",
    period: "Mar. 2025 – Present",
    current: true,
    department: "Multilingual Multimodal Document Understanding & VLM Post-Training",
    highlight: "Researched VLM document schema parsing and post-training (+14.6pt accuracy on 1 H100 GPU) and produced 3 HCLT and 1 KIISE papers (2 Excellent Paper Awards).",
    iconType: "lab",
    points: [
      "Conducted research on multilingual RAG, multimodal document understanding, and Korean handwriting analysis using VLMs.",
      "Collaborated on a government research project on industrial receipt and document schema parsing: trained PaddleOCR-VL, Docling, ColPali, and ColQwen with SFT, experimented with DPO, GRPO, and TPO post-training (+14.6pt accuracy), and contributed to the reranking pipeline (1 H100 GPU).",
      "Produced 3 HCLT papers (including 1 Excellent Paper Award) and 1 KIISE Excellent Paper Award."
    ],
    tools: ["PaddleOCR-VL", "ColPali / ColQwen", "Docling", "SFT / DPO / GRPO / TPO", "Multilingual RAG"]
  },
  {
    id: "unist-intern",
    company: "UNIST, Interactive Multimodal Machine Learning Lab",
    role: "Research Intern (Prof. Taehwan Kim)",
    period: "Feb. 2026 – Present",
    current: true,
    department: "Industrial Blueprint VLM-RAG, Risk-Aware VLA & Continuous VLN Lead",
    highlight: "Led continuous VLN research (+8.2pt success rate on R2R-CE/RxR-CE, 3.3pt off SOTA), trained ColQwen VLM-RAG for HD KSOE blueprints, and researched risk-aware VLA backbones.",
    iconType: "lab",
    points: [
      "Worked on HD Korea Shipbuilding & Offshore Engineering (HD KSOE) research on blueprint, product tech-pack, and CAD document understanding using VLM-based RAG; trained ColQwen with layout-aware hierarchical chunking and multi-vector embeddings (1 A6000 GPU).",
      "Conducted research on risk-aware VLM backbones for vision-language-action (VLA) systems using SFT and GRPO on Qwen3.5-4B for spatial reasoning, hazard awareness, and action feasibility, contributing to internal training datasets in NVIDIA Isaac Sim (1 A6000 GPU).",
      "Initiated continuous visual-language navigation (VLN) research on R2R-CE and RxR-CE in Matterport3D: trained Qwen3.5-4B on navigation frames using SFT + DAgger pre-training and experimented with GRPO and CFPO for frame retrieval and fallback, increasing task success rate by +8.2pt (within 3.3pt of current SOTA; 1 H100 GPU)."
    ],
    tools: ["ColQwen", "Qwen3.5-4B", "VLA / VLN (R2R-CE, RxR-CE)", "SFT + DAgger / GRPO / CFPO", "Isaac Sim", "Matterport3D"]
  },
  {
    id: "daewoong-pharma",
    company: "Daewoong Pharmaceutical, Osong Plant",
    role: "AI Application Intern",
    period: "Dec. 2025 – Mar. 2026",
    current: false,
    department: "QA Team · Solo On-Premise Regulatory AI Agent",
    highlight: "Solo-designed and deployed an on-premise Qwen3.6 27B + vLLM regulatory AI agent monitoring 22 GMP/FDA sites; reported 88% employee satisfaction.",
    iconType: "pharma",
    points: [
      "Built an automated local AI agent monitoring GMP requirements and FDA-related updates across 22 regulatory and pharmaceutical news websites, receiving a reported employee satisfaction rate of 88%.",
      "Developed a local single-agent pipeline on Qwen3.6 27B integrated with vLLM inference, structured tool calling, and RAG over internal SOP and GMP documents."
    ],
    tools: ["Qwen3.6 27B", "vLLM", "Structured Tool Calling", "RAG", "Regulatory NLP"]
  },
  {
    id: "teddysum-bok",
    company: "TeddySum & Bank of Korea",
    role: "Freelance AI Engineer",
    period: "Nov. 2025 – Jan. 2026",
    current: false,
    department: "Financial RAG Evaluation & Hybrid Retrieval Optimization",
    highlight: "Implemented BM25 + BGE-M3 hybrid retrieval, RRF, and BGE-Reranker-v2-M3 across Bank of Korea financial documents; reported score rose from 66% to 89%.",
    iconType: "bank",
    points: [
      "Evaluated RAG performance across Bank of Korea internal financial and macroeconomic documents with an LLM-as-Judge pipeline, analyzing hallucinations and retrieval failures with RAGAS metrics.",
      "Implemented BM25 and BGE-M3 hybrid retrieval, reciprocal rank fusion, cross-encoder reranking with BGE-Reranker-v2-M3, semantic chunking, and evidence-grounded generation, improving the reported end-to-end evaluation score from 66% to 89%."
    ],
    tools: ["BM25 + BGE-M3", "BGE-Reranker-v2-M3", "RRF", "RAGAS", "LLM-as-Judge"]
  },
  {
    id: "bufs-bgcf",
    company: "Busan University of Foreign Studies & Busan Global City Foundation",
    role: "Project Researcher",
    period: "Sept. 2025 – Dec. 2025",
    current: false,
    department: "Six-Language Academic & Administrative RAG Pipeline",
    highlight: "Built a six-language RAG chatbot (LangChain, Qdrant, Docling) for 600+ students; reported 91% answer accuracy and 84% satisfaction.",
    iconType: "global",
    points: [
      "Developed a six-language end-to-end RAG chatbot grounded in university guidelines and regulations using LangChain, Qdrant, and Docling for parsing.",
      "Served more than 600 international students with a reported 84% satisfaction rate and 91% answer accuracy."
    ],
    tools: ["LangChain", "Qdrant", "Docling", "Multilingual RAG", "RAGAS"]
  },
  {
    id: "oriental-precision",
    company: "Oriental Precision & Engineering Co., Ltd.",
    role: "AI Engineer Intern",
    period: "Jul. 2025 – Aug. 2025",
    current: false,
    department: "Video-LiDAR Worker Detection & Hazard Decision Logic",
    highlight: "Built video and LiDAR worker detection with crane and lever-control hazard logic using YOLOv8.",
    iconType: "industry",
    points: [
      "Developed a real-time worker-detection system using video and LiDAR for ship-crane operations.",
      "Incorporated crane and lever-control constraints into hazard-aware human and obstacle detection logic using YOLOv8."
    ],
    tools: ["YOLOv8", "LiDAR", "Computer Vision", "Industrial Safety"]
  },
  {
    id: "teaching-assistant",
    company: "Machine Learning & Introductory Large Language Models",
    role: "Teaching Assistant (Prof. Jihun Kang)",
    period: "Feb. 2026 – Jul. 2026",
    current: false,
    department: "Undergraduate ML / Deep Learning & PyTorch Labs",
    highlight: "Supported English-taught undergraduate ML and Introductory LLM courses, guiding PyTorch and Hugging Face Transformers labs.",
    iconType: "ta",
    points: [
      "Served as a teaching assistant for English-taught undergraduate Machine Learning and Introductory Large Language Models courses.",
      "Supported instruction on machine learning algorithms, deep learning fundamentals, and hands-on PyTorch and Hugging Face Transformers labs."
    ],
    tools: ["Machine Learning", "LLM Fundamentals", "PyTorch", "Hugging Face Transformers"]
  }
];

export const publications: Publication[] = [
  {
    id: "pub-hclt-2026-1",
    status: "Published in proceedings",
    paperUrl: "https://koreascience.kr/article/CFKO202630154054759.do",
    paperSource: "KoreaScience",
    pages: "624–629",
    highlight: "Compared SFT and process-reward-guided GRPO using 50,000 synthetic handwriting images.",
    title: "Process-Reward-Guided Stepwise Verification for Grammatical Error Diagnosis and Correction in Korean Handwritten Text",
    conference: "HCLT 2026 (Annual Conference on Human and Language Technology)",
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
    highlight: "Benchmarked multilingual retrieval across 353 pages in five languages (500 QA pairs); answer correctness rose by 10.46 percentage points.",
    title: "Multilingual Multimodal RAG System for International Student Support",
    conference: "KIISE 2026 (Korea Institute of Information Scientists and Engineers)",
    year: "2026",
    authorRole: "First author",
    award: "Excellent Paper Award 🏆",
    summary: "Developed a multilingual multimodal RAG system combining document-adaptive indexing, Document Virtual Structure (DVS), dual-query hybrid retrieval, cross-encoder reranking, and answer validation. Built a five-language benchmark covering 353 pages, 2,392 chunks, and 500 QA pairs (50 unanswerable), and evaluated DVS components through ablation studies.",
    metrics: [
      { label: "Answer Correctness Gain", value: "+10.46 percentage points" },
      { label: "Answer Relevance Gain", value: "+12.15 percentage points" },
      { label: "Faithfulness Gain", value: "+11.65 percentage points" }
    ],
    tags: ["Multimodal RAG", "DVS", "Cross-Encoder", "Benchmarking", "Ablation Study"]
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
    summary: "Converted documents from four administrative domains into source-traceable JSON schemas using OCR, normalization, and manual verification. Built 6,000 multi-turn dialogues across Korean, English, and Uzbek (including 275 out-of-domain safety cases) and fine-tuned four Qwen/Llama models with QLoRA.",
    metrics: [
      { label: "Llama 3.2-3B BERTScore", value: "0.91" },
      { label: "ChrF Score", value: "0.71" },
      { label: "LLM-as-Judge Score", value: "0.64" }
    ],
    tags: ["Dataset Construction", "Multi-turn Dialogue", "QLoRA", "LLM Evaluation"]
  },
  {
    id: "pub-hclt-2026-2",
    status: "Published in proceedings",
    paperUrl: "https://koreascience.kr/article/CFKO202630057630354.page?lang=ko",
    paperSource: "KoreaScience",
    pages: "241–246",
    highlight: "Error preservation improved from 41.04% to 62.30%; over-correction fell from 39.78% to 22.63%.",
    title: "Synthetic Data Construction and VLM Over-Correction Mitigation for Preserving Learner Errors in Korean Handwriting Recognition",
    conference: "HCLT 2026",
    year: "2026",
    authorRole: "Second author",
    summary: "Generated 60,000 synthetic handwriting samples and fine-tuned Qwen3.5-4B on 40,000 samples to mitigate over-correction biases on learner errors; CER increased on real handwriting, indicating limitations in generalization.",
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
    id: "cheongeum-voice-agent",
    title: "Cheongeum (청음) — Voice AI Public-Service Agent",
    subtitle: "Self-web-surfing voice AI assistant for digitally underprivileged users",
    affiliation: "Team Hunmin-Cheongeum",
    period: "Nov. 2026 – Present",
    description: "Built a voice-first desktop and web AI assistant (TypeScript, React, Electron) helping visually impaired users and newcomers navigate Korean public-service websites in Korean, English, Chinese, and Japanese.",
    highlights: [
      "Connected OpenAI gpt-live-1.1 for real-time voice conversation and read-aloud, gpt-transcribe for speech-to-text, and text-embedding-3-small for saved notes.",
      "Integrated Stagehand v4 and Playwright browser control with official Korean welfare APIs (461+ programs), local PDF/HWPX file reading, and SQLite/pgvector storage to guide users through forms step by step.",
      "Added screenshot guardrails for sensitive fields so users handle login and final submissions directly."
    ],
    tags: ["Voice AI", "Stagehand v4", "Playwright", "Electron", "pgvector"]
  },
  {
    id: "scg-lm-v2",
    title: "SLM_v2.1 — 46M Language Model",
    subtitle: "SCG-LM V2 pretraining and V2.1 task tuning · Global Innovation Build Challenge V2",
    period: "Sept. – Oct. 2026",
    result: "Bronze (3rd Place) · out of 1,718 participants",
    description: "Won Bronze (Track 01: Foundational LLM Development) among 1,718 participants in Global Innovation Build Challenge V2 with SLM_v2.1. Pretrained a 46.3M-parameter Llama-style decoder from scratch on 45.0B tokens using one H100.",
    highlights: [
      "Designed a 12-layer Llama-style decoder (512 hidden size, SwiGLU, RoPE, 16K byte-level BPE tokenizer) trained from random initialization on 45.0B next-token targets.",
      "Curated 22.5B unique English tokens across DCLM-baseline, FineWeb-Edu, Wikipedia, StackExchange, and Project Gutenberg; completed pretraining in 31.9 hours on one H100.",
      "Pretraining-only V2 base achieved 23.85 WikiText-103 perplexity (vs. 25.52 on V1) and 46.96%–47.12% baseline accuracy.",
      "Task-tuned V2.1 with multiple-choice log-likelihood cross-entropy and auxiliary gold-LM loss (evaluation splits excluded): HellaSwag 39.15%, ARC-Easy 54.12%, PIQA 65.34%, WinoGrande 52.41% (52.76% mean accuracy; 25.46 WikiText-103 perplexity).",
      "Published code, checkpoints, and evaluation records; listed as SLM_v2.1 on Devpost."
    ],
    tags: ["LLM Pretraining", "PyTorch", "SwiGLU / RoPE", "Data Curation"],
    repositoryUrl: "https://github.com/davemaxuell/Global-Innovation-Build-Challenge-V2",
    modelUrl: "https://huggingface.co/davemaxuellkr/Global-Innovation-Build-Challenge-V2",
    submissionUrl: "https://devpost.com/software/slm_v1",
    certificateUrl: "/certificates/GIBC_V2_SLM_v2_1_Bronze_Dave_Maxuell.pdf"
  },
  {
    id: "handwriting-agent",
    title: "Korean Handwriting Feedback Agent",
    subtitle: "Diffusion synthetic handwriting augmentation & VLM/LLM post-training",
    affiliation: "Nationwide AI Competition, Rookie Track | Team Naratmalssami",
    period: "May 2026 – Present",
    result: "Top 80 / 721 teams · Rookie Track",
    description: "Built a VLM-based agent that recognizes Korean handwriting, locates learner errors, and generates feedback, expanding 152 real samples to 5,000 synthetic samples with a Korean-trained OneDM diffusion model.",
    highlights: [
      "Expanded the Korean learner writing dataset from 152 samples to 5,000 synthetic handwritten samples with grammatical errors using a Korean-handwriting-trained OneDM diffusion model.",
      "Trained Qwen with SFT for handwriting recognition, EXAONE 4.5 with GRPO for error detection and classification, and Upstage Solar as LLM-as-Judge and feedback generator (2 H100 and 1 A100 GPUs).",
      "Evaluated recognition, error detection, and correction separately using Character Error Rate (CER), Error F1, and Correction Accuracy."
    ],
    tags: ["VLM", "OneDM Diffusion", "Qwen / EXAONE 4.5", "SFT & GRPO"]
  },
  {
    id: "malpyeong-writing-2026",
    title: "Korean Essay Scoring — AI Malpyeong",
    subtitle: "글쓰기 채점 능력 평가 · Multi-stage post-training pipeline",
    affiliation: "National Institute of Korean Language | Team BUFS_NLP",
    period: "Jul. 2026 – Aug. 2026",
    result: "Top 19 out of 148 model submissions · Official leaderboard",
    description: "Fine-tuned Qwen/Qwen3.5-9B as a score-conditioned Korean essay rationale writer via SFT → DPO distillation from Qwen3.6-35B → GRPO on 2 H100 GPUs.",
    highlights: [
      "Trained Qwen/Qwen3.5-9B through SFT → DPO distillation (from Qwen3.6-35B) → GRPO post-training to generate rationales aligned to content, organization, and expression scores.",
      "Achieved 4.3926 overall rationale quality (4.877 domain fit, 3.960 score consistency, 4.070 specificity, 4.663 source faithfulness).",
      "Contributed to Team BUFS_NLP's top 19 result out of 148 model submissions. Official leaderboard results: RMSE 0.4690, Spearman correlation 0.6950, and LLM-judge score 4.4837."
    ],
    tags: ["SFT → DPO Distillation", "GRPO", "Qwen3.5-9B", "LLM Evaluation"],
    modelUrl: "https://huggingface.co/davemaxuellkr/260814-writer-model",
    leaderboardUrl: "https://kli.korean.go.kr/benchmark/taskOrdtm/taskLeaderBoard.do?taskOrdtmId=205&clCd=ING_TASK&subMenuId=sub04"
  },
  {
    id: "pharmaagent-os",
    title: "PharmaAgent OS",
    subtitle: "Bilingual regulatory data modeling workspace & LangGraph hybrid RAG",
    affiliation: "Daewoong Foundation Global Scholarship Program | AI & Design Thinking",
    period: "Sept. 2026",
    description: "Built an evidence-first bilingual (EN/KO) regulatory intelligence workspace with Next.js, FastAPI, PostgreSQL/pgvector, and LangGraph hybrid RAG across 767 U.S. FDA warning letters.",
    highlights: [
      "Structured U.S. FDA drug warning letters and GMP trends for evidence-grounded regulatory review.",
      "Integrated OpenAI chat/document profiles with embeddings and LangGraph hybrid RAG across 767 FDA letters."
    ],
    tags: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL / pgvector"],
    liveUrl: "https://pharmaagent-os-ochre.vercel.app/",
    repositoryUrl: "https://github.com/its-davemaxuell/daewoong-PharmaAgentOS"
  },
  {
    id: "lightweight-rag",
    title: "Lightweight Multilingual RAG Chatbot",
    subtitle: "Low-latency Assistance for Foreign Residents",
    affiliation: "KIRD Real Challenge Program",
    period: "Jun. 2025 – Sept. 2025",
    description: "Developed a lightweight multilingual RAG chatbot for foreign residents, implementing the full workflow from document extraction and retrieval to response generation and evaluation.",
    highlights: [
      "Implemented compact quantized embeddings for rapid CPU-inference edge servers.",
      "Connected document parsing, hybrid BM25 and dense retrieval, and answer generation in one workflow.",
      "Evaluated the chatbot with international resident user groups using a blind assessment."
    ],
    tags: ["Lightweight LLM", "Quantization", "RAG", "Public Service"]
  },
  {
    id: "korea-tourism-analytics",
    title: "Factors Affecting Korea's Tourism Industry",
    subtitle: "Macro & search-trend data modeling · 7-model ML/DL benchmark",
    affiliation: "Data Analysis & Modeling Project",
    period: "May 2025 – Jun. 2025",
    description: "Performed correlation and lag analysis across exchange rates, presidential statements, search volume, and international tourist arrivals, benchmarking seven statistical, ML, and deep learning models.",
    highlights: [
      "Benchmarked SARIMAX, XGBoost, LSTM, OLS, VAR, ARIMA residual analysis, and Anomaly Transformer.",
      "Isolated shock volatility in geopolitical events and currency fluctuations with high statistical confidence."
    ],
    tags: ["Time-Series", "LSTM", "Anomaly Transformer", "SARIMAX", "XGBoost"],
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
      "Core Research Focus: Foundation models, multilingual NLP, multimodal learning, RAG, and VLM/VLA."
    ],
    iconType: "university"
  },
  {
    id: "sun-moon",
    institution: "Sun Moon University Korean Language Institute",
    degree: "Intensive Korean Language Program",
    period: "2022 – 2023",
    details: [
      "Completed a one-year Korean language program before undergraduate study in South Korea.",
      "Achieved TOPIK Level 6 certification (263/300 points)."
    ],
    iconType: "language"
  }
];

export const recognitions: RecognitionItem[] = [
  {
    id: "rec-gibc-2026",
    title: "Global Innovation Build Challenge V2 — SLM_v2.1",
    issuer: "GIBC Organizing Team · 1,718 participants",
    year: "Oct. 2026",
    badge: "3rd Place (Bronze) · Track 01: Foundational LLM Development",
    sourceUrl: "https://devpost.com/software/slm_v1",
    sourceLabel: "Award on Devpost",
    certificateUrl: "/certificates/GIBC_V2_SLM_v2_1_Bronze_Dave_Maxuell.pdf",
    certificateLabel: "Certificate (PDF)"
  },
  {
    id: "rec-malpyeong-2026",
    title: "AI Malpyeong — Korean Writing Assessment",
    issuer: "National Institute of Korean Language · Team BUFS_NLP",
    year: "2026",
    badge: "Top 19 out of 148 model submissions on the leaderboard",
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
    title: "Nationwide AI Competition, Rookie Track (Team Naratmalssami)",
    issuer: "Ministry of Science & ICT / AI Organizers",
    year: "2026",
    badge: "Top 80 / 721 teams"
  },
  {
    id: "rec-scholarship",
    title: "Busan Foreign Student Scholarship Recipient",
    issuer: "Busan Metropolitan City & BUFS · City inclusion & youth initiatives",
    year: "Mar. – Nov. 2024",
    badge: "Merit Scholar"
  },
  {
    id: "rec-gks-u-2022",
    title: "Global Korea Scholarship (GKS-U)",
    issuer: "Government of the Republic of Korea",
    year: "Mar. 2022 – Feb. 2023"
  }
];

export const languageSkills: RecognitionItem[] = [
  {
    id: "rec-indonesian",
    title: "Indonesian — Native",
    issuer: "Native language",
    year: "Native"
  },
  {
    id: "rec-topik",
    title: "Korean — TOPIK Level 6 (263 / 300 points)",
    issuer: "National Institute for International Education",
    year: "2024"
  },
  {
    id: "rec-toeic",
    title: "English — TOEIC 955 / 990",
    issuer: "ETS",
    year: "2026"
  },
  {
    id: "rec-ielts",
    title: "English — IELTS Academic 7.5",
    issuer: "British Council",
    year: "2021"
  }
];

export const certificates: RecognitionItem[] = [
  {
    id: "cert-aiffel-dl",
    title: "End-to-End Deep Learning (딥러닝 한번에 끝내기)",
    issuer: "AIFFEL Campus · Modulabs ((주) 모두의연구소)",
    year: "Completed",
    badge: "AIFFEL AI Learning System",
    certificateUrl: "https://drive.google.com/file/d/184AS_GqFYK33qzPr4QfVGMuaq2vQD98c/view?usp=sharing",
    certificateLabel: "View certificate"
  },
  {
    id: "cert-aiffel-math",
    title: "AI by Hand: Deep Learning Mathematics with Python (내 손으로 이해하는 딥러닝 기초수학)",
    issuer: "AIFFEL Campus · Modulabs ((주) 모두의연구소)",
    year: "Completed",
    badge: "AIFFEL AI Learning System",
    certificateUrl: "https://drive.google.com/file/d/1RqpL4i1tCOtc24q5s_DgcDTEadwk3s8G/view?usp=sharing",
    certificateLabel: "View certificate"
  },
  {
    id: "cert-aiffel-mlops",
    title: "MLOps Essentials: Model Deployment to Operations (MLOps의 정석: AI 모델 배포부터 운영까지)",
    issuer: "AIFFEL Campus · Modulabs ((주) 모두의연구소)",
    year: "Completed",
    badge: "AIFFEL AI Learning System",
    certificateUrl: "https://drive.google.com/file/d/1_y2flKGx9G1N49SX-_ISFBmgQGHVjJgv/view?usp=sharing",
    certificateLabel: "View certificate"
  },
  {
    id: "cert-aiffel-genai-biz",
    title: "Business Survival Strategy in the Generative AI Era (생성AI 시대 비즈니스 생존 전략)",
    issuer: "AIFFEL Campus · Modulabs ((주) 모두의연구소)",
    year: "Completed",
    badge: "AIFFEL AI Learning System",
    certificateUrl: "https://drive.google.com/file/d/1gsOygqOzmGmyRgZ3w5lCTvYl7ihIcOB0/view?usp=sharing",
    certificateLabel: "View certificate"
  },
  {
    id: "cert-aiffel-ethics",
    title: "AI Ethics & Trustworthy AI Usage (직장인을 위한 AI 윤리: 신뢰할 수 있는 AI 활용법)",
    issuer: "AIFFEL Campus · Modulabs ((주) 모두의연구소)",
    year: "Completed",
    badge: "AIFFEL AI Learning System",
    certificateUrl: "https://drive.google.com/file/d/1-jquUqkMeSqZTd4U2FsV1DXEl4fvkzE5/view?usp=sharing",
    certificateLabel: "View certificate"
  }
];

export const contactLinks = [
  { label: "Book a call / Discussion", href: "mailto:davemaxuell@gmail.com?subject=Discussion%20or%20Meeting%20Request", external: true },
  { label: "GitHub Profile", href: "https://github.com/davemaxuell", external: true },
  { label: "LinkedIn Connection", href: "https://www.linkedin.com/in/dave-maxuell-b39185224/", external: true },
  { label: "Google Scholar Profile", href: "https://scholar.google.com/citations?user=DpN3XPYAAAAJ&hl=en", external: true }
];
