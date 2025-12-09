"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "AI Expense Splitter — Splitr",
    description:
      "AI-powered expense splitter for group & individual expenses. Supports equal & percentage-based splits, smart settlement tracking, monthly spending dashboard. Sends automated email reminders for pending dues.",
    tech: [
      "Next.js",
      "Shadcn UI",
      "Clerk",
      "Convex",
      "Inngest",
      "Gemini API",
      "Resend",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Food Delivery Website — Tomato",
    description:
      "Food delivery web app built using the MERN stack. Focus on zero platform fees and faster deliveries.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Oxyverse-VTU / OxyVerse",
    description:
      "One-stop VTU student resource platform. Provides notes, model papers, syllabus copies, scholarship updates, CGPA calculators, and more. Impacted 1,000+ students across 15+ colleges; helped secure scholarships worth over ₹5 lakhs.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Sense-AI",
    description:
      "AI-powered career assistant that generates resumes and cover letters, helps with interview prep, and provides personalized insights.",
    tech: [
      "Next.js",
      "Gemini AI",
      "Clerk",
      "Neon",
      "Inngest",
      "Tailwind",
      "Shadcn UI",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00d9ff]/10"
              >
                <h3 className="text-xl font-bold text-[#00d9ff] mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-[#0a0a0f] border border-[#2a2a3e] rounded-full text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] text-white rounded-lg hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all duration-300 text-sm font-medium"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0a0a0f] border border-[#2a2a3e] text-gray-300 rounded-lg hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300 text-sm font-medium"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

