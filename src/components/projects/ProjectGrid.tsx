'use client';

import { useState } from 'react';
import type { Project, ProjectType } from './types';
import { ProjectCard } from './ProjectCard';
import { ProjectFilters } from './ProjectFilters';
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedType, setSelectedType] = useState<ProjectType>('All');

  const filteredProjects = selectedType === 'All'
    ? projects
    : projects.filter((project) => project.projectType === selectedType);

  return (
    <div>
      <ProjectFilters selectedType={selectedType} onFilterChange={setSelectedType} />
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="text-center text-muted-foreground py-8">No projects found for this category.</p>
      )}
    </div>
  );
}
