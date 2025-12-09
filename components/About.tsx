"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend & Web",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "Convex",
      "Inngest",
    ],
  },
  {
    title: "Cloud & Tools",
    skills: ["Vercel", "Netlify", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Core CS Concepts",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "OOPs",
      "DBMS",
      "Operating Systems",
    ],
  },
  {
    title: "Others",
    skills: [
      "Entrepreneurship",
      "Brand Marketing",
      "Leadership",
      "Social Media Management",
      "Event Management",
      "Community Volunteering",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              I'm an Information Science undergraduate and aspiring software
              engineer who loves building web apps, solving DSA problems, and
              working with modern stacks like React, Next.js, Tailwind, and AI
              tools. I have internship experience in real-world projects,
              open-source contributions, and enjoy combining development with
              community work, event management, and leadership.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-200">
              Skills & Tech Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-colors"
                >
                  <h4 className="text-lg font-semibold mb-4 text-[#00d9ff]">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm bg-[#0a0a0f] border border-[#2a2a3e] rounded-full text-gray-300 hover:border-[#00d9ff] hover:text-[#00d9ff] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

