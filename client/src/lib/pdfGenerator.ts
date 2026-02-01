import jsPDF from 'jspdf';

export function generateResumePDF() {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    // Set font
    doc.setFont('helvetica');

    let y = 20; // Starting Y position
    const leftMargin = 20;
    const rightMargin = 190;
    const lineHeight = 5;
    const sectionSpacing = 8;
    const bulletIndent = 5;

    // Helper function to add text with word wrap
    const addText = (text: string, size: number, style: 'normal' | 'bold' = 'normal', indent: number = 0) => {
        doc.setFontSize(size);
        doc.setFont('helvetica', style);
        // Calculate max width based on indent
        const maxWidth = rightMargin - leftMargin - indent;
        const lines = doc.splitTextToSize(text, maxWidth);

        lines.forEach((line: string) => {
            if (y > 280) {
                doc.addPage();
                y = 20;
            }
            doc.text(line, leftMargin + indent, y);
            y += lineHeight;
        });
    };

    // --- Header ---
    addText('SHASHANK KUMAR', 16, 'bold');
    addText('AI Systems Engineer and Full-Stack Developer', 10, 'normal');

    // Contact Info Line 1
    doc.setFontSize(9);
    const location = 'Delhi NCR, India | ';
    doc.text(location, leftMargin, y);
    const locWidth = doc.getTextWidth(location);
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('shashankchoudhary792@gmail.com', leftMargin + locWidth, y, { url: 'mailto:shashankchoudhary792@gmail.com' });
    doc.setTextColor(0, 0, 0);
    y += lineHeight;

    // Contact Info Line 2 (Links)
    doc.setFontSize(9);
    const githubText = 'github.com/sidthebuilder';
    doc.setTextColor(0, 0, 255);
    doc.textWithLink(githubText, leftMargin, y, { url: 'https://github.com/sidthebuilder' });
    const githubWidth = doc.getTextWidth(githubText);

    doc.setTextColor(0, 0, 0);
    doc.text(' | ', leftMargin + githubWidth, y);
    const separatorWidth = doc.getTextWidth(' | ');

    doc.setTextColor(0, 0, 255);
    const portUrl = 'https://sidthebuilder.github.io/Terminal-Portfolio';
    doc.textWithLink(portUrl, leftMargin + githubWidth + separatorWidth, y, { url: portUrl });
    doc.setTextColor(0, 0, 0);
    y += lineHeight;

    addText('Available for worldwide freelance and contract engagements', 9, 'normal');
    y += sectionSpacing;

    // --- Professional Summary ---
    addText('PROFESSIONAL SUMMARY', 11, 'bold');
    y += 2;
    addText('AI Systems Engineer with 4+ years of experience architecting intelligent systems and scalable applications. Delivered measurable impact by improving model safety by 25%, building AI agents with 85% task accuracy, and engineering solutions that drove 150% client growth. Combines expertise in LLM fine-tuning, multi-agent architecture, and production-grade deployment.', 9, 'normal');
    y += sectionSpacing;

    // --- Core Competencies ---
    addText('CORE COMPETENCIES', 11, 'bold');
    y += 2;
    addText('Large Language Models (LLMs) | Multi-Agent Systems | RAG Pipelines | FastAPI | Next.js | React | Docker | Python', 9, 'normal');
    y += sectionSpacing;

    // --- Technical Skills ---
    addText('TECHNICAL SKILLS', 11, 'bold');
    y += 2;
    // We format these as bullet-like or just lines. User text has hyphens.
    addText('- AI & Machine Learning: LLM Fine-Tuning (LoRA, DPO), RAG Pipeline Development, Prompt Engineering, Model Evaluation (MT-Bench, HELM), AI Agent Orchestration, NVIDIA Isaac Sim', 9, 'normal');
    addText('- Programming: Python, JavaScript, TypeScript, C#, SQL, Bash', 9, 'normal');
    addText('- Backend Development: FastAPI, Flask, Node.js, Express, PostgreSQL, MongoDB, RESTful APIs', 9, 'normal');
    addText('- Frontend Development: Next.js 14, React, Tailwind CSS, HTML5, CSS3', 9, 'normal');
    addText('- Tools & Platforms: Docker, Git, GitHub Actions, n8n, AWS, Hugging Face, OpenAI API, Anthropic API', 9, 'normal');
    y += sectionSpacing;

    // --- Professional Experience ---
    addText('PROFESSIONAL EXPERIENCE', 11, 'bold');
    y += 2;

    // Job 1
    addText('AI Training and Evaluation Specialist', 10, 'bold');
    addText('Contract for AI Research Platforms (via Upwork, Outlier, OneForma) | Remote', 9, 'normal');
    addText('2024 - Present', 9, 'normal');
    addText('- Improved model safety scores by 25% by designing and executing 500+ adversarial prompts for red-teaming frontier LLMs.', 9, 'normal', bulletIndent);
    addText('- Accelerated data pipeline efficiency by 30% by creating annotation scripts and ontology systems for 10,000+ multilingual NLP samples, maintaining 98% QA accuracy.', 9, 'normal', bulletIndent);
    addText('- Trained and evaluated 3+ major LLMs on reasoning and code-generation tasks, directly contributing to production release cycles.', 9, 'normal', bulletIndent);
    addText('- Consistently rated Top Performer (top 5%) across 1,000+ complex evaluation tasks.', 9, 'normal', bulletIndent);
    y += 4;

    // Job 2
    addText('Freelance AI and Full-Stack Developer', 10, 'bold');
    addText('Fiverr and Direct Clients | Remote', 9, 'normal');
    addText('2021 - 2024', 9, 'normal');
    addText('- Architected 30+ full-stack applications, including 5+ AI-powered SaaS tools that automated workflows for 100+ monthly active users.', 9, 'normal', bulletIndent);
    addText('- Boosted client revenue by 40% for 3 key accounts by building custom RAG chatbots that improved support answer accuracy by 60%.', 9, 'normal', bulletIndent);
    addText('- Drove 150% average increase in organic traffic and automated 500+ business processes, saving clients 20+ hours per week.', 9, 'normal', bulletIndent);
    addText('- Maintained 99.9% uptime and sub-second load times for all deployed applications.', 9, 'normal', bulletIndent);
    y += sectionSpacing;

    // --- Key Projects ---
    addText('KEY PROJECTS', 11, 'bold');
    y += 2;

    // Project 1
    addText('Verdant AI: Multi-Agent Orchestration System', 10, 'bold');
    addText('Python, FastAPI, Llama 3, Docker', 9, 'normal');
    addText('High-performance system that autonomously solves coding and physics problems with 85% success rate.', 9, 'normal');
    addText('- Engineered a 7-agent swarm using Router-Delegate pattern, reducing task completion time by 70%.', 9, 'normal', bulletIndent);
    addText('- Integrated LoRA fine-tuned Llama 3 and GPT-4 via unified adapter layer, handling 100+ concurrent simulations.', 9, 'normal', bulletIndent);
    y += 3;

    // Project 2
    addText('NeuroSim Engine: AI Character Simulation', 10, 'bold');
    addText('C#, Unity, Behavior Trees', 9, 'normal');
    addText('Simulation platform creating psychologically realistic AI agents with dynamic emotional states.', 9, 'normal');
    addText('- Implemented trait-emotion-goal architecture generating 10,000+ unique behavioral sequences for game NPCs.', 9, 'normal', bulletIndent);
    addText('- Reduced AI scripting time by 50% via visual behavior tree editor and modular emotion system.', 9, 'normal', bulletIndent);
    y += 3;

    // Project 3
    addText('GMX TradeDesk: DeFi Trading Automation', 10, 'bold');
    addText('Python, Flask, Web3, PyQt5', 9, 'normal');
    addText('Desktop application for automated trading strategies on GMX V2 perpetuals exchange.', 9, 'normal');
    addText('- Developed real-time position manager monitoring 10+ market indicators with sub-100ms execution latency.', 9, 'normal', bulletIndent);
    addText('- Built backtesting engine simulating 1,000+ historical trading scenarios.', 9, 'normal', bulletIndent);
    y += 3;

    // Project 4
    addText('Isaac Sim Physics: Breakable Object Simulation', 10, 'bold');
    addText('Python, NVIDIA Isaac Sim, PhysX', 9, 'normal');
    addText('Robotics training environment simulating complex breakage dynamics for ML data generation.', 9, 'normal');
    addText('- Created 761-line modular physics simulation featuring configurable D6 joints and progressive damage.', 9, 'normal', bulletIndent);
    addText('- Generated 5,000+ training samples for reinforcement learning models at 60 FPS real-time.', 9, 'normal', bulletIndent);
    y += sectionSpacing;

    // --- Education ---
    addText('EDUCATION', 11, 'bold');
    y += 2;

    // Edu 1
    addText('University of the People', 10, 'bold');
    addText('Bachelor of Science in Computer Science', 9, 'normal');
    y += 2;

    // Edu 2
    addText('Ch. Charan Singh University, Meerut', 10, 'bold');
    addText('Bachelor of Arts', 9, 'normal');
    y += sectionSpacing;

    // --- Certifications ---
    addText('CERTIFICATIONS', 11, 'bold');
    y += 2;
    addText('In Progress', 9, 'bold');
    addText('- CS50: Introduction to Computer Science - Harvard University (edX)', 9, 'normal', bulletIndent);
    addText('- Scale AI Annotation Specialist Certification', 9, 'normal', bulletIndent);
    y += sectionSpacing;

    // --- Additional Information ---
    addText('ADDITIONAL INFORMATION', 11, 'bold');
    y += 2;
    addText('- Languages: English (Fluent), Hindi (Native)', 9, 'normal', bulletIndent);
    addText('- Earned a 4.8/5 average platform rating and consistent 5-star reviews for delivering high-impact solutions', 9, 'normal', bulletIndent);

    // Save
    doc.save('Shashank_Kumar_Resume.pdf');
}
