
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const typewriterTexts = [
    "Hi, I'm Praveena",
    "AI & Machine Learning Engineer"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const typewriterTimer = setTimeout(() => {
        setShowTypewriter(true);
      }, 800);
      return () => clearTimeout(typewriterTimer);
    }
  }, [isVisible]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 font-serif relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Profile Image - Now at the top */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            <div className="relative group">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 p-2 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-white p-2 shadow-2xl group-hover:shadow-purple-200 transition-all duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src="/lovable-uploads/8053af38-8789-4260-a47c-0d37687a1fee.png"
                      alt="Praveena Vemuri"
                      className="w-full h-full object-cover animate-float"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute top-8 -left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center animate-bounce delay-500 shadow-lg">
                <span className="text-lg">🧠</span>
              </div>
            </div>
          </div>

          {/* Animated Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              {/* Typewriter Animation */}
              <div className="min-h-[4rem] md:min-h-[6rem]">
                {showTypewriter && (
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight typewriter-animation">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      Praveena
                    </span>
                  </h1>
                )}
              </div>
              
              <div className="min-h-[2rem] md:min-h-[3rem]">
                {showTypewriter && (
                  <h2 className="text-xl md:text-2xl text-gray-600 font-medium typewriter-animation-delayed">
                    AI & Machine Learning Engineer
                  </h2>
                )}
              </div>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-1000">
                Passionate about building intelligent systems and data-driven solutions. 
                Currently pursuing B.Tech in CSE (AI & ML) at VIT-AP with hands-on experience in 
                cloud-native applications and deep learning.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-1200">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="relative z-10">View My Work</span>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm bg-white/80"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links - Always visible with enhanced hover effects */}
            <div className="flex justify-center space-x-8 pt-6 animate-fade-in-up delay-1400">
              <a
                href="https://github.com/VEMURI-PRAVEENA"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-900"
              >
                <Github size={24} className="text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/vemuri-praveena-22m26f11c"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-600"
              >
                <Linkedin size={24} className="text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:vempuripraveena2226@gmail.com"
                className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-500"
              >
                <Mail size={24} className="text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="tel:+918639414811"
                className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-500"
              >
                <Phone size={24} className="text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-fade-in-up delay-1600">
          <button
            onClick={scrollToProjects}
            className="group p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce hover:animate-pulse"
          >
            <ArrowDown size={28} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
