import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from "../data/projects";
import type { Project } from "../types";

type ProjectFilter = "All" | "Fullstack" | "Frontend";

const filterProjects = (projects: Project[], filter: ProjectFilter) => {
  if (filter === "All") return projects;
  return projects.filter((project) => project.category === filter);
};

const ProjectDetailModal: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-950/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="flex min-h-screen items-start justify-center px-4 pt-28 pb-10 sm:px-6 sm:pt-32 sm:pb-12">
        <motion.div
          className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-slate-950/95 border border-white/10 shadow-2xl shadow-slate-950/40 max-h-[calc(100vh-7rem)]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="max-h-[calc(100vh-6rem)] overflow-y-auto">
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/15 interactive-hover focus:outline-none"
              aria-label="Close project details"
            >
              ✕
            </button>

            <div className="grid min-h-0 min-w-0 grid-cols-1 gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1.3fr_0.9fr]">
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-300 border border-cyan-300/10">
                    {project.category} Project
                  </span>
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">
                    {project.name}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white text-lg font-semibold">Features</h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {(project.features ?? []).map((feature, index) => (
                      <li
                        key={index}
                        className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-gray-300"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white text-lg font-semibold">
                    Architecture
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {(project.architecture ?? []).map((item, index) => (
                      <li
                        key={index}
                        className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white text-lg font-semibold">
                    Lessons Learned
                  </h3>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm">
                    {(project.lessonsLearned ?? []).map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="space-y-6 min-h-0 min-w-0">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 max-h-[35vh] sm:max-h-[45vh]">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 space-y-4">
                  <h4 className="text-white text-lg font-semibold">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800/80 px-3 py-2 text-xs font-semibold text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 interactive-hover focus:outline-none"
                  >
                    View GitHub
                  </a>
                  {project.demoLink && project.demoLink !== "#" && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 interactive-hover focus:outline-none"
                    >
                      View Live Demo
                    </a>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filterProjects(projectsData, filter);
  const featuredProject = filteredProjects.find((p) => p.featured);
  const standardProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden px-6"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects Showcase" subtitle="Dự án nổi bật" />

        <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-16">
          {(["All", "Fullstack", "Frontend"] as ProjectFilter[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wider transition-all duration-300 border interactive-hover focus:outline-none ${
                filter === tab
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white border-transparent shadow-lg shadow-blue-500/25"
                  : "bg-slate-900/60 border-white/5 text-gray-400 hover:text-white hover:border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-12">
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
                <ProjectCard
                  project={featuredProject}
                  onViewDetails={() => setSelectedProject(featuredProject)}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <ProjectCard
                    project={project}
                    onViewDetails={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
