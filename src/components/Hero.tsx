
import ProfileImage from "@/components/hero/ProfileImage";
import HeroText from "@/components/hero/HeroText";
import HeroCTAButtons from "@/components/hero/HeroCTAButtons";
import SocialLinks from "@/components/hero/SocialLinks";
import ScrollIndicator from "@/components/hero/ScrollIndicator";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 font-serif relative overflow-hidden">
      {/* Enhanced Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-gentle-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-gentle-pulse animation-delay-2s"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-gentle-pulse animation-delay-4s"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* 2-Column Grid Layout for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[70vh]">
          
          {/* Left Column - Profile Picture */}
          <ProfileImage />

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 order-2 md:order-2 text-center md:text-left">
            
            {/* Hero Text Animation */}
            <HeroText />

            {/* Enhanced CTA Buttons */}
            <HeroCTAButtons />

            {/* Enhanced Social Links */}
            <SocialLinks />
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
