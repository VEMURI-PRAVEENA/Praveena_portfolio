
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-8 md:mt-12 animate-fade-in-up delay-1600">
      <button
        onClick={scrollToProjects}
        className="group p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-gentle hover:animate-pulse hover:-translate-y-1"
        aria-label="Scroll to Projects"
      >
        <ArrowDown size={24} className="md:w-7 md:h-7 text-gray-400 group-hover:text-blue-600 transition-colors" />
      </button>
    </div>
  );
};

export default ScrollIndicator;
