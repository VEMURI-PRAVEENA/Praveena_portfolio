
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const socialItems = [
    {
      href: "https://github.com/VEMURI-PRAVEENA",
      icon: Github,
      label: "GitHub Profile",
      hoverColor: "hover:bg-[#30363d] hover:shadow-gray-400/25 hover:border-gray-400/50"
    },
    {
      href: "https://linkedin.com/in/vemuri-praveena-22m26f11c",
      icon: Linkedin,
      label: "LinkedIn Profile", 
      hoverColor: "hover:bg-[#0077b5] hover:shadow-blue-500/25 hover:border-blue-400/50"
    },
    {
      href: "mailto:vempuripraveena2226@gmail.com",
      icon: Mail,
      label: "Email Contact",
      hoverColor: "hover:bg-[#ea4335] hover:shadow-red-500/25 hover:border-red-400/50"
    },
    {
      href: "tel:+918639414811",
      icon: Phone,
      label: "Phone Contact",
      hoverColor: "hover:bg-[#25d366] hover:shadow-emerald-500/25 hover:border-emerald-400/50"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="flex justify-center space-x-6 md:space-x-8 pt-6"
    >
      {socialItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group p-4 rounded-full bg-gray-800 backdrop-blur-sm shadow-lg transition-all duration-300 border-2 border-white/30 ${item.hoverColor}`}
          aria-label={item.label}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -8, 8, 0],
            y: -8,
            boxShadow: "0 15px 35px rgba(255, 255, 255, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.6 + (index * 0.15),
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5
            }}
          >
            <item.icon size={22} className="md:w-6 md:h-6 text-white group-hover:text-white transition-colors drop-shadow-lg" />
          </motion.div>
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
          />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
