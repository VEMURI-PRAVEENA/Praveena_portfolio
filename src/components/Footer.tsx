
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-gray-700 text-white py-8 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg mb-2 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="text-red-400 animate-pulse" size={20} fill="currentColor" />
            <span>by</span>
            <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Praveena
            </span>
            <span>&</span>
            <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lovable AI
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 Praveena Vemuri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
