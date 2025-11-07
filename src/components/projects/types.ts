export type ProjectType = "Web" | "Mobile" | "Systems" | "All";
export type SoftwareStatus = "Available" | "Sold";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string; // For AI tool
  image: string;
  dataAiHint?: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  projectType: ProjectType;
  status: SoftwareStatus;
  price?: number;
}
