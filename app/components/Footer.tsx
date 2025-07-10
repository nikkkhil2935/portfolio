/// <reference types="react" />

import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back to top button */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={handleScrollToTop}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-interactive
              >
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm font-medium">Back to Top</span>
              </motion.button>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 mb-12">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  Nikhil Patil
                </motion.h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Passionate web developer creating amazing digital experiences with modern technologies.
                  Always excited to work on innovative projects!
                </p>
                
                {/* Enhanced Social Links */}
                <div className="flex gap-4">
                  {[
                    {
                      href: "mailto:nikhilpatil29032005@gmail.com",
                      icon: <Mail className="w-5 h-5" />,
                      gradient: "from-red-500 to-pink-600",
                      label: "Email",
                    },
                    {
                      href: "https://github.com/nikkkhil2935",
                      icon: <Github className="w-5 h-5" />,
                      gradient: "from-gray-600 to-gray-800",
                      label: "GitHub",
                    },
                    {
                      href: "https://www.linkedin.com/in/nikhil-patil-139137258",
                      icon: <Linkedin className="w-5 h-5" />,
                      gradient: "from-blue-500 to-blue-700",
                      label: "LinkedIn",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.includes("mailto") ? undefined : "_blank"}
                      rel={social.href.includes("mailto") ? undefined : "noopener noreferrer"}
                      className={`group p-3 bg-gradient-to-r ${social.gradient} rounded-xl hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      data-interactive
                    >
                      <motion.div
                        whileHover={{ rotate: -5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {social.icon}
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white">Quick Navigation</h4>
                <ul className="space-y-3">
                  {["About", "Education", "Experience", "Projects", "Skills", "Contact"].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <motion.a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                        data-interactive
                      >
                        <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-blue-400 transition-colors duration-200"></div>
                        {item}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
                <div className="space-y-4">
                  {[
                    { label: "Email", value: "nikhilpatil29032005@gmail.com" },
                    { label: "Phone", value: "+91 9373565412" },
                    { label: "Location", value: "Maharashtra, India" },
                  ].map((info, index) => (
                    <motion.div
                      key={info.label}
                      className="flex flex-col gap-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-sm text-gray-400 uppercase tracking-wide">{info.label}</span>
                      <span className="text-gray-200">{info.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Availability Status */}
                <motion.div
                  className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Available for new opportunities</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <motion.div
              className="border-t border-white/10 pt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-gray-300 flex items-center justify-center gap-2 flex-wrap"
                whileHover={{ scale: 1.05 }}
              >
                <span>© {currentYear} Nikhil Patil. Crafted with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="text-red-500 w-4 h-4" />
                </motion.span>
                <span>and lots of coffee ☕</span>
              </motion.p>
              
              <motion.p
                className="text-sm text-gray-400 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}