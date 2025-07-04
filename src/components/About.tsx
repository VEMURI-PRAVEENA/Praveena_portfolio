
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent font-sans">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
            Passionate AI & ML enthusiast with a focus on building intelligent systems
          </p>
        </div>

        {/* Career Objective */}
        <Card className="mb-12 bg-gradient-to-r from-purple-600/20 to-teal-600/20 border-purple-500/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10"></div>
          <CardContent className="p-8 relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-white font-sans">Career Objective</h3>
            <p className="text-gray-300 leading-relaxed text-lg font-sans">
              Passionate about building intelligent systems and data-driven solutions. 
              Currently pursuing B.Tech in CSE (AI & ML) at VIT-AP with hands-on experience in 
              cloud-native applications and deep learning technologies. Seeking opportunities to 
              apply my knowledge in artificial intelligence, machine learning, and software development 
              to create innovative solutions that make a positive impact on society.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5"></div>
          <CardContent className="p-8 relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-white font-sans flex items-center gap-3">
              <GraduationCap className="text-teal-400" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-teal-500 pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-white font-sans">B.Tech in Computer Science & Engineering</h4>
                  <Badge className="bg-teal-600/20 text-teal-300 border-teal-500/30 w-fit font-sans">
                    2022 - 2026
                  </Badge>
                </div>
                <p className="text-lg text-purple-300 mb-2 font-sans">Specialization: Artificial Intelligence & Machine Learning</p>
                <p className="text-gray-400 mb-3 font-sans flex items-center gap-2">
                  <MapPin size={16} />
                  VIT-AP University, Amaravati, Andhra Pradesh
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Artificial Intelligence", "Machine Learning", "Deep Learning", "Data Structures", "Cloud Computing", "Software Engineering"].map((subject, index) => (
                    <Badge
                      key={index}
                      className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-sm font-sans"
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-white font-sans">Intermediate (12th Grade)</h4>
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 w-fit font-sans">
                    2020 - 2022
                  </Badge>
                </div>
                <p className="text-lg text-teal-300 mb-2 font-sans">Mathematics, Physics, Chemistry</p>
                <p className="text-gray-400 font-sans flex items-center gap-2">
                  <MapPin size={16} />
                  Narayana Junior College, Andhra Pradesh
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
