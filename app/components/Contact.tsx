"use client"

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="text-blue-600" size={28} />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">Email</h4>
              <p className="text-gray-700">nikhilpatil29032005@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="text-green-600" size={28} />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">Phone</h4>
              <p className="text-gray-700">+91 9373565412</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="text-purple-600" size={28} />
              </div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">Location</h4>
              <p className="text-gray-700">Maharashtra, India</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/nikkkhil2935"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikhil-patil-139137258"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:nikhilpatil29032005@gmail.com"
                className="p-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
