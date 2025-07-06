
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const QuickLinks = () => {
  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // You can replace this with your actual resume URL
    window.open("https://drive.google.com/file/d/your-resume-link", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <motion.div
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <Button
          onClick={handleViewWork}
          className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold"
        >
          <Eye size={18} className="mr-2" />
          View My Work
          <motion.span
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="ml-2"
          >
            →
          </motion.span>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <Button
          onClick={handleDownloadResume}
          variant="outline"
          className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold bg-transparent"
        >
          <Download size={18} className="mr-2" />
          Download Resume
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="ml-2"
          >
            ↓
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default QuickLinks;
