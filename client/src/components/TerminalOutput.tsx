import { motion } from "framer-motion";
import { type Project, type Skill } from "@shared/schema";
import { ExternalLink, Github } from "lucide-react";

interface TerminalOutputProps {
  type: 'text' | 'error' | 'success' | 'projects' | 'skills' | 'help' | 'about' | 'contact';
  content?: string;
  data?: any;
}

export function TerminalOutput({ type, content, data }: TerminalOutputProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  if (type === 'error') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-red-500 mb-2"
      >
        [ERROR] {content}
      </motion.div>
    );
  }

  if (type === 'success') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-green-400 mb-2 font-bold"
      >
        [SUCCESS] {content}
      </motion.div>
    );
  }

  if (type === 'help') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-4 space-y-1 text-sm md:text-base"
      >
        <p className="font-bold border-b border-primary/30 pb-1 mb-2">AVAILABLE COMMANDS:</p>
        <div className="grid grid-cols-[100px_1fr] gap-2">
          <span className="text-primary font-bold">about</span>
          <span className="opacity-80">Display system information and bio</span>

          <span className="text-primary font-bold">projects</span>
          <span className="opacity-80">List project directory</span>

          <span className="text-primary font-bold">skills</span>
          <span className="opacity-80">Analyze technical capabilities</span>

          <span className="text-primary font-bold">chat, ask</span>
          <span className="opacity-80">Interact with VERDANT system</span>

          <span className="text-primary font-bold">resume</span>
          <span className="opacity-80">Generate PDF Curriculum Vitae</span>

          <span className="text-primary font-bold">contact</span>
          <span className="opacity-80">Open communication frequency</span>

          <span className="text-primary font-bold">clear</span>
          <span className="opacity-80">Clear terminal buffer</span>

          <span className="text-primary font-bold">theme</span>
          <span className="opacity-80">Cycle visual interface profiles</span>
        </div>
      </motion.div>
    );
  }

  if (type === 'projects') {
    const projects = data as Project[];
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.1 }}
            className="border border-primary/40 p-4 bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold">./{project.title}</h3>
              <div className="flex gap-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <Github size={16} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm opacity-80 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.techStack?.map(tech => (
                <span key={tech} className="px-1.5 py-0.5 border border-primary/30 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (type === 'skills') {
    const skills = data as Skill[];
    // Group by category
    const grouped = skills.reduce((acc, skill) => {
      acc[skill.category] = [...(acc[skill.category] || []), skill];
      return acc;
    }, {} as Record<string, Skill[]>);

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {Object.entries(grouped).map(([category, items], i) => (
          <motion.div
            key={category}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
            className="border border-primary/40 p-4 bg-primary/5 transition-colors cursor-default"
          >
            <h3 className="text-lg font-bold mb-3 border-b border-primary/30 pb-2">
              {category.replace(/_/g, " ")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  if (type === 'about') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-4 max-w-2xl"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="border border-primary/30 p-1 shrink-0">
            {/* Dynamic ASCII-like avatar placeholder */}
            <div className="w-24 h-24 bg-primary/10 flex items-center justify-center text-xs font-mono text-center leading-none overflow-hidden select-none">
              01010101
              10101010
              00110011
              11001100
              01010101
              10101010
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">SYSTEM USER: SHASHANK</h2>
            <p className="text-sm opacity-70 mb-3">AI Systems Engineer | Full-Stack Developer | AI Training Specialist</p>
            <p className="mb-2 opacity-90 leading-relaxed">
              AI Systems Engineer and Full-Stack Developer with 4+ years of experience building
              production-grade AI systems, LLM training pipelines, and scalable full-stack platforms.
              Specialized in multi-agent architectures, automation workflows, and AI evaluation for
              enterprise and startup environments.
            </p>
            <p className="opacity-70 text-sm">
              Current Status: <span className="text-green-400 animate-pulse">ONLINE</span>
            </p>
            <p className="opacity-70 text-sm">
              Location: Remote // Worldwide
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (type === 'contact') {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-4 space-y-2 max-w-2xl"
      >
        <p className="font-bold border-b border-primary/30 pb-1 mb-4">CONTACT_CHANNELS_OPEN</p>

        <div className="grid gap-3">
          {[
            { label: "LINKEDIN", value: "shashank-kumar-772a2035b", href: "https://www.linkedin.com/in/shashank-kumar-772a2035b/" },
            { label: "GITHUB", value: "sidthebuilder", href: "https://github.com/sidthebuilder" },
            { label: "EMAIL", value: "shashankchoudhary792@gmail.com", href: "mailto:shashankchoudhary792@gmail.com" }
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              custom={i}
              className="flex items-center hover:bg-primary/10 p-2 border border-transparent hover:border-primary/30 transition-all group cursor-pointer"
            >
              <span className="w-24 font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                {item.label}:
              </span>
              <span className="text-primary underline decoration-dotted group-hover:decoration-solid flex-1">
                {item.value}
              </span>
              <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
            </motion.a>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-4 text-sm opacity-60"
        >
          [STATUS] Ready for incoming transmission.
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-1 whitespace-pre-wrap break-words"
    >
      {content}
    </motion.div>
  );
}
