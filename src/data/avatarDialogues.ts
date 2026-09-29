export type AvatarDialogue = {
  label: string;
  lines: readonly string[];
};

// Keep these small, factual introductions aligned with portfolioData.ts.
// Stable topic keys let any avatar renderer share the same dialogue library.
export const avatarDialogues: Record<string, AvatarDialogue> = {
  profile: {
    label: 'Meet Dave',
    lines: [
      "I'm Dave, an undergraduate student researching AI in Busan. Welcome to my little corner of the internet!",
      "I work on AI that connects language, images, and useful information. You'll find a bit of each here.",
      "I speak Indonesian, Korean, and English. My research spends quite a bit of time crossing language boundaries too!",
    ],
  },
  about: {
    label: 'A little about me',
    lines: [
      "I study how AI can work with documents, images, and language together. That's the thread connecting much of my research.",
      "My research includes finding relevant information and checking model reasoning. A convincing answer still needs something to back it up!",
      "I'm based in Busan, with research experience at BUFS and UNIST. These sections fill in the details.",
    ],
  },
  skills: {
    label: 'My research toolkit',
    lines: [
      "My toolkit ranges from document retrieval to vision-language models. Pick a card and I'll unpack that part.",
      "I work across model training, retrieval, and simulation. Different research questions call for different tools.",
      "I work with human languages as well as programming languages. Both show up in my multilingual AI research!",
    ],
  },
  'tech-stack': {
    label: 'Tools I work with',
    lines: [
      "I use these tools across training, retrieval, and backend services. Each covers a different part of the work.",
      "My stack includes PyTorch for models and FastAPI for backend services. Hover over a tool for a quick introduction.",
      "I work with model tools, web frameworks, and databases here. A fairly varied toolbox, you could say!",
    ],
  },
  experience: {
    label: 'Where I have worked',
    lines: [
      "I've worked on research, student services, regulatory information, and industrial safety. There's a different problem behind each role.",
      "My experience connects academic research with practical AI systems. Hover over a role and I'll give you the short version.",
      "I've also been a teaching assistant. Helping explain attention mechanisms belongs on the timeline alongside building with them!",
    ],
  },
  projects: {
    label: 'Things I have worked on',
    lines: [
      "My projects range from Korean handwriting feedback to tourism recommendations. Pick one and I'll introduce it.",
      "I work on both research ideas and usable services. These cards show some of the results.",
      "I've explored language learning, public information, and tourism here. The project details explain how each system works.",
    ],
  },
  publications: {
    label: 'My research papers',
    lines: [
      "My papers cover multilingual retrieval and Korean handwriting. Each one explores a particular part of that research.",
      "My papers explore datasets, retrieval, and checking handwritten text. Hover over one for the plain-language version.",
      "My research includes both building datasets and evaluating models. The numbers here belong to those specific experiments.",
    ],
  },
  education: {
    label: 'My education',
    lines: [
      "I study Robotics and Electronics at BUFS, alongside Computer Science and Finance & Economics. Quite a mix of subjects!",
      "I attended a Korean language institute before my undergraduate studies. You'll find that part of my education here too.",
      "My education connects robotics, computing, and economics. Those interests also show up in my projects.",
    ],
  },
  recognition: {
    label: 'A few milestones',
    lines: [
      "My milestones include paper awards, a scholarship, and language certifications. Each entry tells a different part of the story.",
      "I've received Excellent Paper Awards at HCLT and KIISE for my multilingual AI research.",
      "I keep research awards and language scores together here. Both connect to the multilingual work elsewhere on this page.",
    ],
  },
  links: {
    label: 'Find me elsewhere',
    lines: [
      "You can find my code, research profile, and contact links here. Choose whichever fits what you're looking for.",
      "My GitHub and Google Scholar profiles are linked here if you'd like to explore a little further.",
      "I've put my LinkedIn and email links here too. This is the small collection of doors out of my portfolio!",
    ],
  },
  contact: {
    label: 'Get in touch',
    lines: [
      "I'm available for research and roles. My contact details are here if you'd like to discuss either.",
      "You can reach me by email about research, collaborations, or roles. I'd be glad to hear what you have in mind.",
      "I'm based in Busan, and my email is right here. That's a good place to start a conversation.",
    ],
  },
  'experience:bufs-present': {
    label: 'Research at BUFS',
    lines: [
      "At BUFS, I research multilingual document retrieval and Korean handwriting. Text and images both get a seat at the table.",
      "I'm an undergraduate researcher in the Multimodal AI & NLP Research Lab, working on documents and vision-language models.",
      "My BUFS work includes adapting document indexing and verifying answers. Finding information is only part of the job.",
    ],
  },
  'experience:unist-intern': {
    label: 'Research at UNIST',
    lines: [
      "At UNIST, I investigate models that connect seeing, language, and actions, with attention to risks and feasibility.",
      "My UNIST internship explores specialized model routing for spatial reasoning and hazard awareness. Different experts, different parts of the problem.",
      "I prepared research plans and a VLA architecture at UNIST, using tools including PyTorch and Isaac Sim.",
    ],
  },
  'experience:daewoong-pharma': {
    label: 'Daewoong Pharmaceutical',
    lines: [
      "At Daewoong, I built an agent that monitored regulatory updates and turned relevant information into summaries and alerts.",
      "My Daewoong internship involved retrieving information across 22 regulatory and industry websites. That was a lot of sources to organize!",
      "I worked with the Quality Assurance team on regulatory intelligence. The operation reported 88% employee satisfaction.",
    ],
  },
  'experience:teddysum-bok': {
    label: 'Financial document retrieval',
    lines: [
      "I evaluated financial-document retrieval for TeddySum and the Bank of Korea. Dense tables made this an interesting challenge.",
      "My freelance work examined roughly 40 financial and macroeconomic documents, tracking where retrieval failed or answers went off course.",
      "I refined reranking in this financial RAG work. The reported evaluation accuracy increased from 66% to 89%.",
    ],
  },
  'experience:bufs-bgcf': {
    label: 'Helping international students',
    lines: [
      "For BGCF, I developed a six-language chatbot for international students. It connected document retrieval with question answering.",
      "My BGCF chatbot reached more than 600 international students. This research had people on the other end of the answers.",
      "I used LangChain, Qdrant, and Docling for this student-support service, with automated evaluation to check its answers.",
    ],
  },
  'experience:oriental-precision': {
    label: 'Research assistant at Oriental',
    lines: [
      "I worked as a research assistant at Oriental Precision, combining video and LiDAR for worker detection around ship cranes.",
      "My research assistant work included crane speed and lever-control constraints. Detecting a worker was only one piece of the safety logic.",
      "At Oriental Precision, I worked with C, YOLOv8, and CAD coordinates on a real-time worker-detection system.",
    ],
  },
  'experience:teaching-assistant': {
    label: 'Teaching assistant',
    lines: [
      "As a teaching assistant, I helped students explore attention mechanisms, prompt engineering, and the basics of language models.",
      "I supported coding and fine-tuning exercises with PyTorch and Hugging Face Transformers. This work involved explaining as well as implementing.",
      "My teaching assistant role supported introductory LLM instruction at BUFS. Plenty of ideas to turn into working code!",
    ],
  },
  'project:sgis-dongne-type': {
    label: 'SGIS Dongne Type',
    lines: [
      "I built SGIS Dongne Type to explore South Korean neighborhoods through population, household, and business statistics.",
      "My neighborhood explorer uses 16 types and ten shared indicators to help people discover and compare statistically similar places.",
      "The project combines Next.js, MapLibre maps, and FastAPI. You can explore the live site or read the code from this card.",
    ],
  },
  'project:malpyeong-writing-2026': {
    label: 'Korean essay scoring',
    lines: [
      "I designed a training pipeline for scoring Korean essays and explaining the scores. Our team placed 19th among 53 teams.",
      "My AI Malpyeong work combined supervised fine-tuning and preference training, with experiments in GRPO and reasoning distillation.",
      "I worked on essay scores and supporting explanations across content, organization, and expression. Giving a number was only part of the task.",
    ],
  },
  'project:pharmaagent-os': {
    label: 'PharmaAgent OS',
    lines: [
      "My PharmaAgent OS project is a research workspace for FDA drug warning letters, with source-cited briefs and conversational search.",
      "I built PharmaAgent OS with English–Korean support. It brings search and cited summaries into one research workspace.",
      "My PharmaAgent OS stack includes Next.js, FastAPI, and PostgreSQL. The live project and repository are linked on its card.",
    ],
  },
  'project:silla-road': {
    label: 'Silla Road Global',
    lines: [
      "I'm working on a Gyeongju tourism assistant that uses tourism data to answer questions in four languages.",
      "My Silla Road work connects tourism information with retrieval and source citations. Recommendations should have something concrete behind them.",
      "For Silla Road, I built retrieval around Korea Tourism Organization data, with maps and itinerary-aware recommendations in the project.",
    ],
  },
  'project:handwriting-agent': {
    label: 'Korean handwriting feedback',
    lines: [
      "I built an agent that reads Korean handwriting and explains grammatical errors step by step. A little feedback beyond transcription.",
      "My handwriting project combines vision-language models with fine-tuning. It aims to locate learner errors and explain corrections.",
      "I created synthetic handwriting data for this project and evaluated recognition, error detection, and correction separately.",
    ],
  },
  'project:xai-hallucination': {
    label: 'Understanding AI hallucinations',
    lines: [
      "I wrote a white paper and tutorial about hallucinations in language models, focusing on structured information extraction.",
      "My explainable-AI work includes tutorials on feature attribution and attention visualization. I wanted to make those methods easier to explore.",
      "I compared factual consistency with and without retrieved sources here. The tutorial walks through ways to investigate model answers.",
    ],
  },
  'project:lightweight-rag': {
    label: 'Lightweight multilingual chatbot',
    lines: [
      "I designed this chatbot to help foreign residents find regional welfare and legal-policy information in multiple languages.",
      "My lightweight RAG project used compact embeddings for CPU-based servers. The architecture had to keep resource use in mind.",
      "I worked from document parsing through retrieval to answer generation here, then evaluated the chatbot with international residents.",
    ],
  },
  'project:korea-tourism-analytics': {
    label: 'Tourism through data',
    lines: [
      "I studied what affects international tourist arrivals in Korea, including exchange rates, search trends, and economic factors.",
      "My tourism analysis compared seven time-series approaches, from statistical models to neural networks. Same question, several modeling perspectives.",
      "I explored how events and currency fluctuations relate to tourism patterns. This project connects my computing and economics interests.",
    ],
  },
  'publication:pub-hclt-2026-1': {
    label: 'Checking handwriting step by step',
    lines: [
      "In this first-author paper, I studied stepwise checking for grammatical errors in Korean handwriting, using 50,000 synthetic images.",
      "I compared training approaches that reward intermediate reasoning steps with approaches focused on final answers in this handwriting study.",
      "My framework combines handwriting transcription, sentence restoration, and grammatical diagnosis. Reading the text is just the beginning here.",
    ],
  },
  'publication:pub-kiise-2026': {
    label: 'Multilingual RAG paper',
    lines: [
      "My first-author KIISE paper studied multilingual student support and received an Excellent Paper Award in 2026.",
      "I combined document-adaptive indexing, retrieval, reranking, and answer validation in this paper. Each stage tackles a different source of mistakes.",
      "I evaluated this system on a five-language benchmark covering 353 pages. The paper reports gains in correctness, relevance, and faithfulness.",
    ],
  },
  'publication:pub-hclt-2025': {
    label: 'Building a multilingual dataset',
    lines: [
      "For this first-author paper, I built 6,000 multi-turn dialogues in Korean, English, and Uzbek from administrative documents.",
      "My dataset work included tracing information back to sources and manually checking it. A useful chatbot starts with careful data.",
      "This HCLT paper received an Excellent Paper Award. I also included 275 cases involving questions outside the chatbot's scope.",
    ],
  },
  'publication:pub-hclt-2026-2': {
    label: 'Preserving learner errors',
    lines: [
      "As second author, I worked on a handwriting problem: models sometimes correct learner mistakes before anyone can study them.",
      "I contributed to this study of synthetic handwriting data and over-correction. The goal was to preserve what learners actually wrote.",
      "Our study generated 60,000 handwriting samples. I worked on the research behind reducing unwanted corrections in recognition.",
    ],
  },
  'education:bufs': {
    label: 'Studying at BUFS',
    lines: [
      "I'm a Robotics and Electronics bachelor's candidate at BUFS, with double majors in Computer Science and Finance & Economics.",
      "My BUFS studies span engineering, computing, and economics. My research focuses on multilingual and multimodal AI.",
      "I study at Busan University of Foreign Studies, where I also conduct research in the Multimodal AI & NLP lab.",
    ],
  },
  'education:sun-moon': {
    label: 'Korean language studies',
    lines: [
      "I attended Sun Moon University's Korean language institute before studying at BUFS. That's this part of my education.",
      "I studied Korean at Sun Moon University in 2022–2023. You'll also find my TOPIK certification on this page.",
      "I went through a Korean language institute before my undergraduate studies. Korean is one of the languages I work with today.",
    ],
  },
  'recognition:rec-malpyeong-2026': {
    label: 'AI Malpyeong result',
    lines: [
      "My team, BUFS_NLP, ranked 19th among 53 teams in AI Malpyeong's Korean writing assessment. The official leaderboard is linked here.",
      "I worked on training for Korean essay scoring in this competition. Our system produced both scores and supporting explanations.",
      "My AI Malpyeong result connects to the essay-scoring project. The project card has the training approach and evaluation details.",
    ],
  },
  'recognition:rec-kiise-2026': {
    label: 'KIISE paper award',
    lines: [
      "I received a KIISE Excellent Paper Award in 2026 for my multilingual, multimodal RAG research.",
      "My student-support retrieval research earned this KIISE paper award. You can find the study in the publications section.",
      "This award recognizes my multilingual RAG paper. The work combines document structure, retrieval, and answer checking.",
    ],
  },
  'recognition:rec-hclt-2025': {
    label: 'HCLT paper award',
    lines: [
      "I received an HCLT Excellent Paper Award in 2025 for my multilingual, multi-turn dataset research.",
      "My HCLT award connects to the dataset of 6,000 conversations for international student support. Careful data work made the paper.",
      "This award came from my first-author dataset paper. It covers dialogues in Korean, English, and Uzbek.",
    ],
  },
  'recognition:rec-ai-competition': {
    label: 'Nationwide AI Competition',
    lines: [
      "I joined the Nationwide AI Competition's rookie track with Team 나랏말싸미, working on Korean handwriting feedback.",
      "My team's competition project connects handwriting recognition with grammatical feedback. The project card explains the models and evaluation.",
      "I'm part of Team 나랏말싸미 in the 2026 rookie track. Our work focuses on Korean handwriting and learner errors.",
    ],
  },
  'recognition:rec-scholarship': {
    label: 'Busan scholarship recipient',
    lines: [
      "I received the Busan Foreign Student Scholarship in 2024. This is one of the scholarship milestones on my page.",
      "My 2024 scholarship came through Busan Metropolitan City and BUFS. It sits alongside my research milestones here.",
      "I was a Busan Foreign Student Scholarship recipient. You'll find the year and awarding organizations in this entry.",
    ],
  },
  'recognition:rec-gks-u-2022': {
    label: 'GKS-U Scholarship',
    lines: [
      "I received the GKS-U Scholarship in 2022. It's another part of my education story here in South Korea.",
      "My GKS-U Scholarship dates to 2022. This entry records that early milestone alongside the more recent ones.",
      "I'm a 2022 GKS-U Scholarship awardee. You can explore my university and language studies in the education section.",
    ],
  },
  'recognition:rec-topik': {
    label: 'Korean language certification',
    lines: [
      "I earned TOPIK Level 6 with 263 out of 300 points. Korean also features throughout my research.",
      "My Korean certification is TOPIK Level 6. I studied at a Korean language institute before university.",
      "I scored 263 out of 300 on TOPIK. You might have noticed Korean handwriting shows up in several of my projects!",
    ],
  },
  'recognition:rec-toeic': {
    label: 'TOEIC certification',
    lines: [
      "I scored 955 out of 990 on TOEIC in 2026. English is one of the three languages I speak.",
      "My TOEIC result is 955 out of 990. My IELTS and Korean language certifications are listed nearby too.",
      "I speak English alongside Korean and Indonesian. This entry records my 2026 TOEIC certification.",
    ],
  },
  'recognition:rec-ielts': {
    label: 'IELTS Academic certification',
    lines: [
      "I earned IELTS Academic 7.5 in 2021. It's one of the English certifications on my page.",
      "My IELTS Academic result is 7.5. You can also find my TOEIC and TOPIK results here.",
      "I speak English, Korean, and Indonesian. This entry records my IELTS Academic certification from 2021.",
    ],
  },
  'skill:multimodal-vlm': {
    label: 'Images meet language',
    lines: [
      "I work with models that connect images and text, including systems for reading documents and Korean handwriting.",
      "My multimodal work covers document understanding and vision-language models. Sometimes the useful information is in the layout as well as the words.",
      "I use OCR, Docling, and vision-language models in document research. There's more to a page than a plain text string!",
    ],
  },
  'skill:rag-retrieval': {
    label: 'Finding relevant information',
    lines: [
      "I work on retrieval-augmented generation: finding useful source material before a model answers a question.",
      "My retrieval research includes indexing and reranking. The aim is to bring the right information into the answer process.",
      "I evaluate multilingual retrieval and investigate hallucinations. A confident answer still needs relevant supporting information.",
    ],
  },
  'skill:robotics-vla': {
    label: 'From seeing to acting',
    lines: [
      "I'm interested in systems that connect vision and language with navigation or actions. Simulation is part of that exploration.",
      "My research interests include vision-language navigation and VLA systems. Here, a model's reasoning connects to possible actions.",
      "I'm exploring simulation tools such as Isaac Sim and navigation environments such as Matterport3D. There's plenty more I want to learn.",
    ],
  },
  'skill:training-alignment': {
    label: 'Teaching models',
    lines: [
      "I fine-tune models with methods such as LoRA and QLoRA. These adapt models without updating every parameter.",
      "My training work includes supervised fine-tuning and reinforcement learning. I explore how training choices affect the reasoning models produce.",
      "I work with specialized model experts and methods like GRPO. My research investigates how these pieces support reasoning.",
    ],
  },
  'skill:frameworks-inference': {
    label: 'Building and running models',
    lines: [
      "I use PyTorch and Hugging Face Transformers to work with models, and vLLM for inference serving.",
      "My toolkit covers both training and running models. The practical software matters alongside the research idea.",
      "I also work with MCP and n8n for agent workflows. Those help connect model-based systems with other tools.",
    ],
  },
  'skill:agents-databases': {
    label: 'Connecting the pieces',
    lines: [
      "I combine agent workflows with retrieval tools such as Qdrant, Milvus, and FAISS. This is where information gets organized and found.",
      "My backend toolkit includes FastAPI and LangChain. I use these kinds of tools to connect retrieval and model workflows.",
      "I work with vector databases to support similarity search. They help retrieval systems find information related to a question.",
    ],
  },
  'skill:programming-languages': {
    label: 'Programming and systems',
    lines: [
      "My programming toolkit includes Python and C/C++. Different research problems call for different tools.",
      "My programming toolkit includes Git and Linux alongside the languages here. Research code needs a working home too!",
      "I use programming for model experiments and algorithms. These are some of the building blocks underneath my research.",
    ],
  },
  'skill:human-languages': {
    label: 'Human languages',
    lines: [
      "I'm a native Indonesian speaker, and I also speak Korean and English. My research often works across languages too.",
      "My language certifications include TOPIK Level 6, TOEIC 955, and IELTS Academic 7.5. The exact scores are listed here.",
      "I work with Indonesian, Korean, and English. This card is about the languages with people on the other end!",
    ],
  },
  'tech:PyTorch': {
    label: 'PyTorch',
    lines: [
      "I use PyTorch in my model research and teaching labs. It's part of both building models and explaining them.",
      "My BUFS and UNIST research includes PyTorch. It's one of the tools behind the experiments described here.",
      "I also supported hands-on PyTorch exercises as a teaching assistant. Working through code helps connect the concepts.",
    ],
  },
  'tech:Hugging Face': {
    label: 'Hugging Face',
    lines: [
      "I use Hugging Face Transformers for model work, including fine-tuning workflows in my Korean handwriting project.",
      "My teaching labs included Hugging Face Transformers. It's also part of the toolkit I use in research.",
      "I built LoRA fine-tuning workflows with Hugging Face Transformers for the handwriting agent. This tool supports that model-training work.",
    ],
  },
  'tech:Python': {
    label: 'Python',
    lines: [
      "Python is my primary programming language. It connects much of my model research and backend work.",
      "I work with Python alongside tools such as PyTorch and FastAPI. One language, quite a few different jobs.",
      "My toolkit starts with Python, then branches into model training, retrieval, and APIs. You'll see those tools throughout the projects.",
    ],
  },
  'tech:FastAPI': {
    label: 'FastAPI',
    lines: [
      "I used FastAPI in the Daewoong regulatory agent. It belongs to the backend side of my toolkit.",
      "My stack includes FastAPI for backend services. Research tools also need a way to connect with applications.",
      "I list FastAPI in projects such as Silla Road, alongside the retrieval and model tools powering the service.",
    ],
  },
  'tech:PostgreSQL': {
    label: 'PostgreSQL',
    lines: [
      "I use PostgreSQL for data and vector storage. It's part of the stack behind PharmaAgent OS.",
      "My PharmaAgent OS project includes PostgreSQL and pgvector. Those belong to the information-storage side of the system.",
      "I work with databases as well as models. PostgreSQL is one of the tools that helps keep a service's information organized.",
    ],
  },
  'tech:Next.js': {
    label: 'Next.js',
    lines: [
      "I use Next.js for web applications. PharmaAgent OS is one project where it appears in my stack.",
      "My toolkit includes Next.js alongside backend and model tools. This part helps put an interface around the work.",
      "I built the PharmaAgent OS research workspace with a stack that includes Next.js. Its live link is on the project card.",
    ],
  },
  'tech:Slack': {
    label: 'Slack',
    lines: [
      "I use Slack for team collaboration. The toolkit includes a place for conversations as well as code.",
      "My collaboration tools include Slack. Research projects involve people exchanging ideas alongside the technical work.",
      "I list Slack here for team communication. Every tool in the stack doesn't have to train a model!",
    ],
  },
};
