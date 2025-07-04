
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'Times New Roman, serif' }}>
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Times New Roman, serif' }}>
            Passionate AI & ML enthusiast with a focus on building intelligent systems
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-purple-500 via-teal-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/25">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-2 border-gray-800">
                <img
                  src="/lovable-uploads/8053af38-8789-4260-a47c-0d37687a1fee.png"
                  alt="Praveena Vemuri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-blue-500/20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Career Objective */}
        <Card className="mb-12 bg-gradient-to-r from-purple-600/20 to-teal-600/20 border-purple-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10"></div>
          <CardContent className="p-8 relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-white" style={{ fontFamily: 'Times New Roman, serif' }}>Career Objective</h3>
            <p className="text-gray-300 leading-relaxed text-lg" style={{ fontFamily: 'Times New Roman, serif' }}>
              Passionate about building intelligent systems and data-driven solutions. 
              Currently pursuing B.Tech in CSE (AI & ML) at VIT-AP with hands-on experience in 
              cloud-native applications and deep learning technologies. Seeking opportunities to 
              apply my knowledge in artificial intelligence, machine learning, and software development 
              to create innovative solutions that make a positive impact on society.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
