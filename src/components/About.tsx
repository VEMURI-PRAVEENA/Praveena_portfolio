
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate AI & ML Engineer building intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo and Quick Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src="/lovable-uploads/8053af38-8789-4260-a47c-0d37687a1fee.png"
                  alt="Praveena Vemuri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <Card className="px-6 py-3 bg-[#1e1e2f] shadow-lg border-gray-600">
                  <p className="text-gray-300 flex items-center">
                    <MapPin className="mr-2" size={16} />
                    Ongole, Andhra Pradesh, India
                  </p>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <a 
                  href="https://drive.google.com/file/d/1bRQhvIoZg4J4ry-J440x2y9J4SYnvSen/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8">
            {/* Career Objective */}
            <Card className="hover:shadow-xl transition-all duration-300 bg-[#1e1e2f] border-gray-600 hover:shadow-blue-500/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-white">Career Objective</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Results-driven AI Engineer with hands-on experience in NLP, computer vision and generative AI. 
                  Skilled in building and deploying end-to-end ML systems including LLM-powered applications, 
                  deep learning models and scalable RAG solutions. Strong foundation in model training, 
                  evaluation, optimisation and MLOps, with a focus on practical AI applications.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="hover:shadow-xl transition-all duration-300 bg-[#1e1e2f] border-gray-600 hover:shadow-purple-500/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-purple-400 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-semibold text-white">B.Tech in CSE (AI & ML)</h4>
                    <p className="text-blue-400 font-medium">VIT AP University, Amaravati</p>
                    <p className="text-gray-300">2022 – 2026 • CGPA: 8.91/10</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-lg font-semibold text-white">Class XII (MPC)</h4>
                    <p className="text-purple-400 font-medium">Narayana Junior College, Guntur</p>
                    <p className="text-gray-300">2018 – 2020 • CGPA: 9.88/10</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-semibold text-white">Class X</h4>
                    <p className="text-green-400 font-medium">Ravindra Bharathi School, Singarayakonda</p>
                    <p className="text-gray-300">2017 – 2018 • CGPA: 10.0/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-[#1e1e2f] border-gray-600 hover:shadow-blue-500/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">8.91</div>
                <p className="text-gray-300">Current CGPA</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 bg-[#1e1e2f] border-gray-600 hover:shadow-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">7+</div>
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
