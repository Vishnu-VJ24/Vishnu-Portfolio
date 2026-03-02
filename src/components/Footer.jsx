import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/vishnu--vj',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:vishnujayanth.24@gmail.com',
      label: 'Email'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900/90 text-white shadow-2xl backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Vishnu Jayanth
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                <b>AI Developer</b>
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <nav className="space-y-2">
                {['About', 'Experience', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase())
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
              <div className="space-y-2 text-gray-300">
                <p>Phoenix, AZ, USA</p>
                <a
                  href="mailto:vishnujayanth.24@gmail.com"
                  className="block hover:text-blue-400 transition-colors duration-200"
                >
                  vishnujayanth.24@gmail.com
                </a>
                <p>Available for new opportunities</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-300">
                <span>© {currentYear} Vishnu Jayanth. Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>and React</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer