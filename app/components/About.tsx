"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
          >
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
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
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl animate-pulse"></div>
                <div className="absolute inset-1 bg-white rounded-3xl"></div>

                {/* Professional photo */}
                <div className="absolute inset-2 rounded-3xl overflow-hidden">
                  <Image
                    src="/images/nikhil-profile.jpg"
                    alt="Nikhil Patil - Professional Photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-300"></div>
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
                <p className="text-lg text-gray-800 leading-relaxed">
                  Dynamic web developer with hands-on experience at{" "}
                  <span className="font-semibold text-blue-600">CodSoft</span>, specializing in responsive design and
                  full-stack applications. I'm passionate about creating seamless user experiences and writing clean,
                  maintainable code.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Currently pursuing B.E. in Information Technology at{" "}
                  <span className="font-semibold text-purple-600">
                    Vidyavardhini College of Engineering And Technology
                  </span>
                  , where I maintain a strong academic record while actively participating in technical events and
                  sports.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Location</h4>
                  <p className="text-gray-700">Maharashtra, India</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Languages</h4>
                  <p className="text-gray-700">English, Hindi, Marathi</p>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-sm text-gray-700">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">7.08</div>
                  <div className="text-sm text-gray-700">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">2026</div>
                  <div className="text-sm text-gray-700">Graduate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
