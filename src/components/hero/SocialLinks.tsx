
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
          className={`group p-4 rounded-full bg-[#21262d] backdrop-blur-sm shadow-lg transition-all duration-300 border border-gray-600/50 ${item.hoverColor}`}
          aria-label={item.label}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            y: -5
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.6 + (index * 0.1),
            hover: { duration: 0.3 }
          }}
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.5
            }}
          >
            <item.icon size={22} className="md:w-6 md:h-6 text-gray-200 group-hover:text-white transition-colors" />
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
