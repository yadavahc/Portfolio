"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yadava-hc",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/yadavahc",
    color: "hover:text-white",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    href: "https://leetcode.com/yadavahc",
    color: "hover:text-[#ffa116]",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Yadava HC
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
            Aspiring Software Engineer | Web Development | React | Java & C++ |
            DSA
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8">
            Operating Systems | AI/ML Enthusiast | React Developer
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-gray-300">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#00d9ff]" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#00d9ff]" />
              <a
                href="mailto:yadavahc333@gmail.com"
                className="hover:text-[#00d9ff] transition-colors"
              >
                yadavahc333@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#00d9ff]" />
              <a
                href="tel:+918904030441"
                className="hover:text-[#00d9ff] transition-colors"
              >
                +91 8904030441
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-2xl text-gray-400 ${link.color} transition-colors`}
                  aria-label={link.name}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12"
          >
            <a
              href="#about"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all duration-300"
            >
              Explore My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

