'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const projects = [
    {
      title: 'Tour Booking Platform',
      description:
        'Full-stack travel booking app with real-time availability, Stripe payments, admin dashboard, and responsive design.',
      link: 'https://github.com/yourusername/booking-tour',
      tags: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'Stripe'],
    },
    {
      title: 'AI Chat Application',
      description:
        'Real-time chat app powered by modern LLMs with markdown rendering, dark mode, and file upload support.',
      link: 'https://github.com/yourusername/ai-chat',
      tags: ['React', 'Next.js', 'Tailwind', 'Vercel AI SDK', 'Supabase'],
    },
    // Add more real projects here
  ];

  const skills = [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Prisma',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero */}
      <motion.section
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-90 pointer-events-none" />

        <motion.div variants={fadeInUp} className="relative z-10">
          <motion.img
            variants={fadeInUp}
            src="/avatar.jpg"
            alt="Tai"
            className="w-44 h-44 md:w-52 md:h-52 mx-auto rounded-full mb-10 border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 object-cover"
          />

          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Hi, I'm Tai
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl mb-12 text-gray-300 max-w-3xl mx-auto"
          >
            Full-Stack Developer crafting scalable, performant web experiences with modern JavaScript stack
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Explore Projects</span>
              <span className="absolute inset-0 bg-white/15 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </button>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 rounded-xl hover:bg-blue-950/40 transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-5xl mx-auto px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            I'm a passionate full-stack developer based in Ho Chi Minh City, Vietnam, with strong focus on building clean, scalable, and user-centric web applications.
          </p>
          <p>
            My current stack includes <strong>Next.js 14/15</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, <strong>Prisma</strong>, and modern backend solutions. I enjoy turning complex problems into elegant, maintainable code.
          </p>
          <p>
            When not coding, I'm exploring new tech, contributing to open source, or planning my next travel adventure.
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <ProjectCard {...proj} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5">
          {skills.map((skill, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          <form
            action="https://formspree.io/f/your-form-id" // ← replace with your Formspree / Getform / etc ID
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}