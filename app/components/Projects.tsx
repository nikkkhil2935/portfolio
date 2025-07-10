"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles, Code, Zap, Users } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "ReviseAI",
    description: "AI-powered business idea validation platform using Lean Startup principles",
    longDescription: "Guides users through a structured funnel: free call → UI prototype → MVP testing. Emphasizes impact + profitability, with features like mission statements, OKRs, user-testing, and landing-page creation.",
    technologies: ["React", "Next.js", "AI/ML", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/nikkkhil2935/reviseai",
    demo: "https://reviseai.vercel.app",
    image: "/placeholder.svg",
    category: "AI/ML",
    status: "Live",
    features: ["Business Validation", "AI Analysis", "MVP Testing", "User Analytics"],
    gradient: "from-blue-500 to-purple-600",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Maria Bakery",
    description: "E-commerce style bakery storefront with inventory and product management",
    longDescription: "Displays product details like prices, availability, and user reviews/ratings. Includes order form and About section, with clean UI/UX and responsive design for optimal user experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/nikkkhil2935/maria-bakery",
    demo: "https://maria-bakery.vercel.app",
    image: "/placeholder.svg",
    category: "E-commerce",
    status: "Live",
    features: ["Product Catalog", "Shopping Cart", "Order Management", "User Reviews"],
    gradient: "from-purple-500 to-pink-600",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Recipe Hub",
    description: "Modern recipe sharing platform with advanced search capabilities",
    longDescription: "Comprehensive recipe database with advanced search functionality. User-friendly interface with responsive design and filtering options for finding the perfect recipe for any occasion.",
    technologies: ["React", "Firebase", "CSS3", "JavaScript", "API Integration"],
    github: "https://github.com/nikkkhil2935/recipe-hub",
    demo: "https://recipe-hub.vercel.app",
    image: "/placeholder.svg",
    category: "Web App",
    status: "Live",
    features: ["Recipe Search", "User Profiles", "Favorites", "Recipe Sharing"],
    gradient: "from-green-500 to-blue-600",
    icon: <Users className="w-6 h-6" />,
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-300/20 dark:bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-300/20 dark:bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-300/20 dark:bg-pink-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Projects
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Innovative solutions built with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Project Cards */}
          <div className="lg:col-span-2 grid gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`group relative cursor-pointer transition-all duration-500 ${
                  selectedProject.id === project.id
                    ? "transform scale-105 z-10"
                    : "hover:scale-102"
                }`}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                data-interactive
              >
                {/* Enhanced glassmorphism card */}
                <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 p-6 overflow-hidden">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.status === "Live" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {project.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        data-interactive
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        data-interactive
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover effect indicator */}
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Details Panel */}
          <div className="lg:col-span-1">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-24 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`p-4 rounded-xl bg-gradient-to-r ${selectedProject.gradient} text-white shadow-lg`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  {selectedProject.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {selectedProject.category}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Zap className="w-4 h-4 text-blue-500" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Enhanced action buttons */}
              <div className="flex flex-col gap-3">
                <motion.a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  data-interactive
                >
                  <ExternalLink size={18} />
                  View Live Demo
                </motion.a>
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  data-interactive
                >
                  <Github size={18} />
                  View Source Code
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}