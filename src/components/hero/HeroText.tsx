
import { useState, useEffect } from "react";

const HeroText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText1, setTypewriterText1] = useState("");
  const [typewriterText2, setTypewriterText2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  const text1 = "Hi, I'm Praveena";
  const text2 = "AI & Machine Learning Engineer";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const runTypewriterAnimation = () => {
      // Reset states
      setTypewriterText1("");
      setTypewriterText2("");
      setShowCursor1(true);
      setShowCursor2(false);

      // Type first text letter by letter
      let i = 0;
      const typeText1 = () => {
        if (i < text1.length) {
          setTypewriterText1(text1.slice(0, i + 1));
          i++;
          setTimeout(typeText1, 80); // Smooth letter-by-letter timing
        } else {
          // Brief pause, then hide first cursor and start second text
          setTimeout(() => {
            setShowCursor1(false);
            setShowCursor2(true);
            
            // Type second text letter by letter
            let j = 0;
            const typeText2 = () => {
              if (j < text2.length) {
                setTypewriterText2(text2.slice(0, j + 1));
                j++;
                setTimeout(typeText2, 60); // Slightly faster for the longer text
              } else {
                // Show complete text for 5 seconds, then restart
                setTimeout(() => {
                  setAnimationCycle(prev => prev + 1);
                  runTypewriterAnimation();
                }, 5000);
              }
            };
            typeText2();
          }, 500);
        }
      };
      typeText1();
    };

    // Start the animation after initial delay
    const initialTimer = setTimeout(runTypewriterAnimation, 800);
    return () => clearTimeout(initialTimer);
  }, [isVisible, animationCycle]);

  return (
    <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 md:order-2 text-center md:text-left">
      <div
        className={`space-y-4 md:space-y-6 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="space-y-3 md:space-y-4">
          {/* Main Title with Typewriter Animation */}
          <div className="min-h-[3rem] md:min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center md:justify-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-slow">
                {typewriterText1}
              </span>
              {showCursor1 && <span className="animate-cursor-blink text-blue-600">|</span>}
            </h1>
          </div>
          
          {/* Subtitle with Typewriter Animation */}
          <div className="min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[3rem] flex items-center justify-center md:justify-start">
            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
              {typewriterText2}
              {showCursor2 && <span className="animate-cursor-blink text-purple-600">|</span>}
            </h2>
          </div>
          
          {/* Description with fade-in */}
          <div className="animate-fade-in-up delay-1000">
            <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
              Passionate about building intelligent systems and data-driven solutions. 
              Currently pursuing B.Tech in CSE (AI & ML) at VIT-AP with hands-on experience in 
              cloud-native applications and deep learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
