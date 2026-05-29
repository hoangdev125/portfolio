import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { SkillCard } from '../components/SkillCard';
import { skillsData } from '../data/skills';
import type { Skill } from '../types';

type CategoryFilter = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools';

const CATEGORIES: CategoryFilter[] = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryFilter>('All');

  const filteredSkills = skillsData.filter((skill: Skill) => {
    if (activeTab === 'All') return true;
    return skill.category === activeTab;
  });

  return (
    <section id="skills" className="py-24 bg-bgMain relative overflow-hidden px-6">
      
      {/* Background glow orb */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accentBlue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accentCyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Technical Skills" subtitle="Kỹ năng chuyên môn" />

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 border ${
                activeTab === category
                  ? 'bg-gradient-to-r from-accentBlue to-accentCyan text-white border-transparent shadow-lg shadow-accentBlue/25'
                  : 'bg-slate-900/60 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
