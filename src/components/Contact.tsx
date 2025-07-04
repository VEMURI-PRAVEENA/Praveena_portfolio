
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can integrate with email service or backend here
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-sans">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
            I'm always interested in discussing new opportunities, collaborations, and innovative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white font-sans">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-red-600/20 border border-red-500/30">
                      <Mail className="text-red-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-sans">Email</p>
                      <a 
                        href="mailto:vempuripraveena2226@gmail.com"
                        className="text-white hover:text-red-400 transition-colors font-sans"
                      >
                        vempuripraveena2226@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-green-600/20 border border-green-500/30">
                      <Phone className="text-green-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-sans">Phone</p>
                      <a 
                        href="tel:+918639414811"
                        className="text-white hover:text-green-400 transition-colors font-sans"
                      >
                        +91 8639414811
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-purple-600/20 border border-purple-500/30">
                      <MapPin className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-sans">Location</p>
                      <p className="text-white font-sans">Amaravati, Andhra Pradesh, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="text-lg font-semibold mb-4 text-white font-sans">Follow Me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/VEMURI-PRAVEENA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-gray-600"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href="https://linkedin.com/in/vemuri-praveena-22m26f11c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-blue-600/20 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 border border-blue-500/30 hover:border-blue-500"
                    >
                      <Linkedin size={20} className="text-blue-400 hover:text-white" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message Form */}
          <div>
            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white font-sans">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2 font-sans">Your Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 font-sans"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-2 font-sans">Your Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-sans">Subject</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 font-sans"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-sans">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how we can collaborate..."
                      rows={6}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500/20 resize-none font-sans"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 font-sans"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
