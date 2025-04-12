
import { useState, FormEvent } from 'react';
import { cn } from '@/lib/utils';
import { Send, Mail, Globe, Github } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        className: "bg-hacker-gray border-hacker-green text-hacker-brightgreen",
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-hacker-green mb-4">
            <Mail className="inline-block mr-2 mb-1" /> Contact
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-hacker-gray/30 backdrop-blur-sm rounded-lg border border-hacker-green/20 p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-mono text-hacker-green mb-1 block">_name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-hacker-lightgray/50 border border-hacker-green/20 rounded px-4 py-2 text-white focus:outline-none focus:border-hacker-green/50 focus:ring-1 focus:ring-hacker-green/30"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm font-mono text-hacker-green mb-1 block">_email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-hacker-lightgray/50 border border-hacker-green/20 rounded px-4 py-2 text-white focus:outline-none focus:border-hacker-green/50 focus:ring-1 focus:ring-hacker-green/30"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-mono text-hacker-green mb-1 block">_message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-hacker-lightgray/50 border border-hacker-green/20 rounded px-4 py-2 text-white focus:outline-none focus:border-hacker-green/50 focus:ring-1 focus:ring-hacker-green/30"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-hacker-green/20 border border-hacker-green/40 rounded py-2 text-hacker-green font-mono transition-all",
                  "hover:bg-hacker-green/30 hover:shadow-[0_0_10px_rgba(57,255,20,0.3)]",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} className="inline-block mr-2 mb-1" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-hacker-gray/30 backdrop-blur-sm rounded-lg border border-hacker-green/20 p-6 mb-6">
              <h3 className="text-xl font-mono font-semibold text-hacker-green mb-4">Let's Connect</h3>
              <p className="text-gray-400 mb-6">
                I'm currently available for freelance work and open to new opportunities. Whether you have a question or just want to say hello, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hello@example.com" className="flex items-center text-hacker-green hover:text-hacker-brightgreen transition-colors">
                  <Mail size={18} className="mr-3" />
                  <span>hello@example.com</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-hacker-green hover:text-hacker-brightgreen transition-colors">
                  <Github size={18} className="mr-3" />
                  <span>github.com/username</span>
                </a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-hacker-green hover:text-hacker-brightgreen transition-colors">
                  <Globe size={18} className="mr-3" />
                  <span>example.com</span>
                </a>
              </div>
            </div>
            
            <div className="bg-hacker-green/10 rounded-lg border border-hacker-green/20 p-6">
              <div className="font-mono">
                <p className="text-hacker-green mb-1">$ ping developer</p>
                <p className="text-gray-400 pl-3">PING developer: 56 data bytes</p>
                <p className="text-gray-400 pl-3">64 bytes from developer: icmp_seq=0 ttl=64 time=0.035 ms</p>
                <p className="text-gray-400 pl-3">64 bytes from developer: icmp_seq=1 ttl=64 time=0.028 ms</p>
                <p className="text-hacker-green mt-2">Status: <span className="text-hacker-brightgreen">ONLINE</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
