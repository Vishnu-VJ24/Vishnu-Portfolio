import React, { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vishnujayanth.24@gmail.com',
      link: 'mailto:vishnujayanth.24@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '(602) 807-9922',
      link: 'tel:+16028079922'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Phoenix, AZ, USA',
      link: 'https://maps.google.com/maps?q=Phoenix,AZ'
    }
  ]

  const socialLinks = [
    {
      icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/vishnu--vj'
    },
    {
      icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .321.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>,
      title: 'GitHub',
      link: 'https://github.com/Vishnu-VJ24'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white/50 dark:bg-gray-900/50 shadow-2xl transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              AI software developer passionate about building intelligent, data-driven systems and delivering impactful solutions with modern technologies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, 
                or just chatting about technology. Feel free to reach out through any 
                of the following channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 mb-4">
                    <info.icon size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h4>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/vishnu--vj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://github.com/Vishnu-VJ24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-110 transition-all duration-300"
                >
                  <Github size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact