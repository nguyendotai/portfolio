'use client';

import { motion } from 'framer-motion';

export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.12, y: -5 }}
      className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full border border-blue-500/30 font-medium backdrop-blur-sm shadow-sm hover:shadow-blue-500/30 transition-all duration-300"
    >
      {skill}
    </motion.span>
  );
}