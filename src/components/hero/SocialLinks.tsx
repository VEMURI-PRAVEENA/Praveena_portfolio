
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 md:space-x-8 pt-6 animate-fade-in-up delay-1400">
      <a
        href="https://github.com/VEMURI-PRAVEENA"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:-translate-y-1 hover:shadow-gray-600/25"
        aria-label="GitHub Profile"
      >
        <Github size={20} className="md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
      </a>
      <a
        href="https://linkedin.com/in/vemuri-praveena-22m26f11c"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-blue-500/25"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={20} className="md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
      </a>
      <a
        href="mailto:vempuripraveena2226@gmail.com"
        className="group p-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:-translate-y-1 hover:shadow-red-500/25"
        aria-label="Email Contact"
      >
        <Mail size={20} className="md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
      </a>
      <a
        href="tel:+918639414811"
        className="group p-3 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-emerald-500 hover:-translate-y-1 hover:shadow-emerald-500/25"
        aria-label="Phone Contact"
      >
        <Phone size={20} className="md:w-6 md:h-6 text-gray-300 group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};

export default SocialLinks;
