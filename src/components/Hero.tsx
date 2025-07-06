
import { motion } from "framer-motion";
import ProfileImage from "@/components/hero/ProfileImage";
import HeroText from "@/components/hero/HeroText";
import QuickLinks from "@/components/hero/QuickLinks";
import SocialLinks from "@/components/hero/SocialLinks";
import AnimatedBackground from "@/components/hero/AnimatedBackground";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 font-serif relative overflow-hidden bg-[#0d1117]">
      {/* Animated Background Component */}
      <AnimatedBackground />

      {/* Page Load Overlay Animation */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        className="fixed inset-0 bg-gradient-to-b from-[#0d1117] to-[#1a1a1a] z-50 origin-top"
      />

      {/* Main Content Container */}
      <motion.div 
        className="max-w-4xl mx-auto relative z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        {/* Centered Layout - Profile, Text, and Buttons */}
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Profile Picture with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
          >
            <ProfileImage />
          </motion.div>

          {/* Hero Text Animation with Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <HeroText />
          </motion.div>

          {/* Quick Links with Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <QuickLinks />
          </motion.div>

          {/* Social Links with Final Stagger */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
