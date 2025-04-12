
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hacker-dark border-t border-hacker-green/20 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="text-hacker-green font-mono text-lg font-bold mb-2">
              <span className="text-hacker-brightgreen">~</span>/dev_portfolio
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} All rights reserved
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-hacker-green hover:text-hacker-brightgreen transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-hacker-green hover:text-hacker-brightgreen transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-hacker-green hover:text-hacker-brightgreen transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-hacker-green/10 text-center text-gray-500 text-sm">
          <p>
            Built with <Heart size={14} className="inline-block text-hacker-green mb-1" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
