
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, FileText, ArrowDown, Eye } from "lucide-react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "AI Enthusiast",
    "Researcher", 
    "Software Developer",
    "Data Science Enthusiast"
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
    }, isDeleting ? 50 : 150);

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
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="text-center z-10 max-w-5xl mx-auto">
        {/* Profile Image - Moved down */}
        <div className="mb-8 mt-16 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-teal-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/25">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-2 border-gray-800">
                <img
                  src="/lovable-uploads/8053af38-8789-4260-a47c-0d37687a1fee.png"
                  alt="Praveena Vemuri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-blue-500/20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up delay-200 font-sans">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">Vemuri Praveena</span>
        </h1>

        {/* Animated Role Text */}
        <div className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 h-16 flex items-center justify-center animate-fade-in-up delay-400 font-sans">
          <span className="text-teal-400">{displayText}</span>
        </div>

        {/* Career Objective */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-600 font-sans">
          Passionate about building intelligent systems and data-driven solutions. 
          Currently pursuing B.Tech in CSE (AI & ML) at VIT-AP with hands-on experience in 
          cloud-native applications and deep learning technologies.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-800">
          <Button
            className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-purple-500/20 font-sans"
            asChild
          >
            <a 
              href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Eye size={20} />
              View Resume
            </a>
          </Button>
          
          <Button
            className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600 font-sans"
            asChild
          >
            <a 
              href="https://drive.google.com/uc?export=download&id=1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <FileText size={20} />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-16 animate-fade-in-up delay-1000">
          <a
            href="https://github.com/VEMURI-PRAVEENA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-gray-600"
          >
            <Github size={24} className="text-white" />
          </a>
          <a
            href="https://linkedin.com/in/vemuri-praveena-22m26f11c"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-800/50 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-blue-500"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="mailto:vempuripraveena2226@gmail.com"
            className="p-4 rounded-full bg-gray-800/50 hover:bg-red-600 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-red-500"
          >
            <Mail size={24} className="text-white" />
          </a>
          <a
            href="tel:+918639414811"
            className="p-4 rounded-full bg-gray-800/50 hover:bg-green-600 transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-500"
          >
            <Phone size={24} className="text-white" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="animate-bounce cursor-pointer animate-fade-in-up delay-1200"
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown size={32} className="text-teal-400 hover:text-teal-300 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
