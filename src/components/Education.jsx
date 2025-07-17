import React from 'react'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Data Science, Analytics and Engineering',
      school: 'Arizona State University',
      location: 'Tempe, AZ',
      period: '2024 - 2026',
      gpa: '3.89/4.00',
      description: 'Advanced study in data science, machine learning, and analytics engineering with focus on AI/ML applications and research.',
      coursework: [
        'Machine Learning',
        'Data Mining',
        'Statistical Analysis',
        'DeepLearning',
        'Big Data Analytics',
        'Research Methods'
      ],
      achievements: [
        'High academic performance with 389 GPA',
        'Research in AI and data science applications',
        'Tive participation in data science projects',
        'Expected graduation: May 2026'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      school: 'Kumaraguru College of Technology',
      location: 'Coimbatore, Tamil Nadu',
      period: '2020 - 2024',
      gpa: '3.56/4.00',
      description: 'Comprehensive study in computer science fundamentals, software engineering, and programming concepts.',
      coursework: [
        'Data Structures and Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Operating Systems',
        'Computer Networks'
      ],
      achievements: [
        'Strong academic foundation with 356 GPA',
        'Graduated: May 2024',
        'Completed core computer science curriculum',
        'Developed programming and problem-solving skills'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Microsoft: Azure AI fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      badgeColor: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Microsoft: Azure - Data fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      badgeColor: 'from-blue-500 to-purple-500'
    },
    {
      name: 'IBM - AI engineering',
      issuer: 'IBM',
      date: '2023',
      badgeColor: 'from-gray-700 to-blue-500'
    },
    {
      name: 'Python for data science, AI & development',
      issuer: 'IBM',
      date: '2023',
      badgeColor: 'from-yellow-400 to-blue-400'
    },
    {
      name: 'Unlocked agile with Atlassian JIRA',
      issuer: 'Atlassian',
      date: '2023',
      badgeColor: 'from-blue-600 to-green-400'
    },
    {
      name: 'Project Management and Interpersonal Skills in Project Management (Ongoing)',
      issuer: 'Ira Fulton School of Engineering',
      date: '2025',
      badgeColor: 'from-purple-600 to-pink-400'
    }
  ]

  const research = {
    title: 'Green Fault Lines: Climate Change & Political Economy',
    description: 'Applied fixed-effects and clustered GLMs to model the relationship between climate vulnerability, institutional quality, and socio-economic readiness across 32 nations, using ND-GAIN and QoG data in R.'
  }

  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-gray-800/50 shadow-2xl transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic background and professional certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-blue-600" />
                Academic Background
              </h3>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                  >
                  {/* Header */}
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} />
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {edu.school}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span className="font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Coursework */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <Award className="text-purple-600" />
                Research & Certifications
              </h3>

              {/* Research Experience */}
              <div className="mb-10 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {research.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {research.description}
                </p>
              </div>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${cert.badgeColor} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        <Award size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} />
                          <span>Earned in {cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Continuous Learning
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm committed to continuous learning and staying updated with the latest 
                  technologies and industry trends. Currently pursuing additional certifications 
                  in cloud computing and advanced React patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education