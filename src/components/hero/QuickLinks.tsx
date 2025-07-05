
import { Button } from "@/components/ui/button";
import { FileText, FolderOpen, ExternalLink, QrCode } from "lucide-react";
import ResumeQR from "@/components/ResumeQR";
import { motion } from "framer-motion";

const QuickLinks = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="flex flex-col items-center space-y-6"
    >
      {/* Main Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-3">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 hover:from-blue-700 hover:via-violet-700 hover:to-emerald-700 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 min-w-[160px]"
              asChild
            >
              <a 
                href="https://drive.google.com/uc?export=download&id=1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FileText size={18} />
                </motion.div>
                <span>Download Resume</span>
              </a>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/20 hover:text-blue-300 px-6 py-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm bg-gray-800/80 hover:border-blue-300 flex items-center gap-2 min-w-[160px]"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=share_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink size={18} />
                </motion.div>
                <span>View Resume</span>
              </a>
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(147, 51, 234, 0.2)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={scrollToProjects}
            variant="outline"
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400/20 hover:text-purple-300 px-6 py-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm bg-gray-800/80 hover:border-purple-300 flex items-center gap-2 min-w-[160px]"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FolderOpen size={18} />
            </motion.div>
            <span>View Projects</span>
          </Button>
        </motion.div>
      </div>

      {/* QR Code Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="flex items-center justify-center pt-4"
      >
        <ResumeQR />
      </motion.div>
    </motion.div>
  );
};

export default QuickLinks;
