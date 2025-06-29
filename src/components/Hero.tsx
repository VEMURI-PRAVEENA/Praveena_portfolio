
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText1, setTypewriterText1] = useState("");
  const [typewriterText2, setTypewriterText2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  const text1 = "Hi, I'm Praveena";
  const text2 = "AI & Machine Learning Engineer";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const runTypewriterAnimation = () => {
      // Reset states
      setTypewriterText1("");
      setTypewriterText2("");
      setShowCursor1(true);
      setShowCursor2(false);

      // Type first text
      let i = 0;
      const typeText1 = () => {
        if (i < text1.length) {
          setTypewriterText1(text1.slice(0, i + 1));
          i++;
          setTimeout(typeText1, 100);
        } else {
          // Brief pause, then hide first cursor and start second text
          setTimeout(() => {
            setShowCursor1(false);
            setShowCursor2(true);
            
            // Type second text
            let j = 0;
            const typeText2 = () => {
              if (j < text2.length) {
                setTypewriterText2(text2.slice(0, j + 1));
                j++;
                setTimeout(typeText2, 80);
              } else {
                // Show complete text for 5 seconds, then restart
                setTimeout(() => {
                  setAnimationCycle(prev => prev + 1);
                  runTypewriterAnimation();
                }, 5000);
              }
            };
            typeText2();
          }, 500);
        }
      };
      typeText1();
    };

    // Start the animation after initial delay
    const initialTimer = setTimeout(runTypewriterAnimation, 800);
    return () => clearTimeout(initialTimer);
  }, [isVisible, animationCycle]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 font-serif relative overflow-hidden">
      {/* Enhanced Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-gentle-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-gentle-pulse animation-delay-2s"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-gentle-pulse animation-delay-4s"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          
          {/* Enhanced Profile Image with Advanced Animations */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            <div className="relative group profile-hover-container">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 p-1.5 md:p-2 animate-gentle-float group-hover:animate-hover-lift transition-all duration-500 hover:shadow-glow">
                <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm p-1.5 md:p-2 shadow-2xl group-hover:shadow-purple-200/50 transition-all duration-500 hover:bg-white">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-700 relative">
                    <img
                      src="/lovable-uploads/8053af38-8789-4260-a47c-0d37687a1fee.png"
                      alt="Praveena Vemuri - AI & Machine Learning Engineer"
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 group-hover:to-white/20 transition-all duration-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating AI/ML themed elements */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-bounce-gentle shadow-lg hover:shadow-blue-300/50 transition-shadow duration-300">
                <span className="text-lg md:text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse-gentle shadow-lg hover:shadow-purple-300/50 transition-shadow duration-300">
                <span className="text-sm md:text-xl">⚡</span>
              </div>
              <div className="absolute top-6 -left-6 md:top-8 md:-left-8 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center animate-bounce-gentle animation-delay-1s shadow-lg hover:shadow-pink-300/50 transition-shadow duration-300">
                <span className="text-xs md:text-lg">🧠</span>
              </div>
            </div>
          </div>

          {/* Enhanced Typewriter Text Animation */}
          <div
            className={`space-y-4 md:space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-3 md:space-y-4">
              {/* Main Title with Typewriter Animation */}
              <div className="min-h-[3rem] md:min-h-[4rem] lg:min-h-[6rem] flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-slow">
                    {typewriterText1}
                  </span>
                  {showCursor1 && <span className="animate-cursor-blink text-blue-600">|</span>}
                </h1>
              </div>
              
              {/* Subtitle with Typewriter Animation */}
              <div className="min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[3rem] flex items-center justify-center">
                <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
                  {typewriterText2}
                  {showCursor2 && <span className="animate-cursor-blink text-purple-600">|</span>}
                </h2>
              </div>
              
              {/* Description with fade-in */}
              <div className="animate-fade-in-up delay-1000">
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                  Passionate about building intelligent systems and data-driven solutions. 
                  Currently pursuing B.Tech in CSE (AI & ML) at VIT-AP with hands-on experience in 
                  cloud-native applications and deep learning.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-1200 px-4">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg animate-gradient-slow"
              >
                <span className="relative z-10">View My Work</span>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm bg-white/80 hover:shadow-xl"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=share_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-6 md:space-x-8 pt-6 animate-fade-in-up delay-1400 px-4">
              <a
                href="https://github.com/VEMURI-PRAVEENA"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-900 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/vemuri-praveena-22m26f11c"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:vempuripraveena2226@gmail.com"
                className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:-translate-y-1"
                aria-label="Email Contact"
              >
                <Mail size={20} className="md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="tel:+918639414811"
                className="group p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-500 hover:-translate-y-1"
                aria-label="Phone Contact"
              >
                <Phone size={20} className="md:w-6 md:h-6 text-gray-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="flex justify-center mt-12 md:mt-16 animate-fade-in-up delay-1600">
          <button
            onClick={scrollToProjects}
            className="group p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-gentle hover:animate-pulse hover:-translate-y-1"
            aria-label="Scroll to Projects"
          >
            <ArrowDown size={24} className="md:w-7 md:h-7 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
