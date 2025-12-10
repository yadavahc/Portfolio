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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
            <span className="text-shine bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-center px-4">
              I'm an Information Science undergraduate and aspiring software
              engineer who loves building web apps, solving DSA problems, and
              working with modern stacks like React, Next.js, Tailwind, and AI
              tools. I have internship experience in real-world projects,
              open-source contributions, and enjoy combining development with
              community work, event management, and leadership.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-200">
              Skills & Tech Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-[#1a1a2e] rounded-lg p-5 sm:p-6 border border-[#2a2a3e] hover:border-[#c0c0c0] hover:bg-[#1f1f2e] transition-all duration-300"
                >
                  <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-shine text-white group-hover:text-[#e8e8e8] transition-colors">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#0a0a0f] border border-[#2a2a3e] rounded-full text-gray-300 hover:border-[#c0c0c0] hover:text-white transition-all duration-300"
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

