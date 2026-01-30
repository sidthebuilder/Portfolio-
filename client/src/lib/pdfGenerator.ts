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

    // Helper function to add text with word wrap
    const addText = (text: string, size: number, style: 'normal' | 'bold' = 'normal', indent: number = 0) => {
        doc.setFontSize(size);
        doc.setFont('helvetica', style);
        const lines = doc.splitTextToSize(text, rightMargin - leftMargin - indent);
        lines.forEach((line: string) => {
            if (y > 280) {
                doc.addPage();
                y = 20;
            }
            doc.text(line, leftMargin + indent, y);
            y += lineHeight;
        });
    };

    // Header
    addText('SHASHANK KUMAR', 16, 'bold');
    addText('AI Systems Engineer | Full-Stack Developer | AI Training Specialist', 10, 'normal');

    // Email with hyperlink
    doc.setFontSize(9);
    doc.text('Baraut, Baghpat, India | ', leftMargin, y);
    const locationWidth = doc.getTextWidth('Baraut, Baghpat, India | ');
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('shashankchoudhry792@gmail.com', leftMargin + locationWidth, y, {
        url: 'mailto:shashankchoudhry792@gmail.com'
    });
    doc.setTextColor(0, 0, 0);
    y += lineHeight;

    // GitHub link
    doc.setFontSize(9);
    doc.text('GitHub: ', leftMargin, y);
    const githubLabelWidth = doc.getTextWidth('GitHub: ');
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('github.com/sidthebuilder', leftMargin + githubLabelWidth, y, {
        url: 'https://github.com/sidthebuilder'
    });
    doc.setTextColor(0, 0, 0);
    y += lineHeight;

    addText('Available for worldwide freelance and contract engagements • Rates discussed based on scope and requirements', 9, 'normal');

    y += sectionSpacing;

    // Professional Summary
    addText('PROFESSIONAL SUMMARY', 12, 'bold');
    y += 2;
    addText('AI Systems Engineer and Full-Stack Developer with 4+ years of experience building production-grade AI systems, LLM training pipelines, and scalable full-stack platforms. Specialized in multi-agent architectures, automation workflows, and AI evaluation for enterprise and startup environments.', 9, 'normal');

    y += sectionSpacing;

    // Flagship Projects
    addText('FLAGSHIP PROJECTS', 12, 'bold');
    y += 2;

    addText('Verdant AI: Multi-Agent Orchestration System', 10, 'bold');

    // Verdant AI GitHub link
    doc.setFontSize(9);
    doc.text('GitHub: ', leftMargin, y);
    const verdantGithubWidth = doc.getTextWidth('GitHub: ');
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('github.com/sidthebuilder/verdant-ai', leftMargin + verdantGithubWidth, y, {
        url: 'https://github.com/sidthebuilder/verdant-ai'
    });
    doc.setTextColor(0, 0, 0);
    y += lineHeight;

    addText('Status: Active Development', 9, 'normal');
    addText('High-performance multi-agent orchestration system designed for complex problem-solving domains including physics simulation, time-series forecasting, and autonomous code generation. Production-grade system.', 9, 'normal');
    addText('• Router-Delegate Architecture with central intelligence engine routing tasks to specialized micro-agents', 9, 'normal');
    addText('• Robust Adapter Pattern wrapping complex research modules in fault-tolerant adapters for stability', 9, 'normal');
    addText('• Micro-Agent Swarm with specialized agents for Coding, Mathematics, Creative Writing, Web Research, and Physics Simulation', 9, 'normal');
    addText('• Full-Stack Implementation with FastAPI backend, Next.js 14 frontend, Docker containerization, and microservices', 9, 'normal');
    addText('• Technologies: Python, FastAPI, Next.js 14, Genesis Physics Engine, Docker, RESTful APIs', 9, 'normal');

    y += 4;

    addText('NeuroSim Engine: Advanced AI Character Simulation System', 10, 'bold');

    // NeuroSim GitHub link
    doc.setFontSize(9);
    doc.text('GitHub: ', leftMargin, y);
    const neurosimGithubWidth = doc.getTextWidth('GitHub: ');
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('github.com/sidthebuilder/-NeuroSim-Engine', leftMargin + neurosimGithubWidth, y, {
        url: 'https://github.com/sidthebuilder/-NeuroSim-Engine'
    });
    doc.setTextColor(0, 0, 0);
    y += lineHeight;

    addText('Status: Actively Maintained', 9, 'normal');
    addText('Advanced AI character simulation system featuring emotional intelligence, decision-making AI, and dynamic behavior modeling for game development and interactive simulations.', 9, 'normal');
    addText('• Traits and Emotions System with comprehensive framework for psychologically realistic AI characters', 9, 'normal');
    addText('• Goals and Desires Engine providing motivation-based AI driving character actions', 9, 'normal');
    addText('• Decision-Making AI with advanced behavior modeling using conditional branching and emotion trees', 9, 'normal');
    addText('• Physics Integration with Isaac Sim USD and PhysX engine for physics-based AI training scenarios', 9, 'normal');
    addText('• Technologies: Python, Isaac Sim, USD, PhysX, Behavior Trees, Emotion Modeling Systems', 9, 'normal');

    y += sectionSpacing;

    // Professional Experience
    addText('PROFESSIONAL EXPERIENCE', 12, 'bold');
    y += 2;

    addText('AI Training Specialist and Voice Artist', 10, 'bold');
    addText('Outlier AI | Remote', 9, 'normal');
    addText('2022 - Present', 9, 'normal');
    addText('• Annotated and QA-validated 10,000+ multilingual NLP training samples, speech recognition, and voice AI systems with 98% accuracy rate.', 9, 'normal');
    addText('• Designed and implemented ontology management systems for optimizing LLM and voice AI training data consistency and quality across multiple domains.', 9, 'normal');
    addText('• Led prompt complexity evaluation initiatives and metadata accuracy reviews for frontier AI models, improving model alignment and safety.', 9, 'normal');
    addText('• Conducted specialized voice annotation for speech-to-text and voice recognition models across 20+ languages.', 9, 'normal');
    addText('• Collaborated with cross-functional AI research teams to deliver high-quality labeled datasets for production model fine-tuning.', 9, 'normal');

    y += 4;

    addText('AI Trainer and Evaluator', 10, 'bold');
    addText('OneForma | Remote', 9, 'normal');
    addText('2023 - Present', 9, 'normal');
    addText('• Conducted LLM evaluation and fine-tuning for conversational AI applications, focusing on response quality, safety alignment, and user satisfaction metrics.', 9, 'normal');
    addText('• Developed comprehensive training protocols for prompt engineering, model ranking, and AI alignment workflows based on industry best practices.', 9, 'normal');
    addText('• Created technical documentation and best-practice guides for AI annotation teams and model evaluation standards.', 9, 'normal');
    addText('• Maintained ongoing collaboration on specialized AI training projects with consistent delivery and zero-rejection quality focus.', 9, 'normal');
    addText('• Completed 500+ evaluation tasks with zero rejections, earning Top Performer status.', 9, 'normal');

    y += 4;

    addText('Freelance Full-Stack Developer', 10, 'bold');
    addText('Fiverr | Remote', 9, 'normal');
    addText('2020 - 2024', 9, 'normal');
    addText('• Designed and built 30+ custom WordPress and Webflow websites integrated with AI chatbot solutions, CRM systems, and advanced automation workflows.', 9, 'normal');
    addText('• Developed full-stack applications using Python, Flask, JavaScript, React, and Node.js from database schema to responsive frontend deployment with 99% uptime.', 9, 'normal');
    addText('• Implemented advanced SEO strategies resulting in 150% organic traffic growth for 20+ client projects.', 9, 'normal');
    addText('• Created AI-powered e-learning modules with automated assessments, achieving 4.8 out of 5 average learner satisfaction rating.', 9, 'normal');
    addText('• Automated 500+ customer service and business workflows using n8n, REST APIs, and third-party integrations, processing 1000+ monthly transactions.', 9, 'normal');
    addText('• Delivered complete web solutions including database design, API development, deployment, and performance optimization.', 9, 'normal');

    y += sectionSpacing;

    // Technical Skills
    addText('TECHNICAL SKILLS', 12, 'bold');
    y += 2;
    addText('Programming Languages:', 9, 'bold');
    addText('Python, JavaScript, TypeScript, Bash, SQL', 9, 'normal');
    y += 2;
    addText('Web Development:', 9, 'bold');
    addText('HTML5, CSS3, React, Next.js 14, FastAPI, Flask, Node.js, Express, RESTful APIs, Responsive Design, WordPress, Webflow', 9, 'normal');
    y += 2;
    addText('AI and Machine Learning:', 9, 'bold');
    addText('LLM Fine-tuning, Prompt Engineering, Model Alignment, GPT-4, Claude, Hugging Face, Isaac Sim, Behavior Modeling, Genesis Physics Engine, Evaluation Frameworks, RLHF Concepts', 9, 'normal');
    y += 2;
    addText('Automation and Tools:', 9, 'bold');
    addText('n8n, Docker, AWS, Git, Figma, Postman, Scale AI Platform, OpenAI API, Anthropic Claude', 9, 'normal');

    y += sectionSpacing;

    // Education
    addText('EDUCATION', 12, 'bold');
    y += 2;
    addText('Bachelor of Science in Computer Science', 10, 'bold');
    addText('University of the People', 9, 'normal');
    addText('2025 - Present (In Progress)', 9, 'normal');
    addText('Coursework: Algorithms, Data Structures, Software Engineering, Database Systems, Artificial Intelligence Fundamentals, System Design', 9, 'normal');

    y += sectionSpacing;

    // Certifications
    addText('CERTIFICATIONS', 12, 'bold');
    y += 2;
    addText('• CS50: Introduction to Computer Science, Harvard University (edX), 2024', 9, 'normal');
    addText('• Google Analytics Certification, Google Digital Garage, 2023', 9, 'normal');
    addText('• Google Ads Certification, Google Digital Garage, 2023', 9, 'normal');
    addText('• Digital Marketing Certification, Google Digital Garage, 2023', 9, 'normal');
    addText('• Scale AI Annotation Specialist Certification, 2022', 9, 'normal');
    addText('• Advanced Prompt Engineering for LLMs, Self-certified through 100+ production projects, 2024', 9, 'normal');

    y += sectionSpacing;

    // Additional Information
    addText('ADDITIONAL INFORMATION', 12, 'bold');
    y += 2;
    addText('• Languages: English (Fluent), Hindi (Native)', 9, 'normal');
    addText('• GitHub Portfolio: 9 active repositories with Verdant AI and NeuroSim Engine', 9, 'normal');
    addText('• Upwork Profile: 4.8+ rating, 100% repeat rate', 9, 'normal');
    addText('• Outlier AI Status: Certified Specialist with 10,000+ completed annotations', 9, 'normal');
    addText('• OneForma Status: Top Performer with zero rejections', 9, 'normal');
    addText('• Engagement Model: Flexible pricing based on project scope, complexity, and timeline', 9, 'normal');

    // Save the PDF
    doc.save('Shashank_Kumar_Resume.pdf');
}
