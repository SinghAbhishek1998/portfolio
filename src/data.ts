export const personalInfo = {
  name: 'Abhishek Singh',
  title: 'Deep Learning & Multimodal AI Researcher',
  email: 'abhishek.189301112@gmail.com',
  phone: '+91-9807240109',
  location: 'Prayagraj, India',
  linkedin: 'linkedin.com/in/abhishek-singh-546a7116a',
  linkedinUrl: 'https://www.linkedin.com/in/abhishek-singh-546a7116a',
}

export const researchAreas = [
  {
    number: '01', icon: 'cube', title: '3D Vision & Neural Rendering',
    description: 'Researching 3D reconstruction and neural representations of visual environments, with particular interest in Neural Radiance Fields and neural rendering.',
    topics: ['3D Reconstruction', 'Neural Radiance Fields', 'Neural Rendering', '3D Scene Representation', 'Computer Vision'],
  },
  {
    number: '02', icon: 'spark', title: 'Generative & Deep Learning',
    description: 'Exploring deep generative models and modern neural architectures for visual understanding, synthesis and representation learning.',
    topics: ['CNNs', 'GANs', 'Diffusion Models', 'Deep Generative Models', 'Representation Learning'],
  },
  {
    number: '03', icon: 'layers', title: 'Multimodal AI & LLMs',
    description: 'Developing multimodal systems that combine visual and textual information with large language models for detection, reasoning and generation.',
    topics: ['Multimodal LLMs', 'Vision-Language Models', 'LLMs', 'Multimodal Reasoning', 'OCR', 'RAG', 'Generative AI'],
  },
]

export const journey = [
  ['2018–2022', 'B.Tech in Computer Science & Engineering', 'Manipal University Jaipur'],
  ['2023–2025', 'M.Tech in Computer Science & Engineering — Data Science', 'Indian Institute of Information Technology, Lucknow'],
  ['Aug 2025 – Oct 2025', 'Junior Research Fellow', 'Indian Institute of Technology Roorkee · DRDO-funded research project'],
  ['Dec 2025 – Present', 'Junior Research Fellow', 'MNNIT Allahabad · Deep Learning · Computer Vision · 3D Reconstruction · Generative AI · Medical Imaging'],
  ['2026', 'IEEE DSAA 2026', 'Accepted research paper'],
  ['2027', 'Technical Program Committee Member', 'International Conference on Multimedia Modeling (MMM 2027)'],
]

export const experience = [
  {
    short: 'MNNIT Allahabad', institution: 'Motilal Nehru National Institute of Technology Allahabad', role: 'Junior Research Fellow', period: 'Dec 2025 – Present',
    description: 'Researching advanced deep learning and computer vision approaches for medical imaging and intelligent diagnostic systems.',
    highlights: [
      ['3D Reconstruction', 'Researching techniques for reconstructing and representing 3D information from visual data.'],
      ['Neural Radiance Fields', 'Exploring Neural Radiance Fields and neural rendering approaches for learning representations of visual scenes.'],
      ['GANs & CNNs', 'Working with generative and convolutional architectures for visual representation learning and image understanding.'],
      ['Diffusion Models', 'Exploring modern diffusion-based generative approaches for image synthesis and representation learning.'],
      ['Medical Imaging', 'Designing AI models for a Portable 3D X-ray Imaging Diagnostic System aimed at early detection of TB and COPD.'],
    ],
    tags: ['3D Reconstruction', 'NeRF', 'Neural Rendering', 'GANs', 'CNNs', 'Diffusion Models', 'Medical Imaging', 'Deep Learning', 'Transformers', 'ViTs'],
  },
  {
    short: 'IIT Roorkee', institution: 'Indian Institute of Technology Roorkee', role: 'Junior Research Fellow', period: 'Aug 2025 – Oct 2025',
    description: 'Technique for Context-Based Security Analysis of Platform · DRDO-funded project.',
    highlights: [
      ['Literature survey', 'Conducted a literature survey on cryptographic algorithms used in secure platforms.'],
      ['Security analysis', 'Identified limitations of conventional approaches and emphasized lightweight cryptography for resource-constrained systems.'],
    ],
    tags: ['DRDO', 'Security', 'Cryptography', 'Secure Platforms'],
  },
]

export const education = [
  { degree: 'M.Tech', field: 'Computer Science & Engineering — Data Science', institute: 'Indian Institute of Information Technology, Lucknow', period: 'July 2023 – June 2025', cgpa: '7.93 / 10', courses: ['Big Data', 'Deep Learning', 'Natural Language Processing', 'Machine Learning'] },
  { degree: 'B.Tech', field: 'Computer Science & Engineering', institute: 'Manipal University Jaipur', period: 'July 2018 – June 2022', cgpa: '8.10 / 10', courses: ['Operating Systems', 'Computer Networks', 'Data Structures & Algorithms', 'Database Management Systems', 'Object-Oriented Programming'] },
]

export const projects = [
  {
    id: '01', name: 'ZS-OffDR', title: 'Zero-Shot Offensive Meme Detection and Reasoning', technologies: ['Python', 'PyTorch', 'VLMs'],
    description: 'Built ZS-OffDR, a multitask framework for classifying offensive memes and generating zero-shot reasoning using image and OCR-extracted Hindi text from 7,329 memes.',
    highlights: ['+8.4% F1 on Level-1 Offensive/Non-Offensive classification', '+5.3% F1 on Level-2 Implicit/Explicit classification', 'Qwen2.5-VL, Gemini Pro, DeepSeek-VL and LLaVA-1.5', 'Natural-language reasoning without additional training', 'Benchmarked explanation quality using perplexity and semantic similarity', '250 human-written explanations', '32% inference-time reduction through batch optimization'],
    pipeline: ['Meme', 'Image / OCR', 'VLM', 'Classification', 'Reasoning'],
    featured: true,
  },
  {
    id: '02', name: 'CliniQ', title: 'MedQA using DeepSeek-8B', technologies: ['Python', 'LoRA', 'Unsloth', 'Hugging Face'],
    description: 'AI-driven medical question-answering system built around DeepSeek-8B.',
    highlights: ['LoRA fine-tuning', 'Approximately 50% model compression', 'Chain-of-Thought prompting', '2× training acceleration using Unsloth', 'Weights & Biases tracking'], pipeline: [], featured: false,
  },
  {
    id: '03', name: 'AskTube', title: 'YouTube QA Chatbot', technologies: ['LangChain', 'Streamlit', 'FAISS', 'GenAI'],
    description: 'A transcript-driven retrieval-augmented chatbot for context-aware video question answering.',
    highlights: ['FAISS semantic retrieval', 'Optimized chunking and embeddings', 'Prompt engineering', 'Reduced hallucinations', 'Interactive Streamlit UI'], pipeline: [], featured: false,
  },
]

export const skills: [string, string[]][] = [
  ['Programming & Tools', ['Python', 'C/C++', 'SQL', 'Jupyter Notebook', 'Kaggle Notebook']],
  ['Computer Vision & 3D', ['CNNs', '3D Reconstruction', 'Neural Radiance Fields', 'Neural Rendering', 'Computer Vision']],
  ['Generative Modeling', ['GANs', 'Diffusion Models', 'Generative AI', 'Deep Generative Models']],
  ['Multimodal AI', ['Multimodal LLMs', 'Vision-Language Models', 'Multimodal Reasoning', 'OCR']],
  ['NLP & Retrieval', ['LLMs', 'Retrieval-Augmented Generation', 'LangChain', 'NLP', 'Semantic Retrieval']],
  ['Deep Learning', ['CNN', 'RNN', 'LSTM', 'GRU', 'Transformers', 'Transfer Learning']],
  ['Frameworks', ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Hugging Face', 'Pandas', 'NumPy', 'Hadoop']],
]

export const researchInterests = ['3D Computer Vision', '3D Reconstruction', 'Neural Radiance Fields', 'Neural Rendering', 'Computer Vision', 'GANs', 'Diffusion Models', 'Generative AI', 'Multimodal Large Language Models', 'Vision-Language Models', 'Multimodal Reasoning', 'Large Language Models', 'Natural Language Processing', 'Medical Imaging', 'Retrieval-Augmented Generation', 'AI for Healthcare', 'Trustworthy AI']

export const certifications = [['Deep Learning', 'GUVI · IIT Madras'], ['Machine Learning', 'Verzeo']]
