
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Secure Authentication System",
    description: "Developed a robust authentication system with multi-factor authentication and encryption using JWT.",
    tags: ["React", "Node.js", "JWT", "Cybersecurity"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard to visualize complex data sets with customizable filters and real-time updates.",
    tags: ["D3.js", "TypeScript", "Firebase", "Redux"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with payment processing, inventory management, and analytics.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "#",
    liveLink: "#"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-hacker-green mb-4">
            <Code className="inline-block mr-2 mb-1" /> Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work and personal projects. Each one designed with security and performance in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-hacker-gray/30 backdrop-blur-sm border border-hacker-green/20 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-48 bg-hacker-lightgray flex items-center justify-center">
                <div className="text-6xl text-hacker-green/30">&lt;/&gt;</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-mono font-semibold text-hacker-green mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-hacker-lightgray/40 text-hacker-green px-2 py-1 rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-hacker-green hover:text-hacker-brightgreen transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hacker-green hover:text-hacker-brightgreen transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project overlay effect */}
              <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-b from-transparent to-hacker-dark/90 opacity-0 transition-opacity",
                  hoveredProject === project.id && "opacity-100"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
