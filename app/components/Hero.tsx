"use client"

import { ArrowDown, Github, Linkedin, Download, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = async () => {
    try {
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      // Set font
      doc.setFont("helvetica")

      // Header - Name and Contact
      doc.setFontSize(24)
      doc.setTextColor(0, 0, 0)
      doc.text("Nikhil Patil", 105, 25, { align: "center" })

      doc.setFontSize(11)
      doc.setTextColor(60, 60, 60)
      doc.text("+91 9373565412 | nikhilpatil29032005@gmail.com | MH", 105, 35, { align: "center" })

      // Add separator line
      doc.setDrawColor(200, 200, 200)
      doc.setLineWidth(0.5)
      doc.line(20, 42, 190, 42)

      // Summary Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Summary", 20, 55)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      const summaryText =
        "Dynamic web developer with hands-on experience at CodSoft, specializing in responsive design and full-stack applications. Proven problem-solver adept at optimizing performance and enhancing user experience. Strong collaborator with excellent communication skills, committed to delivering high-quality projects and continuously learning modern tools to drive development efficiency."
      const summaryLines = doc.splitTextToSize(summaryText, 170)
      doc.text(summaryLines, 20, 65)

      // Education Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Education", 20, 95)

      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0)
      doc.text("Vidyavardhini College of Engineering And Technology | Vasai", 20, 107)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("Information Technology | 06/2026", 20, 115)
      doc.text("Consistently maintained a 7.08 CGPA in B.E. Information Technology", 20, 123)
      doc.text(
        "Active member of the C3 Committee, contributing to technical events and student engagement activities.",
        20,
        131,
      )
      const educationText =
        "Represented the college in badminton tournaments, promoting sportsmanship and balancing academics with extracurriculars."
      const educationLines = doc.splitTextToSize(educationText, 170)
      doc.text(educationLines, 20, 139)

      // Experience Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Experience", 20, 160)

      doc.setFontSize(11)
      doc.setTextColor(0, 0, 0)
      doc.text("CodSoft | MH", 20, 172)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("Intern | 06/2024 - 07/2024", 20, 180)

      const experiencePoints = [
        "Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.js.",
        "Collaborated with team members to build full-stack web applications, ensuring clean code and version control via GitHub.",
        "Designed user interfaces with a focus on mobile-first design and cross-browser compatibility.",
        "Optimized website performance and resolved front-end bugs to enhance user experience.",
        "Integrated APIs to fetch and display dynamic data in real-time web applications.",
        "Participated in regular code reviews and stand-up meetings to align with project goals and deadlines.",
        "Explored modern web tools and frameworks to improve development efficiency and maintainability.",
        "Created project documentation, user manuals, and reports for internal and client use.",
        "Engaged in learning sessions and team workshops to expand knowledge of best practices in web development.",
        "Managed and deployed projects on platforms like Vercel and Netlify for testing and live previews.",
      ]

      let yPosition = 188
      experiencePoints.forEach((point) => {
        const lines = doc.splitTextToSize(point, 170)
        doc.text(lines, 20, yPosition)
        yPosition += lines.length * 5 + 2
      })

      // Add new page for Projects and Skills
      doc.addPage()

      // Projects Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Projects", 20, 25)

      // ReviseAI
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("ReviseAI", 20, 37)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("AI-powered business idea validation platform using Lean Startup principles", 20, 45)
      doc.text("Guides users through a structured funnel: free call → UI prototype → MVP testing.", 20, 53)
      const reviseText =
        "Emphasizes impact + profitability, with features like mission statements, OKRs, user-testing, and landing-page creation"
      const reviseLines = doc.splitTextToSize(reviseText, 170)
      doc.text(reviseLines, 20, 61)

      // Maria Bakery
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("Maria Bakery", 20, 80)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("E-commerce style bakery storefront with inventory, product listings, and stock statuses", 20, 88)
      doc.text("Displays product details like prices, availability, and user reviews/ratings", 20, 96)
      doc.text("Includes order form and About section, with clean UI/UX.", 20, 104)

      // Recipe Hub
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      doc.text("Recipe Hub", 20, 120)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("Modern recipe sharing platform with search and filtering capabilities", 20, 128)
      doc.text("Comprehensive recipe database with advanced search functionality", 20, 136)
      doc.text("User-friendly interface with responsive design and filtering options", 20, 144)

      // Skills Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Skills", 20, 165)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      const skillsText =
        "Communication skills, HTML5, React.js, Tailwind CSS, Node.js, Express.js, Git, GitHub, Vercel, Netlify"
      const skillsLines = doc.splitTextToSize(skillsText, 170)
      doc.text(skillsLines, 20, 175)

      // Languages Section
      doc.setFontSize(14)
      doc.setTextColor(0, 0, 0)
      doc.text("Languages", 20, 195)

      doc.setFontSize(10)
      doc.setTextColor(40, 40, 40)
      doc.text("English, Hindi, Marathi", 20, 205)

      // Open PDF in new tab instead of downloading
      const pdfBlob = doc.output("blob")
      const pdfUrl = URL.createObjectURL(pdfBlob)
      window.open(pdfUrl, "_blank")
    } catch (error) {
      console.error("Error generating PDF:", error)
      // Fallback to text file if PDF generation fails
      const link = document.createElement("a")
      link.href = "/cv/Nikhil_Patil_CV.txt"
      link.download = "Nikhil_Patil_CV.txt"
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 0.02,
              y: mousePosition.y * 0.02,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * -0.02,
              y: mousePosition.y * -0.02,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 0.01,
              y: mousePosition.y * 0.01,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 15 }}
          />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              data-interactive
            >
              <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  Available for opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Nikhil
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed font-medium"
          >
            Dynamic Web Developer specializing in responsive design and full-stack applications
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Proven problem-solver adept at optimizing performance and enhancing user experience. Strong collaborator
            committed to delivering high-quality projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={downloadCV}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-interactive
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">View CV (PDF)</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/nikkkhil2935"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-white/20 dark:border-white/10 group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                data-interactive
              >
                <Github size={20} className="text-gray-700 dark:text-white group-hover:text-blue-500 transition-colors duration-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/nikhil-patil-139137258"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-white/20 dark:border-white/10 group"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                data-interactive
              >
                <Linkedin size={20} className="text-gray-700 dark:text-white group-hover:text-blue-500 transition-colors duration-300" />
              </motion.a>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={scrollToAbout}
            className="text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white transition-colors duration-200 group"
            whileHover={{ y: 5 }}
            data-interactive
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={32} className="group-hover:text-blue-500 transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  )
}