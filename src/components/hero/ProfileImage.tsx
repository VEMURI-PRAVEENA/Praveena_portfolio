
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfileImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "AI & ML Engineer",
    "Data Science Enthusiast", 
    "Cloud Explorer"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(roleTimer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative group"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ duration: 0.3 }}
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gray-800 p-1 shadow-2xl transition-all duration-500 hover:shadow-blue-500/30 hover:shadow-2xl drop-shadow-2xl"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-violet-500 to-emerald-400 p-1 animate-gradient-slow shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative group-hover:scale-105 transition-transform duration-700 shadow-inner">
                <img
                  src="/lovable-uploads/8813f753-f649-4df4-8926-a6e212c60f3a.png"
                  alt="Vemuri Praveena profile photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-800/10 group-hover:to-gray-800/20 transition-all duration-500"></div>
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[inset_0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500"></div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-violet-500/20 to-emerald-400/20 -z-10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          </motion.div>
          
          {/* Floating AI/ML themed elements with enhanced animations */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-300/50 transition-shadow duration-300 drop-shadow-lg"
          >
            <span className="text-sm md:text-lg">🤖</span>
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-violet-300/50 transition-shadow duration-300 drop-shadow-lg"
          >
            <span className="text-xs md:text-base">⚡</span>
          </motion.div>
          <motion.div
            animate={{ 
              rotate: [0, -15, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-4 -left-4 md:top-6 md:-left-6 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-300/50 transition-shadow duration-300 drop-shadow-lg"
          >
            <span className="text-xs md:text-sm">🧠</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Role Animation Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-6 text-center"
      >
        <div className="h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-lg md:text-xl text-gray-300 font-medium"
            >
              {roles[currentRole]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileImage;
