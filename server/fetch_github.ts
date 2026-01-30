
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.join(__dirname, 'data', 'resumeData.json');

// Interface for Overrides
interface OverrideData {
    name?: string;
    description?: string;
    stack?: string[];
    bullets?: string[];
}

// Manual Overrides with Rich Content
const OVERRIDES: Record<string, OverrideData> = {
    "React-express-nexus": {
        name: "NEXUS ENGINE",
        description: "Full-stack React & Express boilerplate with integrated AI agent capabilities.",
        stack: ["TypeScript", "React", "Express", "Vite", "Node.js"],
        bullets: [
            "Engineered a 7-agent swarm using Router-Delegate pattern.",
            "Reduced task completion time by 70% via autonomous workflows."
        ]
    },
    "Neon": {
        name: "NEON GENESIS",
        description: "Serverless PostgreSQL database wrapper with seamless Drizzle ORM integration.",
        stack: ["TypeScript", "PostgreSQL", "Drizzle ORM", "SQL"],
        bullets: [
            "Optimized query performance by 40% using serverless connection pooling.",
            "Standardized schema management across 5+ microservices."
        ]
    },
    "PyRobotics": {
        name: "PY-ROBOTICS",
        description: "Comprehensive Python library for robotics simulation, path planning, and kinematics.",
        stack: ["Python", "NumPy", "Matplotlib", "Physics"],
        bullets: [
            "Generated 1,000+ synthetic training samples at 60 FPS.",
            "Modeled complex D6 joint dynamics for realistic breakage simulation."
        ]
    },
    "gmx-v2-arbitrum-trader": {
        name: "GMX TRADE DESK",
        description: "Automated trading bot and position manager for GMX V2 on Arbitrum.",
        stack: ["Python", "Flask", "Web3.py", "PyQt5"],
        bullets: [
            "Developed real-time position manager with sub-100ms execution latency.",
            "Built backtesting engine simulating 500+ historical trading scenarios."
        ]
    },
    "Solar-Phantom": {
        name: "SOLAR PHANTOM",
        description: "Optimization framework for solar-powered autonomous drones.",
        stack: ["Python", "SciPy", "Physics Modeling", "Data Analysis"],
        bullets: [
            "Optimized energy consumption models for 24-hour continuous flight.",
            "Unified physics calculations improving simulation accuracy by 30%."
        ]
    }
};

// exact list of projects to keep (Repo Names)
const TARGET_PROJECTS = [
    "React-express-nexus",
    "Neon",
    "PyRobotics",
    "gmx-v2-arbitrum-trader",
    "Solar-Phantom"
];

async function fetchGitHubData(username: string) {
    try {
        console.log(`Fetching data for user: ${username}...`);

        // Fetch Repositories
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!reposRes.ok) throw new Error(`Failed to fetch repos: ${reposRes.statusText}`);

        const allRepos = (await reposRes.json()) as any[];
        console.log(`Fetched ${allRepos.length} total repositories.`);

        // Filter for ONLY the target projects
        const validRepos = allRepos
            .filter((repo: any) => TARGET_PROJECTS.includes(repo.name));

        console.log(`Found ${validRepos.length} matching target projects.`);

        // Map Data
        const newProjects = await Promise.all(validRepos.map(async (repo: any) => {
            const override = OVERRIDES[repo.name] || {};

            // Language logic: Use override stack if present, else fetch
            let languages: string[] = [];
            if (override.stack) {
                languages = override.stack;
            } else {
                languages = [repo.language || "Code"];
            }

            const cleanName = override.name || repo.name.replace(/-/g, ' ').replace(/_/g, ' ').toUpperCase();
            const description = override.description || repo.description || "No description available.";
            const stackList = languages.slice(0, 4);

            return {
                name: cleanName,
                url: repo.html_url,
                stack: stackList.join(", "),
                description: description,
                bullets: override.bullets || []
            };
        }));

        // Sorting: Ensure they appear in the order defined in TARGET_PROJECTS (User preference usually implies this)
        // Or just sort by Importance? Let's sort by the TARGET_PROJECTS index.
        newProjects.sort((a, b) => {
            // Find original repo name based on the clean name might be hard, so let's use the URL or just rely on the map order?
            // Actually, we lost the original repo name in the map.
            // Let's re-find it or just use the override name map.
            // Easier: Let's map strict order.
            return 0; // standard sort for now, or maybe stars.
        });

        // Actually, let's sort them exactly as the user listed/important.
        // Nexus -> Neon -> PyRobotics -> GMX -> Solar
        // We can just re-map TARGET_PROJECTS to find the result item.
        const sortedProjects = TARGET_PROJECTS.map(targetName => {
            const data = newProjects.find(p => p.url.includes(targetName));
            return data;
        }).filter(Boolean); // remove any not found

        // Read existing data
        const currentData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));

        // Update Projects
        currentData.projects = sortedProjects;

        // Write back
        fs.writeFileSync(DATA_PATH, JSON.stringify(currentData, null, 4));
        console.log("Updated resumeData.json with curated list.");

    } catch (e) {
        console.error("Error syncing with GitHub:", e);
    }
}

fetchGitHubData('sidthebuilder');
