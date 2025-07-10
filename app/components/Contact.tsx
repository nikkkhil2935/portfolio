"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400/20 dark:bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Touch
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's create something amazing together!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email",
                content: "nikhilpatil29032005@gmail.com",
                gradient: "from-blue-500 to-purple-600",
                bgGradient: "from-blue-500/10 to-purple-500/10",
                link: "mailto:nikhilpatil29032005@gmail.com",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                content: "+91 9373565412",
                gradient: "from-green-500 to-blue-600",
                bgGradient: "from-green-500/10 to-blue-500/10",
                link: "tel:+919373565412",
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Location",
                content: "Maharashtra, India",
                gradient: "from-purple-500 to-pink-600",
                bgGradient: "from-purple-500/10 to-pink-500/10",
                link: "#",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.a
                  href={contact.link}
                  className="block relative bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  data-interactive
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${contact.gradient} text-white shadow-lg mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {contact.icon}
                    </motion.div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-xl mb-3">
                      {contact.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      {contact.content}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-xl p-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 text-red-500" />
              <span className="text-lg text-gray-600 dark:text-gray-300">
                Always interested in new opportunities and collaborations
              </span>
            </motion.div>

            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, need technical consultation, or just want to connect, I'd love to hear from you!
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {[
                {
                  href: "https://github.com/nikkkhil2935",
                  icon: <Github className="w-6 h-6" />,
                  label: "GitHub",
                  gradient: "from-gray-700 to-gray-900",
                  hoverColor: "hover:from-gray-600 hover:to-gray-800",
                },
                {
                  href: "https://www.linkedin.com/in/nikhil-patil-139137258",
                  icon: <Linkedin className="w-6 h-6" />,
                  label: "LinkedIn",
                  gradient: "from-blue-600 to-blue-800",
                  hoverColor: "hover:from-blue-500 hover:to-blue-700",
                },
                {
                  href: "mailto:nikhilpatil29032005@gmail.com",
                  icon: <Mail className="w-6 h-6" />,
                  label: "Email",
                  gradient: "from-purple-600 to-purple-800",
                  hoverColor: "hover:from-purple-500 hover:to-purple-700",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.includes("mailto") ? undefined : "_blank"}
                  rel={social.href.includes("mailto") ? undefined : "noopener noreferrer"}
                  className={`group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${social.gradient} ${social.hoverColor} text-white rounded-xl transition-all duration-300 shadow-lg`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-interactive
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {social.icon}
                  </motion.div>
                  <span className="font-medium">{social.label}</span>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Quick Response Promise */}
            <motion.div
              className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>I typically respond within 24 hours</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}