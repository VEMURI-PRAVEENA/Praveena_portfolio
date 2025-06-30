
import ProfileImage from "@/components/hero/ProfileImage";
import HeroText from "@/components/hero/HeroText";
import QuickLinks from "@/components/hero/QuickLinks";
import SocialLinks from "@/components/hero/SocialLinks";
import ScrollIndicator from "@/components/hero/ScrollIndicator";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 font-serif relative overflow-hidden bg-[#0d1117]">
      {/* Enhanced Background with Dark Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#1a1a1a] to-[#0d1117]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-gentle-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-600/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-gentle-pulse animation-delay-2s"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full mix-blend-screen filter blur-2xl opacity-20 animate-gentle-pulse animation-delay-4s"></div>

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Centered Layout - Profile, Text, and Buttons */}
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Profile Picture */}
          <ProfileImage />

          {/* Hero Text Animation */}
          <HeroText />

          {/* Quick Links - View Resume & View My Projects */}
          <QuickLinks />

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Enhanced Scroll Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
