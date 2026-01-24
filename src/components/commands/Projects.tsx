import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import Usage from "../Usage";

const Projects: React.FC = () => {
  return (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are my high-impact projects. <br />
        Numbers don't lie. Neither does the code.
      </ProjectsIntro>
      {projects.map(({ id, title, desc, metrics, stack }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <div style={{ marginLeft: "20px", color: "#e5e7eb" }}>
            <div style={{ marginBottom: "5px" }}>→ <span style={{ color: "#4af626" }}>{metrics}</span></div>
            <div style={{ marginBottom: "5px", fontSize: "0.9rem", color: "#9ca3af" }}>→ Stack: {stack}</div>
          </div>
          <ProjectDesc style={{ marginLeft: "20px", display: "none" }}>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Verdant AI Orchestrator",
    metrics: "Router-Delegate Architecture • Fail-Safe Inference",
    stack: "Python, FastAPI, Next.js 14, Genesis Physics Engine",
    desc: "High-performance multi-agent swarms for complex problem-solving domains.",
    url: "https://github.com/sidthebuilder/verdant-ai",
  },
  {
    id: 2,
    title: "NeuroSim Engine",
    metrics: "Physics-integrated Emotional Intelligence • Zero Resubmissions",
    stack: "Isaac Sim, USD, PhysX, Behavior Trees",
    desc: "Advanced character simulation with dynamic traits, emotions, and decision-making AI.",
    url: "https://github.com/sidthebuilder/-NeuroSim-Engine",
  },
  {
    id: 3,
    title: "AI Outreach Automation",
    metrics: "92% Accuracy • Reduced manual processing by 80%",
    stack: "Next.js, FastAPI, OpenAI, n8n",
    desc: "Automated cold emailing and follow-ups with personalized AI agents.",
    url: "https://github.com/sidthebuilder",
  },
  {
    id: 4,
    title: "Trading Bot (GMX)",
    metrics: "Risk Management Protocols • Real-time Processing",
    stack: "Python, Web3, Flask, Docker",
    desc: "High-frequency trading bot with automated strategy execution.",
    url: "https://github.com/sidthebuilder",
  },
  {
    id: 5,
    title: "AI E-Learning Platform",
    metrics: "4.8/5 Learner Satisfaction • 30+ Automated Courses",
    stack: "React, Node.js, AI Assessment Engine",
    desc: "Adaptive learning system with real-time automated student assessments.",
    url: "https://github.com/sidthebuilder",
  },
];

export default Projects;
