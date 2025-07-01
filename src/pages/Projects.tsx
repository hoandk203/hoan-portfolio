
import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Scrap Collection Management Platform",
      description: "Developed a platform for managing scrap collection operations across a chain of stores, supporting multiple user roles (Admin, Vendor, Store, Driver).",
      period: "01/2025 - 04/2025",
      type: "Fullstack (Personal Project)",
      technologies: {
        Frontend: ["Next.js", "React", "TypeScript", "Material-UI", "Redux", "Tailwind"],
        Backend: ["NestJS", "PostgreSQL", "TypeORM", "JWT"],
        Tools: ["Docker", "Git"]
      },
      url: "https://f8-final-project.vercel.app",
      github: "https://github.com/hoandk203/F8_Final_Project",
      features: [
        "Multi-role user management system",
        "Real-time inventory tracking",
        "Dashboard with analytics",
        "Responsive design"
      ]
    },
    {
      title: "Content Sharing & Management Platform",
      description: "Built a content sharing and management platform optimized for interaction, security, and performance analytics.",
      period: "05/2025 - 06/2025",
      type: "Fullstack (Personal Project)",
      technologies: {
        Frontend: ["Next.js", "React", "TypeScript", "Material-UI", "Redux", "Tailwind"],
        Backend: ["NestJS", "PostgreSQL", "TypeORM", "JWT", "Redis"],
        Tools: ["Docker", "Git"]
      },
      url: "https://quant-blog-ten.vercel.app",
      github: "https://github.com/hoandk203/Quant-Blog",
      features: [
        "Content management system",
        "User authentication & authorization",
        "Real-time notifications",
        "Performance analytics",
        "SEO optimization"
      ]
    },
    {
      title: "Tourism & Vehicle Management System",
      description: "A platform designed to provide tourism-related services such as vehicle rentals, guided tours, and other travel services.",
      period: "02/2025 - 04/2025",
      type: "Frontend (Team Project)",
      technologies: {
        Frontend: ["Nuxt.js 3", "Vue.js", "Element Plus", "TailwindCSS"],
        Backend: ["FastAPI", "Python", "PostgreSQL", "Peewee", "JWT"],
        Tools: ["Docker", "i18n"]
      },
      url: "https://www.haidangtourist.com.vn",
      github: "https://github.com/hoandk203/car_management_public_ver",
      features: [
        "Vehicle rental system",
        "Tour booking management",
        "Multi-language support",
        "Payment integration",
        "Admin dashboard"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-6">
          My Projects
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A collection of projects I've worked on, from personal applications to team projects, 
          including both frontend and fullstack applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
            <div className="lg:flex">
              {/* Project Preview */}
              <div className="lg:w-1/2 h-64 lg:h-auto bg-gray-900 relative overflow-hidden">
                <iframe
                  src={project.url}
                  className="w-full h-full scale-75 origin-top-left transform"
                  style={{ width: '133%', height: '133%' }}
                  title={project.title}
                />
                {/* <div className="absolute inset-0 bg-gray-900/10"></div> */}
              </div>
              
              {/* Project Details */}
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-sm rounded border border-blue-600/30">
                    {project.type}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
                  {Object.entries(project.technologies).map(([category, techs]) => (
                    <div key={category} className="mb-2">
                      <span className="text-blue-400 text-sm font-medium">{category}: </span>
                      <div className="inline-flex flex-wrap gap-1 mt-1">
                        {techs.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-200 text-black font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-gray-800 rounded-lg border border-gray-700">
        <p className="text-gray-300 mb-6">
          I'm always open to discussing new projects and exciting collaboration opportunities.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-50 hover:bg-blue-200 text-black font-medium rounded-lg transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Projects;
