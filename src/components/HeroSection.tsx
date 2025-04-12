
import { useState, useEffect } from 'react';
import TypewriterEffect from './TypewriterEffect';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [showCommand, setShowCommand] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    // Add staggered effect for animations
    const commandTimer = setTimeout(() => setShowCommand(true), 500);
    return () => clearTimeout(commandTimer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="max-w-3xl w-full space-y-8">
        <div className="bg-hacker-gray/30 backdrop-blur-sm rounded-lg border border-hacker-green/20 p-6 shadow-lg">
          <div className="flex items-center mb-5 text-hacker-green/60">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <div className="ml-4 text-xs tracking-wider">~/terminal</div>
          </div>
          
          <div className="font-mono space-y-4">
            <p className="text-gray-400">
              <span className="text-hacker-green">root@portfolio</span>:~$ <TypewriterEffect text="whoami" delay={100} onComplete={() => setShowBio(true)} />
            </p>
            
            {showBio && (
              <div className="text-gray-200 pl-0 md:pl-6 space-y-4 leading-relaxed">
                <TypewriterEffect 
                  text="I'm a full-stack developer specializing in creating secure, scalable web applications with a focus on both functionality and aesthetics."
                  delay={20}
                  onComplete={() => setShowFinalText(true)}
                />
                
                {showFinalText && (
                  <>
                    <p className="text-gray-400">
                      <span className="text-hacker-green">root@portfolio</span>:~$ <TypewriterEffect text="get_skills" delay={80} />
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pl-0 md:pl-6 font-mono text-sm">
                      {['React', 'TypeScript', 'Node.js', 'Python', 'Go', 'AWS', 'Docker', 'GraphQL', 'Cybersecurity'].map((skill, index) => (
                        <div key={index} className={cn(
                          "bg-hacker-lightgray/40 border border-hacker-green/20 rounded px-3 py-1 text-center",
                          "text-hacker-green hover:text-hacker-brightgreen hover:border-hacker-green transition-colors"
                        )}>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            
            {showCommand && !showBio && <span className="animate-terminal-blink">_</span>}
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="#projects"
            className="inline-block bg-hacker-green/20 hover:bg-hacker-green/30 text-hacker-brightgreen border border-hacker-green/40 rounded-full px-6 py-2 transition-all hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] font-mono"
          >
            &lt; Explore Projects /&gt;
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
