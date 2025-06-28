
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, GraduationCap, Target } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Current CGPA", value: "8.88/10", icon: "🎓" },
    { label: "Projects Completed", value: "10+", icon: "💼" },
    { label: "Certifications", value: "2+", icon: "🏆" },
    { label: "Years of Learning", value: "2+", icon: "📚" }
  ];

  const timeline = [
    {
      year: "2022 - 2026",
      title: "B.Tech in CSE (AI & ML)",
      institution: "VIT AP University, Amaravati",
      grade: "CGPA: 8.88/10",
      description: "Specializing in Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and natural language processing."
    },
    {
      year: "2018 - 2020",
      title: "Class XII (MPC)",
      institution: "Narayana Junior College, Guntur",
      grade: "CGPA: 9.88/10",
      description: "Completed higher secondary education with Mathematics, Physics, and Chemistry, building strong analytical foundations."
    },
    {
      year: "2017 - 2018",
      title: "Class X",
      institution: "Ravindra Bharathi School, Singarayakonda",
      grade: "CGPA: 10.0/10",
      description: "Achieved perfect academic scores while developing leadership skills and participating in various extracurricular activities."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate AI enthusiast dedicated to creating intelligent solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Profile Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Career Objective</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Goal-driven AI and Data Science enthusiast with hands-on experience in building intelligent systems, 
                  cloud-native applications, and data-driven solutions. Passionate about developing impactful ML models, 
                  deploying at scale, and contributing to the AI ecosystem.
                </p>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="mr-2" size={20} />
                  <span>Ongole, Andhra Pradesh, India</span>
                </div>
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            {/* Education Timeline */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="text-purple-600 mr-3" size={28} />
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-gray-200 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                      <div className="pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                          <span className="text-sm text-blue-600 font-medium">{item.year}</span>
                        </div>
                        <p className="text-gray-600 font-medium mb-1">{item.institution}</p>
                        <p className="text-green-600 font-semibold mb-2">{item.grade}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats & Quick Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold">{stat.value}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interests</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">🚀</span>
                    <span className="text-gray-600">Open-source contributions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-600 mr-3">💻</span>
                    <span className="text-gray-600">Competitive Programming</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">🧠</span>
                    <span className="text-gray-600">AI Research</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-orange-600 mr-3">☁️</span>
                    <span className="text-gray-600">Cloud Technologies</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
