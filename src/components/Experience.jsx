import React from 'react'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'AI Developer Intern',
      company: 'Methix - A Jam',
      location: 'New York, USA',
      period: 'June 2025 - Present',
      description: 'Working on cutting-edge AI systems, focusing on multi-agentic architectures and generative AI solutions for the music industry.',
      achievements: [
        'Designed a Multi-Agentic AI system using LangGraph with coordinated Planner, Critic, and Tool-Using agents, reducing task error rates by 45% through structured reasoning.',
        'Constructed a secure RAG pipeline using Azure AI Search, added a re-ranking layer and retrieval filtering to minimize hallucinations by 40%.',
        'Implemented fine-tuning on GPT-4 via Azure AI Foundry, incorporating SHAP for model transparency, improving performance by 35% on domain-specific prompts.',
        'Eliminated trigger commands by deploying contextual intent-detection models and feedback-driven loops, enhancing human-AI collaboration success rate by 60%.'
      ],
      technologies: ['LangGraph', 'Azure AI Search', 'GPT-4', 'Azure AI Foundry', 'SHAP', 'RAG']
    },
    {
      title: 'ML Engineer Intern',
      company: 'Purcell Global Limited',
      location: 'London, UK (Remote)',
      period: 'June 2025 - Present',
      description: 'Developing real-time machine learning solutions for healthcare monitoring systems, focusing on respiratory data analysis and predictive modeling.',
      achievements: [
        'Integrated multi-modal sensor inputs (pressure, audio, throat imaging) using AWS serverless tools to enable continuous patient monitoring with high system stability.',
        'Designed and deployed a Lambda-based real-time signal segmentation pipeline for respiratory pressure data, achieving 98% detection accuracy of inhalation events.',
        'Developed a time-series predictive model using LSTM and temporal feature engineering to forecast COPD exacerbation risk and adherence trends.'
      ],
      technologies: ['AWS Lambda', 'LSTM', 'Multi-modal AI', 'Signal Processing', 'Time-series Analysis']
    },
    {
      title: 'Data Science Intern',
      company: 'Coders Cave',
      location: 'Coimbatore, Tamil Nadu',
      period: 'July 2023 - August 2023',
      description: 'Applied machine learning techniques to develop predictive models for business applications, focusing on price prediction and healthcare analytics.',
      achievements: [
        'Developed Random Forest and Neural Network models for price and diabetes prediction using SQL-driven data pipelines.',
        'Presented insights to 50 non-technical stakeholders, effectively communicating complex technical concepts.',
        'Built comprehensive data pipelines for model training and deployment.'
      ],
      technologies: ['Random Forest', 'Neural Networks', 'SQL', 'Data Pipelines', 'Stakeholder Communication']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white/50 dark:bg-gray-900/50 shadow-2xl transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey in AI, machine learning, and data science
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 z-10 border-4 border-white dark:border-gray-900"></div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0">
                  <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience