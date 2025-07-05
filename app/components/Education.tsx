import { GraduationCap, Award, Users, Trophy } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Education</h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="text-blue-600" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Bachelor of Engineering - Information Technology
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  Vidyavardhini College of Engineering And Technology, Vasai
                </p>
                <p className="text-gray-700 mb-4">Expected Graduation: June 2026</p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Award className="text-green-600" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">CGPA: 7.08</p>
                      <p className="text-sm text-gray-700">Consistent Performance</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="text-purple-600" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">C3 Committee</p>
                      <p className="text-sm text-gray-700">Active Member</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Trophy className="text-orange-600" size={20} />
                    <div>
                      <p className="font-semibold text-gray-800">Badminton</p>
                      <p className="text-sm text-gray-700">College Representative</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
