import { jsPDF } from "jspdf"

// Generate PDF CV
function generateCV() {
  const doc = new jsPDF()

  // Set font
  doc.setFont("helvetica")

  // Header
  doc.setFontSize(24)
  doc.setTextColor(0, 0, 0)
  doc.text("Nikhil Patil", 20, 30)

  doc.setFontSize(16)
  doc.setTextColor(60, 60, 60)
  doc.text("Dynamic Web Developer", 20, 40)

  // Contact Information
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text("Email: nikhilpatil29032005@gmail.com", 20, 50)
  doc.text("Phone: +91 9373565412", 20, 55)
  doc.text("Location: Maharashtra, India", 20, 60)
  doc.text("LinkedIn: linkedin.com/in/nikhil-patil-139137258", 20, 65)
  doc.text("GitHub: github.com/nikkkhil2935", 20, 70)

  // Summary Section
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text("SUMMARY", 20, 85)

  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  const summaryText =
    "Dynamic web developer with hands-on experience at CodSoft, specializing in responsive design and full-stack applications. Proven problem-solver adept at optimizing performance and enhancing user experience. Strong collaborator with excellent communication skills, committed to delivering high-quality projects and continuously learning modern tools to drive development efficiency."
  const summaryLines = doc.splitTextToSize(summaryText, 170)
  doc.text(summaryLines, 20, 95)

  // Education Section
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text("EDUCATION", 20, 125)

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text("Bachelor of Engineering - Information Technology", 20, 135)

  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text("Vidyavardhini College of Engineering And Technology, Vasai", 20, 142)
  doc.text("Expected Graduation: June 2026", 20, 147)
  doc.text("CGPA: 7.08", 20, 152)

  doc.text("• Active member of the C3 Committee, contributing to technical events", 25, 160)
  doc.text("• Represented college in badminton tournaments", 25, 165)
  doc.text("• Consistently maintained strong academic performance", 25, 170)

  // Experience Section
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text("EXPERIENCE", 20, 185)

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text("Web Development Intern", 20, 195)

  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text("CodSoft | June 2024 - July 2024 | Maharashtra, India", 20, 202)

  const responsibilities = [
    "• Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.js",
    "• Collaborated with team members to build full-stack web applications with clean code",
    "• Designed user interfaces with focus on mobile-first design and cross-browser compatibility",
    "• Optimized website performance and resolved front-end bugs to enhance user experience",
    "• Integrated APIs to fetch and display dynamic data in real-time web applications",
    "• Participated in regular code reviews and stand-up meetings",
    "• Explored modern web tools and frameworks to improve development efficiency",
    "• Created project documentation, user manuals, and reports",
    "• Managed and deployed projects on platforms like Vercel and Netlify",
  ]

  let yPosition = 210
  responsibilities.forEach((responsibility) => {
    const lines = doc.splitTextToSize(responsibility, 170)
    doc.text(lines, 25, yPosition)
    yPosition += lines.length * 5
  })

  // Add new page for projects and skills
  doc.addPage()

  // Projects Section
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text("PROJECTS", 20, 30)

  // ReviseAI
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text("ReviseAI", 20, 40)

  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text("AI-powered business idea validation platform using Lean Startup principles", 20, 47)
  doc.text("• Guides users through structured funnel: free call → UI prototype → MVP testing", 25, 55)
  doc.text("• Emphasizes impact + profitability with mission statements and OKRs", 25, 60)
  doc.text("• Features user-testing and landing-page creation tools", 25, 65)
  doc.text("Technologies: React.js, Node.js, AI Integration", 25, 70)
  doc.text("Live: https://reviseai.vercel.app/", 25, 75)

  // Maria Bakery
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text("Maria Bakery", 20, 90)

  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text("E-commerce style bakery storefront with comprehensive inventory management", 20, 97)
  doc.text("• Product listings with inventory and stock statuses", 25, 105)
  doc.text("• Detailed product information with prices and user reviews", 25, 110)
  doc.text("• Order form and About section with clean UI/UX", 25, 115)
  doc.text("Technologies: HTML5, CSS3, JavaScript, Responsive Design", 25, 120)
  doc.text("Live: https://mariabakery.vercel.app/", 25, 125)

  // Recipe Hub
  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.text("Recipe Hub", 20, 140)

  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text("Modern recipe sharing platform with search and filtering capabilities", 20, 147)
  doc.text("• Comprehensive recipe database with advanced search functionality", 25, 155)
  doc.text("• Filtering by cuisine, dietary preferences, and ingredients", 25, 160)
  doc.text("• User-friendly interface with responsive design", 25, 165)
  doc.text("Technologies: React.js, JavaScript, CSS3, API Integration", 25, 170)
  doc.text("Live: https://recipessssssss.vercel.app/", 25, 175)

  // Skills Section
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text("TECHNICAL SKILLS", 20, 195)

  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text("Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS", 20, 205)
  doc.text("Backend: Node.js, Express.js, API Integration", 20, 210)
  doc.text("Tools & Platforms: Git, GitHub, Vercel, Netlify", 20, 215)
  doc.text("Soft Skills: Communication, Problem Solving, Team Collaboration", 20, 220)

  // Languages
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text("LANGUAGES", 20, 235)

  doc.setFontSize(10)
  doc.setTextColor(60, 60, 60)
  doc.text("English (Fluent), Hindi (Native), Marathi (Native)", 20, 245)

  // Save the PDF
  doc.save("Nikhil_Patil_CV.pdf")

  console.log("CV PDF generated successfully!")
}

// Execute the function
generateCV()
