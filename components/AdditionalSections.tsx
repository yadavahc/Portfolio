"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaUsers } from "react-icons/fa";

export default function AdditionalSections() {
  return (
    <>
      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="space-y-8">
              <div className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-colors">
                <div className="flex items-start gap-4">
                  <FaGraduationCap className="text-3xl text-[#00d9ff] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#00d9ff] mb-1">
                      B.E. in Information Science
                    </h3>
                    <p className="text-lg text-gray-200 mb-2">
                      The Oxford College of Engineering, Bengaluru
                    </p>
                    <p className="text-gray-400 mb-2">2023 – 2027</p>
                    <p className="text-gray-300">CGPA: 9.0</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-colors">
                <div className="flex items-start gap-4">
                  <FaGraduationCap className="text-3xl text-[#00d9ff] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#00d9ff] mb-1">
                      PUC (CS)
                    </h3>
                    <p className="text-lg text-gray-200 mb-2">
                      Kumarans PU College
                    </p>
                    <p className="text-gray-400 mb-2">2021 – 2023</p>
                    <p className="text-gray-300">95%</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-colors">
                <div className="flex items-start gap-4">
                  <FaGraduationCap className="text-3xl text-[#00d9ff] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#00d9ff] mb-1">
                      High School
                    </h3>
                    <p className="text-lg text-gray-200 mb-2">MMVS High School</p>
                    <p className="text-gray-400 mb-2">2011 – 2020</p>
                    <p className="text-gray-300 mb-2">97.12%</p>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• School President (2019–2020)</li>
                      <li>
                        • First Prize in Computer Science Quiz (BMS College of
                        Engineering event)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050509]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
                Certifications & Achievements
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#00d9ff] flex items-center gap-2">
                  <FaAward />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {[
                    "Oracle AI Foundations Associate — Oracle Cloud Infrastructure (Oct 2025)",
                    "Introduction to Generative AI — Google (Aug 2025)",
                    "Getting Started with AI — IBM (Jul 2025)",
                    "CSS (Basic) — HackerRank",
                    "SQL (Basic) — HackerRank",
                    "IBM Certified AI Agent Architect",
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="bg-[#1a1a2e] rounded-lg p-4 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-colors"
                    >
                      <p className="text-gray-300">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#00d9ff] flex items-center gap-2">
                  <FaAward />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {[
                    "2nd Winner — Ideathon at BMS College of Engineering (National Science Day)",
                    "3rd Winner — CSI Intra-College Web Hackathon 2024",
                    "Ranked Top 30 among 1000+ geeks in GFG (TOCE); solved 100+ DSA problems",
                    "President of Institution (2019–2020)",
                    "Member — E-Cell TOCE, Kiran Foundation, Youth for Seva, VP Culture Club",
                  ].map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-[#1a1a2e] rounded-lg p-4 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-colors"
                    >
                      <p className="text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership & Volunteering Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
                Leadership & Volunteering
              </span>
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "School President, MMVS (2019–2020)",
                  description:
                    "Led student body, supported discipline and event management.",
                },
                {
                  title: "Satvam Technical Event Volunteer, Kumarans PU College",
                  description:
                    "Helped in planning and execution of technical competitions and presentations; assisted with logistics and technical setup.",
                },
                {
                  title: "E-Cell (Entrepreneurship Cell), TOCE",
                  description:
                    "Social Media Team – promoted and marketed events on Instagram and other platforms, improving visibility.",
                },
                {
                  title: "Youth for Seva (YFS) & Kiran Foundation Volunteer",
                  description:
                    "Volunteered for Chiguru with 3,000+ children; coordinated games, activities, logistics. Supported outreach initiatives and virtual events for Kiran Foundation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-[#1a1a2e] rounded-lg p-6 border border-[#2a2a3e] hover:border-[#00d9ff]/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <FaUsers className="text-2xl text-[#00d9ff] mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-[#00d9ff] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

