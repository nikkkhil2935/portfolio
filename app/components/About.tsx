"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Calendar, Users, Award } from "lucide-react"

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-purple-900 relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 dark:bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 dark:bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-400/20 dark:bg-pink-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            About{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Me
            </motion.span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Enhanced glassmorphism container */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="absolute inset-1 bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-white/10"></div>

                {/* Professional photo */}
                <motion.div
                  className="absolute inset-2 rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Nikhil Patil - Professional Photo"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

                {/* Enhanced floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.p
                  className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6 }}
                >
                  Dynamic web developer with hands-on experience at{" "}
                  <motion.span
                    className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    data-interactive
                  >
                    CodSoft
                  </motion.span>
                  , specializing in responsive design and full-stack applications. I'm passionate about creating
                  seamless user experiences and writing clean, maintainable code.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Currently pursuing B.E. in Information Technology at{" "}
                  <motion.span
                    className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                    data-interactive
                  >
                    Vidyavardhini College of Engineering And Technology
                  </motion.span>
                  , where I maintain a strong academic record while actively participating in technical events and
                  sports.
                </motion.p>
              </div>

              {/* Enhanced info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                  data-interactive
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <MapPin className="w-6 h-6 text-blue-500 mb-2" />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">Maharashtra, India</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white/10 dark:bg-black/10 backdrop-blur-xl p-6 rounded-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
                  data-interactive
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Users className="w-6 h-6 text-purple-500 mb-2" />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Languages</h4>
                    <p className="text-gray-700 dark:text-gray-300">English, Hindi, Marathi</p>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <motion.div
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  data-interactive
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    3+
                  </motion.div>
                  <div className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-blue-500 transition-colors">
                    Projects
                  </div>
                </motion.div>

                <motion.div
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  data-interactive
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    7.08
                  </motion.div>
                  <div className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-purple-500 transition-colors">
                    CGPA
                  </div>
                </motion.div>

                <motion.div
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  data-interactive
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    2026
                  </motion.div>
                  <div className="text-sm text-gray-700 dark:text-gray-400 group-hover:text-green-500 transition-colors">
                    Graduate
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}