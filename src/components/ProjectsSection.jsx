
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Boardify",
    description: "Developed a simple task management system for organizing and tracking tasks. Utilized the Kanban Board method to enhance workflow visualization.",
    tags: ["React", "Firebase", "Gen-AI"],
    githubLink: "https://github.com/Saravanan-e-2003/Boardify",
    githubreponame:"Boardify",
    liveLink: "https://boardify-ebon.vercel.app/"
  },
  {
    id: 2,
    title: "WaveControl",
    description:"Developed a gesture-based control system using MediaPipe that enables users to interact with their PC, through real-time hand movements.",
    tags: ["Pyhton", "Mediapipe", "tensorflow"],
    githubLink: "https://github.com/Saravanan-e-2003/waveControl_handGesture_input_controls",
    githubreponame:"waveControl_handGesture"
  },
  {
    id: 3,
    title: "Game Prototypes",
    description: "Designed and published multiple interactive game prototypes on itch.io showcasing core gameplay mechanics and rapid prototyping skills using Unity and C#.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://noah03.itch.io/",
    liveLinkName:"noah03.itch.io"
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
                <h3 className="text-xl font-mono font-semibold text-hacker-green mb-2 cursor-pointer" 
                onClick={() =>{
                  const targetLink = project.githubLink || project.liveLink;
                  if(targetLink){
                    window.location.href = targetLink;
                  }
                }}> {project.title} </h3>
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
                
                <div className="flex justify-between items-center">
 
                {(project.githubLink || project.githubreponame) && (
                  <div className="flex items-center space-x-2">
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

                {project.githubreponame && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hacker-green hover:text-hacker-brightgreen transition-colors"
                >
                  {project.githubreponame}
                </a>
            )}
            </div>
              )}

       {/* Live link icon spaced separately */}
  {(project.liveLink || project.liveLinkName) && (
    <div className="flex items-center space-x-2">
    <a 
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-hacker-green hover:text-hacker-brightgreen transition-colors ml-4"
    >
      <ExternalLink size={18} />
    </a>
    {project.liveLinkName&& (
                <a 
                  href={project.liveLinkName} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-hacker-green hover:text-hacker-brightgreen transition-colors"
                >
                  {project.liveLinkName}
                </a>
    )}
    </div>
  )}


</div>
              </div>
              
              {/* Project overlay effect */}
              {/* <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-b from-transparent to-hacker-dark/90 opacity-100 transition-opacity",
                  hoveredProject === project.id && "opacity-40"
                )}
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
