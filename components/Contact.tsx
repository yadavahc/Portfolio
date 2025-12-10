"use client";

import { motion } from "framer-motion";
import { useState } from "react";
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:yadavahc333@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050509]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
            <span className="text-shine bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat. Feel free to reach out!
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300">
                  <FaMapMarkerAlt className="text-[#c0c0c0] text-lg sm:text-xl flex-shrink-0" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300">
                  <FaEnvelope className="text-[#c0c0c0] text-lg sm:text-xl flex-shrink-0" />
                  <a
                    href="mailto:yadavahc333@gmail.com"
                    className="hover:text-white transition-colors break-all"
                  >
                    yadavahc333@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300">
                  <FaPhone className="text-[#c0c0c0] text-lg sm:text-xl flex-shrink-0" />
                  <a
                    href="tel:+918904030441"
                    className="hover:text-white transition-colors"
                  >
                    +91 8904030441
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
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
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg text-gray-300 focus:outline-none focus:border-[#c0c0c0] transition-colors text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg text-gray-300 focus:outline-none focus:border-[#c0c0c0] transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg text-gray-300 focus:outline-none focus:border-[#00d9ff] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#c0c0c0] to-[#e8e8e8] text-[#0a0a0f] font-semibold rounded-lg hover:from-[#e8e8e8] hover:to-white hover:shadow-lg hover:shadow-[#c0c0c0]/30 transition-all duration-300 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-[#1a1a2e] text-center text-sm sm:text-base text-gray-400">
        <p>
          © {new Date().getFullYear()} Built by{" "}
          <span className="text-shine text-white">Yadava HC</span>
        </p>
      </footer>
    </section>
  );
}

