
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 md:space-x-8 pt-6 animate-fade-in-up delay-1400">
      <a
        href="https://github.com/VEMURI-PRAVEENA"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-4 rounded-full bg-[#21262d] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#30363d] hover:-translate-y-1 hover:shadow-gray-400/25 border border-gray-600/50 hover:border-gray-400/50"
        aria-label="GitHub Profile"
      >
        <Github size={22} className="md:w-6 md:h-6 text-gray-200 group-hover:text-white transition-colors" />
        <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
      <a
        href="https://linkedin.com/in/vemuri-praveena-22m26f11c"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-4 rounded-full bg-[#21262d] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#0077b5] hover:-translate-y-1 hover:shadow-blue-500/25 border border-gray-600/50 hover:border-blue-400/50"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={22} className="md:w-6 md:h-6 text-gray-200 group-hover:text-white transition-colors" />
        <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
      <a
        href="mailto:vempuripraveena2226@gmail.com"
        className="group p-4 rounded-full bg-[#21262d] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#ea4335] hover:-translate-y-1 hover:shadow-red-500/25 border border-gray-600/50 hover:border-red-400/50"
        aria-label="Email Contact"
      >
        <Mail size={22} className="md:w-6 md:h-6 text-gray-200 group-hover:text-white transition-colors" />
        <div className="absolute inset-0 rounded-full bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
      <a
        href="tel:+918639414811"
        className="group p-4 rounded-full bg-[#21262d] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#25d366] hover:-translate-y-1 hover:shadow-emerald-500/25 border border-gray-600/50 hover:border-emerald-400/50"
        aria-label="Phone Contact"
      >
        <Phone size={22} className="md:w-6 md:h-6 text-gray-200 group-hover:text-white transition-colors" />
        <div className="absolute inset-0 rounded-full bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
};

export default SocialLinks;
