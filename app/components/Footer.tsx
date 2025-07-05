import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Nikhil Patil</h3>
              <p className="text-gray-400 mb-4">Web Developer passionate about creating amazing digital experiences.</p>
              <div className="flex gap-4">
                <a
                  href="mailto:nikhilpatil29032005@gmail.com"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Education", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>nikhilpatil29032005@gmail.com</p>
                <p>+91 9373565412</p>
                <p>Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} Nikhil Patil. Made with <Heart className="text-red-500" size={16} /> and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
