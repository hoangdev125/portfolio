import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // Safe dynamic icon rendering avoiding the 'any' type
  const IconComponent = Icons[skill.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="glass-card glow-border p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 cursor-pointer relative overflow-hidden group"
    >
      {/* Dynamic Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accentBlue/10 via-accentPurple/10 to-accentCyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Icon Wrapper */}
      <div className="p-4 rounded-xl bg-slate-800/80 text-accentCyan group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-accentBlue group-hover:to-accentCyan transition-all duration-300">
        {IconComponent ? (
          <IconComponent className="h-8 w-8" />
        ) : (
          <Icons.Code2 className="h-8 w-8" />
        )}
      </div>

      {/* Skill Name */}
      <h3 className="text-white font-medium text-base tracking-wide group-hover:text-accentCyan transition-colors duration-300">
        {skill.name}
      </h3>
    </motion.div>
  );
};
