
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, GraduationCap, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate AI & ML Engineer building intelligent systems that solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo and Quick Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                P
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <Card className="px-6 py-3 bg-white shadow-lg">
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="mr-2" size={16} />
                    Ongole, Andhra Pradesh, India
                  </p>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold"
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
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900">Career Objective</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Goal-driven AI and Data Science enthusiast with hands-on experience in building 
                  intelligent systems, cloud-native applications, and data-driven solutions. 
                  Passionate about developing impactful ML models, deploying at scale, and 
                  contributing to the AI ecosystem.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">B.Tech in CSE (AI & ML)</h4>
                    <p className="text-blue-600 font-medium">VIT AP University, Amaravati</p>
                    <p className="text-gray-600">2022 – 2026 • CGPA: 8.88/10</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Class XII (MPC)</h4>
                    <p className="text-purple-600 font-medium">Narayana Junior College, Guntur</p>
                    <p className="text-gray-600">2018 – 2020 • CGPA: 9.88/10</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Class X</h4>
                    <p className="text-green-600 font-medium">Ravindra Bharathi School, Singarayakonda</p>
                    <p className="text-gray-600">2017 – 2018 • CGPA: 10.0/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">8.88</div>
                <p className="text-gray-600">Current CGPA</p>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                <p className="text-gray-600">Major Projects</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
