import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { projects, skills, messages, experience, education, certifications } from "@shared/schema";
import { db } from "./db";
import { chatWithAI } from "./lib/gemini";
import resumeData from "./data/resumeData.json";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Skills
  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  // Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const response = await chatWithAI(message, history);
      res.json({ response });
    } catch (error) {
      res.status(500).json({ error: "Failed to process chat message" });
    }
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.')
        });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Seed Data (if empty)
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  console.log("Syncing database with resumeData.json...");

  // 1. Projects: ALWAYS sync (Delete & Re-insert) to reflect latest GitHub content
  await db.delete(projects);
  await db.insert(projects).values(resumeData.projects.map(p => ({
    title: p.name,
    // Use the description directly. Bullets are appended if present and we want them.
    // We format them cleanly: Description + \n\n + Bullets
    description: p.description + (p.bullets && p.bullets.length > 0 ? "\n\n" + p.bullets.map(b => "- " + b).join("\n") : ""),
    techStack: p.stack ? p.stack.split(", ") : [],
    link: p.url || null,
    github: p.name.includes("GitHub") || (p.url && p.url.includes("github")) ? p.url : null
  })));

  // 2. Skills: Only insert if empty
  const existingSkills = await storage.getSkills();
  if (existingSkills.length === 0 && resumeData.technicalSkills) {
    const skillList = [];
    Object.entries(resumeData.technicalSkills).forEach(([category, skillsStr]) => {
      const names = skillsStr.split(", ");
      names.forEach(name => {
        skillList.push({ name, category });
      });
    });
    if (skillList.length > 0) {
      await db.insert(skills).values(skillList);
    }
  }

  // 3. Experience: Only insert if empty
  const existingExperience = await db.select().from(experience);
  if (existingExperience.length === 0 && resumeData.experience) {
    await db.insert(experience).values(resumeData.experience.map(e => ({
      role: e.role,
      company: e.company,
      period: e.period,
      details: e.details
    })));
  }

  // 4. Education: Only insert if empty
  const existingEducation = await db.select().from(education);
  if (existingEducation.length === 0 && resumeData.education) {
    await db.insert(education).values(resumeData.education.map(e => ({
      institution: e.institution,
      degree: e.degree,
      year: e.year,
      status: e.status || "Completed"
    })));
  }

  // 5. Certifications: Only insert if empty
  const existingCerts = await db.select().from(certifications);
  if (existingCerts.length === 0 && resumeData.certifications) {
    await db.insert(certifications).values(resumeData.certifications.map(c => ({
      name: c
    })));
  }
}
