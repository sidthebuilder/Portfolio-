import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import resumeData from "../data/data_v3.json";

// Projects Hook - Using static data for GitHub Pages
export function useProjects() {
  return useQuery({
    queryKey: ["/api/projects"],
    queryFn: async () => {
      // Transform resumeData.json projects to match UI expectations
      return resumeData.projects.map((p: any) => ({
        id: p.name,
        title: p.name,
        description: p.description,
        techStack: p.stack ? p.stack.split(", ") : [],
        link: p.url || null,
        github: (p.url && p.url.includes("github")) ? p.url : null
      }));
    },
  });
}

// Skills Hook - Using static data for GitHub Pages
export function useSkills() {
  return useQuery({
    queryKey: ["/api/skills"],
    queryFn: async () => {
      // Transform skills object to array of { name, category }
      const skillList: { id: string; name: string; category: string }[] = [];

      // Use technicalSkills from resumeData
      if (resumeData.technicalSkills) {
        Object.entries(resumeData.technicalSkills).forEach(([category, skillsStr]) => {
          // Type cast skillsStr to string since it comes from JSON
          const names = (skillsStr as string).split(", ");
          names.forEach((name, index) => {
            skillList.push({
              id: `${category}-${index}`,
              name,
              category
            });
          });
        });
      }
      return skillList;
    },
  });
}

// Contact Mutation Hook - Disabled for static GitHub Pages
export function useContact() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // For GitHub Pages, we can't submit to a backend
      // Return a success message but don't actually send
      console.log("Contact form submission (static mode):", data);

      // Simulate a successful response
      return {
        id: Date.now(),
        ...data,
        createdAt: new Date().toISOString(),
      };
    },
  });
}
