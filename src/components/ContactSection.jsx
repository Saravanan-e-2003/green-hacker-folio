
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// const client = new SMTPClient({
// 	user: 'user',
// 	password: 'password',
// 	host: 'smtp.your-email.com',
// 	ssl: true,
// });

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast({ title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
       });
      
    })
    .catch((error) => {
      toast({ title: "Oops!", description: "Something went wrong." });
    });
    
    // try {
    //   const message = await client.sendAsync({
    //     text: formData.message,
    //     from: formData.email,
    //     to: import.meta.env.VITE_CONTACT_EMAIL,
    //     subject: `Hiring@Portfolio from [${formData.name}]`,
    //   });
    //   console.log(message);
    // } catch (err) {
    //   console.error(err);
    // }

    // Simulate form submission
    setTimeout(() => {      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-hacker-green mb-4">
            <Send className="inline-block mr-2 mb-1" /> Contact Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message and let's discuss how we can work together.
          </p>
        </div>
        
        <div className="bg-hacker-gray/30 backdrop-blur-sm rounded-lg border border-hacker-green/20 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-hacker-green font-mono text-sm">
                  Name:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-hacker-lightgray/20 border border-hacker-green/30 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-hacker-green/50"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-hacker-green font-mono text-sm">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-hacker-lightgray/20 border border-hacker-green/30 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-hacker-green/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-hacker-green font-mono text-sm">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-hacker-lightgray/20 border border-hacker-green/30 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-hacker-green/50"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-hacker-green/20 hover:bg-hacker-green/30 text-hacker-brightgreen border border-hacker-green/40 rounded-full px-8 py-2 transition-all hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] font-mono flex items-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={16} className={`${isLoading ? 'animate-pulse' : ''}`} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
