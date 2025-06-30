
import { Button } from "@/components/ui/button";

const HeroCTAButtons = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-1200">
      <Button
        onClick={scrollToProjects}
        className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 hover:from-blue-700 hover:via-violet-700 hover:to-emerald-700 text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg animate-gradient-slow hover:shadow-blue-500/25"
      >
        <span className="relative z-10">View My Work</span>
      </Button>
      <Button
        variant="outline"
        className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-blue-300 px-6 md:px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm bg-gray-800/80 hover:shadow-xl hover:shadow-blue-400/25 hover:border-blue-300"
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
  );
};

export default HeroCTAButtons;
