
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Phone } from "lucide-react";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "blog", label: "Blog" },
    { id: "certifications", label: "Certifications" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const quickLinks = [
    {
      icon: Github,
      href: "https://github.com/VEMURI-PRAVEENA",
      label: "GitHub",
      color: "text-white hover:text-white",
      bgHover: "hover:bg-gray-600/80"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vemuri-praveena-22m26f11c",
      label: "LinkedIn",
      color: "text-white hover:text-[#0A66C2]",
      bgHover: "hover:bg-[#0A66C2]/30"
    },
    {
      icon: Mail,
      href: "mailto:vempuripraveena2226@gmail.com",
      label: "Email",
      color: "text-white hover:text-white",
      bgHover: "hover:bg-red-500/30"
    },
    {
      icon: Phone,
      href: "tel:+918639414811",
      label: "Phone",
      color: "text-white hover:text-white",
      bgHover: "hover:bg-green-500/30"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-serif ${
          isScrolled
            ? "bg-[#0d1117]/95 backdrop-blur-md shadow-lg border-b border-gray-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Times New Roman, Times, serif', letterSpacing: '0.05em' }}>
              PRAVEENA VEMURI
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-400/10 font-bold shadow-sm"
                      : "text-gray-300 hover:text-blue-400 hover:bg-blue-400/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors p-2 rounded-md hover:bg-blue-400/10"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#0d1117]/95 backdrop-blur-md shadow-lg rounded-lg mt-2 py-4 border border-gray-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-400/10 font-bold border-l-4 border-blue-400"
                      : "text-gray-300 hover:text-blue-400 hover:bg-blue-400/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Floating Contact Icons - Brighter & More Visible */}
      <TooltipProvider>
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3">
          {quickLinks.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`group p-4 rounded-full bg-gray-700/90 backdrop-blur-sm shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-125 ${link.color} ${link.bgHover} border-2 border-gray-500/50 hover:border-white/30 hover:shadow-white/20`}
                  style={{
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <link.icon size={24} className="transition-all duration-300 drop-shadow-lg" />
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-gray-800 text-white border-gray-600 font-medium">
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </>
  );
};

export default Navigation;
