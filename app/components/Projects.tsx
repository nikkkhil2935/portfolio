"use client"

import { ExternalLink, Github, Lightbulb, ShoppingCart, ChefHat } from "lucide-react"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "ReviseAI",
      description: "AI-powered business idea validation platform using Lean Startup principles",
      icon: <Lightbulb className="text-yellow-600" size={32} />,
      features: [
        "Structured funnel: free call → UI prototype → MVP testing",
        "Emphasizes impact + profitability",
        "Mission statements and OKRs integration",
        "User-testing and landing-page creation tools",
      ],
      technologies: ["React.js", "Node.js", "AI Integration", "Lean Startup"],
      gradient: "from-yellow-400 to-orange-500",
      liveUrl: "https://reviseai.vercel.app/",
      githubUrl: "https://github.com/nikkkhil2935",
    },
    {
      title: "Maria Bakery",
      description: "E-commerce style bakery storefront with comprehensive inventory management",
      icon: <ShoppingCart className="text-pink-600" size={32} />,
      features: [
        "Product listings with inventory and stock statuses",
        "Detailed product information with prices and availability",
        "User reviews and ratings system",
        "Order form and About section with clean UI/UX",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      gradient: "from-pink-400 to-rose-500",
      liveUrl: "https://mariabakery.vercel.app/",
      githubUrl: "https://github.com/nikkkhil2935",
    },
    {
      title: "Recipe Hub",
      description: "Modern recipe sharing platform with search and filtering capabilities",
      icon: <ChefHat className="text-green-600" size={32} />,
      features: [
        "Comprehensive recipe database with search functionality",
        "Advanced filtering by cuisine, dietary preferences, and ingredients",
        "User-friendly interface with responsive design",
        "Recipe details with ingredients, instructions, and nutritional info",
      ],
      technologies: ["React.js", "JavaScript", "CSS3", "API Integration"],
      gradient: "from-green-400 to-emerald-500",
      liveUrl: "https://recipessssssss.vercel.app/",
      githubUrl: "https://github.com/nikkkhil2935",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-slate-800 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Showcasing my passion for creating innovative solutions and exceptional user experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-white/20"
              >
                <div className={`bg-gradient-to-r ${project.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">{project.icon}</div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="font-semibold text-white mb-4 text-lg">Key Features:</h4>
                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-200 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-8">
                    <h4 className="font-semibold text-white mb-4 text-lg">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm backdrop-blur-sm border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex-1 justify-center group"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                      <div className="group-hover:translate-x-1 transition-transform duration-200">→</div>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
