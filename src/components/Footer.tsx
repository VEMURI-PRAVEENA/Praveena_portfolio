
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-[#0d1117] border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="text-center md:text-left"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p 
              className="text-gray-300 text-sm"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Made by{" "}
              <motion.span 
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Praveena Vemuri
              </motion.span>
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="text-center md:text-right"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              © 2025{" "}
              <motion.span 
                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Praveena Vemuri
              </motion.span>
              . All rights reserved.
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Animated Divider */}
        <motion.div
          className="mt-6 pt-4 border-t border-gray-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.p 
              className="text-xs text-gray-500"
              whileHover={{ 
                color: "#60a5fa",
                scale: 1.05
              }}
              transition={{ duration: 0.3 }}
            >
              Crafted with passion for AI & Machine Learning
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
