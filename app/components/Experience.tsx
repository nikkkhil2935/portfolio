import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const responsibilities = [
    "Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.js",
    "Collaborated with team members to build full-stack web applications with clean code and version control via GitHub",
    "Designed user interfaces with a focus on mobile-first design and cross-browser compatibility",
    "Optimized website performance and resolved front-end bugs to enhance user experience",
    "Integrated APIs to fetch and display dynamic data in real-time web applications",
    "Participated in regular code reviews and stand-up meetings to align with project goals",
    "Explored modern web tools and frameworks to improve development efficiency",
    "Created project documentation, user manuals, and reports for internal and client use",
    "Managed and deployed projects on platforms like Vercel and Netlify",
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Experience</h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Briefcase className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Development Intern</h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">CodSoft</p>
                <div className="flex flex-wrap gap-4 text-gray-700 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>June 2024 - July 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800">{responsibility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
