
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vempuripraveena2226@gmail.com",
      href: "mailto:vempuripraveena2226@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8639414811",
      href: "tel:+918639414811",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vemuri-praveena-22m26f11c",
      href: "https://linkedin.com/in/vemuri-praveena-22m26f11c",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "VEMURI-PRAVEENA",
      href: "https://github.com/VEMURI-PRAVEENA",
      color: "text-gray-300"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ongole, Andhra Pradesh, India",
      href: null,
      color: "text-red-400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always excited to discuss AI/ML projects, collaboration opportunities, or just have a great conversation about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're looking to collaborate on exciting AI projects, discuss opportunities, 
                or just want to chat about the latest in machine learning, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className={`${info.color} p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-300`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 uppercase tracking-wide">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="flex space-x-4">
                <Button
                  asChild
                  className="border-white/30 text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 hover:scale-105 hover:shadow-lg"
                  variant="outline"
                >
                  <a 
                    href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=share_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </Button>
                <Button
                  onClick={scrollToProjects}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 hover:scale-105 hover:shadow-lg"
                >
                  My Projects
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-[#1e1e2f]/80 backdrop-blur-sm border-gray-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send me a message</CardTitle>
              <CardDescription className="text-gray-300">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
