import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import resumeData from "../data/resumeData.json";

// Projects Hook - Using static data for GitHub Pages
export function useProjects() {
  return useQuery({
    queryKey: ["/api/projects"],
    queryFn: async () => {
      // Return static data from resumeData.json
      return resumeData.projects;
    },
  });
}

// Skills Hook - Using static data for GitHub Pages
export function useSkills() {
  return useQuery({
    queryKey: ["/api/skills"],
    queryFn: async () => {
      // Return static data from resumeData.json
      return resumeData.technicalSkills;
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
