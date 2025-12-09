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
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat. Feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-gray-300">
                  <FaMapMarkerAlt className="text-[#00d9ff] text-xl" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <FaEnvelope className="text-[#00d9ff] text-xl" />
                  <a
                    href="mailto:yadavahc333@gmail.com"
                    className="hover:text-[#00d9ff] transition-colors"
                  >
                    yadavahc333@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <FaPhone className="text-[#00d9ff] text-xl" />
                  <a
                    href="tel:+918904030441"
                    className="hover:text-[#00d9ff] transition-colors"
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
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg text-gray-300 focus:outline-none focus:border-[#00d9ff] transition-colors"
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
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-lg text-gray-300 focus:outline-none focus:border-[#00d9ff] transition-colors"
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
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#00d9ff] to-[#8b5cf6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-[#1a1a2e] text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Built by{" "}
          <span className="text-[#00d9ff]">Yadava HC</span>
        </p>
      </footer>
    </section>
  );
}

