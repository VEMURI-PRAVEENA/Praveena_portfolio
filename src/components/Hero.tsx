
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, FileText, ExternalLink, ArrowDown } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "AI Enthusiast",
    "Software Developer", 
    "Machine Learning Engineer",
    "Data Science Researcher"
  ];

  useEffect(() => {
    const currentString = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/lovable-uploads/8053af38-8789-4260-a47c-0d37687a1fee.png"
                alt="Praveena Vemuri"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up delay-200">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Vemuri Praveena</span>
        </h1>

        {/* Animated Role Text */}
        <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center animate-fade-in-up delay-400">
          <span>{displayText}</span>
          <span className="ml-1 animate-pulse">|</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-600">
          Passionate about building intelligent systems and data-driven solutions. 
          Currently pursuing B.Tech in CSE (AI & ML) at VIT-AP with hands-on experience in 
          cloud-native applications and deep learning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-800">
          <Button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            asChild
          >
            <a 
              href="https://drive.google.com/uc?export=download&id=1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </Button>
          
          <Button
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a 
              href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=share_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink size={20} />
              View Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up delay-1000">
          <a
            href="https://github.com/VEMURI-PRAVEENA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} className="text-white" />
          </a>
          <a
            href="https://linkedin.com/in/vemuri-praveena-22m26f11c"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="mailto:vempuripraveena2226@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} className="text-white" />
          </a>
          <a
            href="tel:+918639414811"
            className="p-3 rounded-full bg-white/10 hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          >
            <Phone size={24} className="text-white" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="animate-bounce cursor-pointer animate-fade-in-up delay-1200"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown size={32} className="text-white/70 hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
