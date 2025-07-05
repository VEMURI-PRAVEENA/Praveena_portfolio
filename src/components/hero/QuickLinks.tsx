
import { Button } from "@/components/ui/button";
import { FileText, FolderOpen, ExternalLink, QrCode } from "lucide-react";
import ResumeQR from "@/components/ResumeQR";

const QuickLinks = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 animate-fade-in-up delay-1200">
      {/* Main Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 hover:from-blue-700 hover:via-violet-700 hover:to-emerald-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 min-w-[160px]"
            asChild
          >
            <a 
              href="https://drive.google.com/uc?export=download&id=1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </Button>
          
          <Button
            variant="outline"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-blue-300 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm bg-gray-800/80 hover:shadow-xl hover:shadow-blue-400/25 hover:border-blue-300 flex items-center gap-2 min-w-[160px]"
            asChild
          >
            <a 
              href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=share_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink size={18} />
              <span>View Resume</span>
            </a>
          </Button>
        </div>
        
        <Button
          onClick={scrollToProjects}
          variant="outline"
          className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400/20 hover:text-purple-300 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm bg-gray-800/80 hover:shadow-xl hover:shadow-purple-400/25 hover:border-purple-300 flex items-center gap-2 min-w-[160px]"
        >
          <FolderOpen size={18} />
          <span>View Projects</span>
        </Button>
      </div>

      {/* QR Code Section */}
      <div className="flex items-center justify-center pt-4">
        <ResumeQR />
      </div>
    </div>
  );
};

export default QuickLinks;
