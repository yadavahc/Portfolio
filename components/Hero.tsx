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
    color: "hover:text-white",
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
    color: "hover:text-white",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-shine bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Yadava HC
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 px-4">
            Aspiring Software Engineer | Web Development | React | Java & C++ |
            DSA
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 px-4">
            Operating Systems | AI/ML Enthusiast | React Developer
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base px-4">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#c0c0c0]" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#c0c0c0]" />
              <a
                href="mailto:yadavahc333@gmail.com"
                className="hover:text-white transition-colors"
              >
                yadavahc333@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#c0c0c0]" />
              <a
                href="tel:+918904030441"
                className="hover:text-white transition-colors"
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
            className="mt-8 sm:mt-12"
          >
            <a
              href="#about"
              className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-[#c0c0c0] to-[#e8e8e8] text-[#0a0a0f] font-semibold rounded-lg hover:from-[#e8e8e8] hover:to-white hover:shadow-lg hover:shadow-[#c0c0c0]/30 transition-all duration-300 text-sm sm:text-base"
            >
              Explore My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

