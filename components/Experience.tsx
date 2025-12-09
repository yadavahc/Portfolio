"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Open-Source Contributor",
    organization: "GirlScript Summer of Code",
    type: "Full-time",
    duration: "Jul 2025 – Present · 6 mos",
    location: "Remote",
    points: [
      "Contributed to open-source projects, fixed issues, and implemented new features",
      "Collaborated with maintainers and followed best practices in Git, PRs, and code reviews",
    ],
  },
  {
    role: "Co-Founder",
    organization: "Oxyverse-VTU",
    type: "Self-employed",
    duration: "Nov 2024 – Present · 1 yr 2 mos",
    location: "On-site, Bangalore",
    points: [
      "Developed and deployed a one-stop student platform using HTML, CSS, JavaScript, Bootstrap",
      "Features: notes, model papers, CGPA/SGPA calculators, scholarship updates",
      "Led a collaborative team for content curation, resource gathering, and technical maintenance",
      "Managed social media operations, impacting 1,000+ students across 15+ colleges and supporting scholarships worth over ₹5 lakhs",
    ],
  },
  {
    role: "Member",
    organization: "E-Cell, IIT Bombay",
    type: "Remote",
    duration: "Jul 2025 – Dec 2025 · 6 mos",
    location: "Remote",
    points: [
      "Managed and optimized social media campaigns to improve online reach",
      "Helped build data-driven strategies to support entrepreneurship initiatives",
    ],
  },
  {
    role: "Student Partner",
    organization: "Internshala",
    type: "Remote",
    duration: "Aug 2025 – Oct 2025 · 3 mos",
    location: "Remote",
    points: [
      "Led digital outreach & campaigns to promote trainings and internships",
      "Worked on social media branding with marketing and analytics tools",
    ],
  },
  {
    role: "Intern",
    organization: "ShadowFox (Sense-AI Project)",
    type: "Internship",
    duration: "Jul 2025 – Sep 2025 · 3 mos",
    location: "Remote",
    points: [
      "Built Sense-AI, an AI-powered career assistant platform using Next.js and Gemini AI",
      "Integrated Gemini AI for intelligent content generation and Clerk for auth",
    ],
  },
  {
    role: "Web Development Intern",
    organization: "InternPe",
    type: "Remote",
    duration: "May 2024 – Jun 2024 · 2 mos",
    location: "Remote",
    points: [
      "Worked on frontend tasks using HTML, CSS, and basic JavaScript",
      "Improved UI components and responsiveness for existing pages",
    ],
  },
  {
    role: "Web Developer",
    organization: "Kiran Foundation",
    type: "Remote",
    duration: "Feb 2024 – Jun 2024",
    location: "Remote",
    points: [
      "Contributed to development & optimization of the foundation website",
      "Implemented a dynamic blog module using the Astro framework",
      "Customized the 'Around' theme using Figma for better UX and consistency",
      "Used Git for version control and helped with content refinement and student data documentation",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    organization: "Varcons Technologies",
    type: "Hybrid",
    duration: "Mar 2024 – May 2024",
    location: "Hybrid",
    points: [
      "Built a SaaS-based academic platform with a team of 5",
      "Delivered responsive, client-focused web templates with optimized performance and timely deployment",
      "Worked with HTML, CSS, JavaScript and related tools",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050509]"
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
              Experience
            </span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1a1a2e] transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#00d9ff] rounded-full border-4 border-[#050509] transform md:-translate-x-1/2 z-10"></div>

                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 pl-12" : "md:pl-12 pr-12"
                    }`}
                  >
                    <div className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[#00d9ff] mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-gray-200 mb-2">
                            {exp.organization}
                          </p>
                        </div>
                        <span className="px-3 py-1 text-xs bg-[#0a0a0f] border border-[#2a2a3e] rounded-full text-gray-400">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-[#00d9ff]" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-[#00d9ff]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 flex items-start gap-2"
                          >
                            <span className="text-[#00d9ff] mt-1.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

