import { Code, Database, Globe, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-blue-600" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
      color: "blue",
    },
    {
      title: "Backend Development",
      icon: <Database className="text-green-600" size={24} />,
      skills: ["Node.js", "Express.js", "API Integration"],
      color: "green",
    },
    {
      title: "Development Tools",
      icon: <Wrench className="text-purple-600" size={24} />,
      skills: ["Git", "GitHub", "Vercel", "Netlify"],
      color: "purple",
    },
    {
      title: "Soft Skills",
      icon: <Code className="text-orange-600" size={24} />,
      skills: ["Communication", "Problem Solving", "Team Collaboration", "Project Management"],
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200",
      green: "bg-green-50 border-green-200",
      purple: "bg-purple-50 border-purple-200",
      orange: "bg-orange-50 border-orange-200",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${getColorClasses(category.color)} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="font-bold text-gray-800">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-gray-800 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
