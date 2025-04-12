
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(section);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-8 left-0 right-0 z-50 mx-auto max-w-7xl px-6 transition-all duration-300",
        isScrolled ? "top-2" : "top-8"
      )}
    >
      <div className="relative flex items-center justify-between rounded-full bg-hacker-gray/90 backdrop-blur-sm px-4 py-3 border border-hacker-green/30">
        <div className="text-hacker-green font-mono text-lg font-bold animate-glow">
          <span>~/dev_portfolio$</span>
          <span className="cursor"></span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {['home', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn(
                "px-4 py-2 rounded-full font-mono text-sm uppercase tracking-wider transition-colors",
                activeSection === section
                  ? "bg-hacker-green text-hacker-dark"
                  : "text-hacker-green hover:bg-hacker-lightgray"
              )}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-hacker-green hover:text-hacker-brightgreen transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-lg bg-hacker-gray/90 backdrop-blur-sm border border-hacker-green/30 overflow-hidden">
          {['home', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={cn(
                "block w-full text-left px-6 py-3 font-mono text-sm uppercase tracking-wider transition-colors",
                activeSection === section
                  ? "bg-hacker-green/20 text-hacker-brightgreen"
                  : "text-hacker-green hover:bg-hacker-lightgray/50"
              )}
            >
              &gt; {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
