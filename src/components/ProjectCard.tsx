import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { name, description, techStack, githubLink, demoLink, image, featured, features } = project;

  // Custom Github Inline SVG Icon
  const GithubIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl overflow-hidden p-6 md:p-8 lg:p-12 mb-12 border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative"
      >
        {/* Glow decorative effect */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Featured Screenshot */}
          <div className="lg:col-span-6 overflow-hidden rounded-2xl border border-white/10 group shadow-2xl">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              src={image}
              alt={`${name} Screenshot`}
              className="w-full h-auto object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>

          {/* Featured Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-400 uppercase px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 inline-block">
                Featured Project ⭐
              </span>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {name}
              </h3>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {description}
            </p>

            {/* Bullet features list */}
            {features && features.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase text-white tracking-wider">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs md:text-sm text-gray-400 space-x-2">
                      <CheckCircle2 className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack tags */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase text-white tracking-wider">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold text-gray-300 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl border border-white/10 transition-colors duration-300"
              >
                <GithubIcon />
                <span>GitHub Source</span>
              </a>
              {demoLink && demoLink !== '#' && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:brightness-110 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Project layout (Grid Card)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="glass-card glow-border rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      {/* Screenshot image container */}
      <div className="relative overflow-hidden aspect-video border-b border-white/5">
        <img
          src={image}
          alt={`${name} Screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bgmain/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 justify-end space-x-2">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors duration-300"
            title="View Source"
          >
            <GithubIcon />
          </a>
          {demoLink && demoLink !== '#' && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white transition-colors duration-300"
              title="Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Card Info Body */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
          {name}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3">
          {description}
        </p>

        {/* Tech stack list */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-bold text-gray-400 px-2.5 py-1 rounded-md bg-slate-800/60 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Simple Link Indicators for Mobile-First usability */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 flex items-center space-x-1"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
          {demoLink && demoLink !== '#' && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 flex items-center space-x-1"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
