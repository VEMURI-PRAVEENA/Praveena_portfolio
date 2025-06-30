
import { useState, useEffect } from "react";

const HeroText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText1, setTypewriterText1] = useState("");
  const [typewriterText2, setTypewriterText2] = useState("");
  const [currentAnimation, setCurrentAnimation] = useState("waiting"); // waiting, typing1, pause1, typing2, pause2

  const text1 = "Hi, I'm Praveena";
  const text2 = "AI & Machine Learning Engineer";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const runAnimation = () => {
      setCurrentAnimation("typing1");
      setTypewriterText1("");
      setTypewriterText2("");
      
      // Type first text
      let i = 0;
      const typeText1 = () => {
        if (i < text1.length) {
          setTypewriterText1(text1.slice(0, i + 1));
          i++;
          setTimeout(typeText1, 80);
        } else {
          setCurrentAnimation("pause1");
          setTimeout(() => {
            setCurrentAnimation("typing2");
            let j = 0;
            const typeText2 = () => {
              if (j < text2.length) {
                setTypewriterText2(text2.slice(0, j + 1));
                j++;
                setTimeout(typeText2, 60);
              } else {
                setCurrentAnimation("pause2");
                setTimeout(() => {
                  runAnimation(); // Restart the animation
                }, 4000);
              }
            };
            typeText2();
          }, 1000);
        }
      };
      typeText1();
    };

    const initialTimer = setTimeout(runAnimation, 800);
    return () => clearTimeout(initialTimer);
  }, [isVisible]);

  return (
    <div
      className={`space-y-4 md:space-y-6 transition-all duration-1000 delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="space-y-3 md:space-y-4">
        {/* Main Title with Typewriter Animation */}
        <div className="min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              {typewriterText1}
            </span>
          </h1>
        </div>
        
        {/* Subtitle with Typewriter Animation */}
        <div className="min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[3rem] flex items-center justify-center">
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium">
            {typewriterText2}
          </h2>
        </div>
        
        {/* Description with fade-in */}
        <div className="animate-fade-in-up delay-1000">
          <p className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed mx-auto">
            Passionate about building intelligent systems and data-driven solutions. 
            Currently pursuing B.Tech in CSE (AI & ML) at VIT-AP with hands-on experience in 
            cloud-native applications and deep learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
