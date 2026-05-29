import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import type { Project } from '../types';

type ProjectFilter = 'All' | 'Fullstack' | 'Frontend';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('All');

  // Filter logic
  const filteredProjects = projectsData.filter((project: Project) => {
    if (filter === 'All') return true;
    if (filter === 'Fullstack') {
      return project.techStack.includes('Spring Boot') || project.techStack.includes('MySQL');
    }
    if (filter === 'Frontend') {
      return !project.techStack.includes('Spring Boot') && !project.techStack.includes('MySQL');
    }
    return true;
  });

  // Separate featured and standard projects for the layout
  const featuredProject = filteredProjects.find((p) => p.featured);
  const standardProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden px-6">
      
      {/* Background neon elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects Showcase" subtitle="Dự án nổi bật" />

        {/* Filter Navigation */}
        <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-16">
          {(['All', 'Fullstack', 'Frontend'] as ProjectFilter[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wider transition-all duration-300 border ${
                filter === tab
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow-lg shadow-blue-500/25'
                  : 'bg-slate-900/60 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Display Container */}
        <div className="space-y-12">
          
          {/* 1. Featured Project - Displays at the top taking full width */}
          <AnimatePresence mode="popLayout">
            {featuredProject && (
              <motion.div
                key={featuredProject.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={featuredProject} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* 2. Standard Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {standardProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
