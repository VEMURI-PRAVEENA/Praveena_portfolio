
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate AI & ML Engineer building intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo and Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-blue-500/20 rounded-2xl"></div>
                <img
                  src="/lovable-uploads/8053af38-8789-4260-a47c-0d37687a1fee.png"
                  alt="Praveena Vemuri"
                  className="w-full h-full object-cover rounded-2xl border-2 border-gray-800"
                />
                <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-br from-purple-500/50 to-teal-500/50"></div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-teal-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center text-gray-300">
                <MapPin className="mr-2 text-teal-400" size={20} />
                Ongole, Andhra Pradesh, India
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8">
            {/* Career Objective */}
            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:border-purple-500/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="text-purple-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-white">Career Objective</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Goal-driven AI and Data Science enthusiast with hands-on experience in building 
                  intelligent systems, cloud-native applications, and data-driven solutions. 
                  Passionate about developing impactful ML models, deploying at scale, and 
                  contributing to the AI ecosystem.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:border-teal-500/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-teal-400 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-lg font-semibold text-white">B.Tech in CSE (AI & ML)</h4>
                    <p className="text-purple-400 font-medium">VIT AP University, Amaravati</p>
                    <p className="text-gray-300">2022 – 2026 • CGPA: 8.88/10</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h4 className="text-lg font-semibold text-white">Class XII (MPC)</h4>
                    <p className="text-teal-400 font-medium">Narayana Junior College, Guntur</p>
                    <p className="text-gray-300">2018 – 2020 • CGPA: 9.88/10</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-semibold text-white">Class X</h4>
                    <p className="text-blue-400 font-medium">Ravindra Bharathi School, Singarayakonda</p>
                    <p className="text-gray-300">2017 – 2018 • CGPA: 10.0/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">8.88</div>
                <p className="text-gray-300">Current CGPA</p>
              </Card>
              <Card className="text-center p-6 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 hover:border-teal-500/30">
                <div className="text-3xl font-bold text-teal-400 mb-2">4+</div>
                <p className="text-gray-300">Major Projects</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
