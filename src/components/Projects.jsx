import React from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'
import wildfireImg from '../assets/How-AI-Powered-Drones-Could-Fight-Wildfires.jpg';
import neo4jImg from '../assets/neo4j.jpg';
import dimRedImg from '../assets/Dimensionality-Reduction-for-Machine-Learning_5.webp';
import singaporeImg from '../assets/Singapore.jpg';
import notesImg from '../assets/Notes maker.png';
import plantImg from '../assets/plant disease.jpg';

const Projects = () => {
  const githubProfile = 'https://github.com/Vishnu-VJ24';
  const projects = [
    {
      title: 'AI-Driven Wildfire Prediction and Detection System',
      description: 'Engineered a hybrid deep learning model (LSTM + dense layers) to predict wildfire occurrence, intensity, and spread, achieving 82% recall. Deployed attention and spatial features across 473K+ records to forecast high-risk zones.',
      image: wildfireImg,
      technologies: ['LSTM', 'Deep Learning', 'Attention Mechanisms', 'Spatial Analysis', 'Python'],
      liveUrl: githubProfile,
      githubUrl: githubProfile,
      featured: true
    },
    {
      title: 'Data Pipeline and Graph Analytics with Kafka and Neo4j',
      description: 'Built a real-time data ingestion pipeline with Kafka to Neo4j with Kubernetes orchestration. Executed PageRank and BFS algorithms to uncover transit hubs and route efficiency on NYC taxi trip data.',
      image: neo4jImg,
      technologies: ['Apache Kafka', 'Neo4j', 'Kubernetes', 'PageRank', 'BFS', 'Graph Analytics'],
      liveUrl: githubProfile,
      githubUrl: githubProfile,
      featured: true
    },
    {
      title: 'Image Classification and Dimensionality Reduction',
      description: 'Developed and optimized ML models (CNN, SVM, PCA+FNN) on MNIST and CIFAR-10, achieving up to 92% accuracy and reducing training time by 35% using PCA and grid search.',
      image: dimRedImg,
      technologies: ['CNN', 'SVM', 'PCA', 'Neural Networks', 'Computer Vision', 'Scikit-learn'],
      liveUrl: githubProfile,
      githubUrl: githubProfile,
      featured: true
    },
    {
      title: 'Singapore Residents: Dynamic Data Analysis',
      description: "Modeled and forecasted Singapore's demographic trends (1957-2023) using ARIMA, regression, and RCTs, attaining 97% accuracy in population growth prediction.",
      image: singaporeImg,
      technologies: ['ARIMA', 'Regression Analysis', 'RCTs', 'Time Series', 'Statistical Modeling'],
      liveUrl: githubProfile,
      githubUrl: githubProfile,
      featured: false
    },
    {
      title: 'Automated Abstract Notes Maker',
      description: 'Built an end-to-end abstractive summarization pipeline by fine-tuning BART and Whisper on multi-accent audio/video input, enhancing speech-to-text accuracy and enabling automated note-taking.',
      image: notesImg,
      technologies: ['BART', 'Whisper', 'Fine-tuning', 'NLP', 'Speech Recognition', 'Summarization'],
      liveUrl: githubProfile,
      githubUrl: githubProfile,
      featured: false
    },
    {
      title: 'Plant Disease Detection',
      description: 'Trained a ResNet-based CNN and applied transfer learning to classify diseased plant leaves with 89% accuracy.',
      image: plantImg,
      technologies: ['ResNet', 'CNN', 'Transfer Learning', 'Computer Vision', 'TensorFlow', 'Image Classification'],
      liveUrl: githubProfile,
      githubUrl: githubProfile,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  const ProjectCard = ({ project, isFeatured = false }) => (
    <div className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden ${
      isFeatured ? 'md:col-span-2' : ''
    }`}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
          >
            <ExternalLink size={16} className="text-gray-800" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
          >
            <Github size={16} className="text-gray-800" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 font-medium"
          >
            <Eye size={16} />
            View
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-800/50 shadow-2xl transition-colors duration-300 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and technical achievements
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} isFeatured={true} />
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Want to see more?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more AI/ML projects and contributions to open-source software.
              </p>
              <a
                href="https://github.com/Vishnu-VJ24"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 font-semibold"
              >
                <Github size={20} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects