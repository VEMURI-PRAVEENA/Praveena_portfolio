
import { useState, useEffect } from "react";

const ProfileImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
        }`}
      >
        <div className="relative group">
          <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gray-800 p-1 shadow-2xl transition-all duration-500 hover:shadow-blue-500/30">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-violet-500 to-emerald-400 p-1 animate-gradient-slow">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative group-hover:scale-105 transition-transform duration-700">
                <img
                  src="/lovable-uploads/8053af38-8789-4260-a47c-0d37687a1fee.png"
                  alt="Praveena profile photo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-800/10 group-hover:to-gray-800/20 transition-all duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Floating AI/ML themed elements */}
          <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-300/50 transition-shadow duration-300">
            <span className="text-sm md:text-lg">🤖</span>
          </div>
          <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-violet-300/50 transition-shadow duration-300">
            <span className="text-xs md:text-base">⚡</span>
          </div>
          <div className="absolute top-4 -left-4 md:top-6 md:-left-6 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-300/50 transition-shadow duration-300">
            <span className="text-xs md:text-sm">🧠</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
