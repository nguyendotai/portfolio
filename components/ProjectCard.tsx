'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

export default function ProjectCard({ title, description, link, tags = [] }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="p-7 relative z-10">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-gray-800/80 rounded-full text-blue-300 border border-blue-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:underline underline-offset-4"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
}