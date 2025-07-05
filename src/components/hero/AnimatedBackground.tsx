
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <>
      {/* Enhanced Background with Animated Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#1a1a1a] to-[#0d1117]"></div>
      
      {/* Floating Particles */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-violet-600/20 rounded-full mix-blend-screen filter blur-xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full mix-blend-screen filter blur-2xl"
      />

      {/* Animated Grid Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `
        }}
      />

      {/* Floating Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className={`absolute w-2 h-2 bg-blue-400/30 rounded-full`}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 10}%`
          }}
        />
      ))}
    </>
  );
};

export default AnimatedBackground;
