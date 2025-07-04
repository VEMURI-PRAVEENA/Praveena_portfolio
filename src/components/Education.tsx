
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent" style={{ fontFamily: 'Times New Roman, serif' }}>
            Education
          </h2>
        </div>

        {/* Education */}
        <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5"></div>
          <CardContent className="p-8 relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3" style={{ fontFamily: 'Times New Roman, serif' }}>
              <GraduationCap className="text-teal-400" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-teal-500 pl-6 pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>B.Tech in Computer Science & Engineering</h4>
                  <Badge className="bg-teal-600/20 text-teal-300 border-teal-500/30 w-fit" style={{ fontFamily: 'Times New Roman, serif' }}>
                    2022 - 2026
                  </Badge>
                </div>
                <p className="text-lg text-purple-300 mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Specialization: Artificial Intelligence & Machine Learning</p>
                <p className="text-gray-400 mb-3 flex items-center gap-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                  <MapPin size={16} />
                  VIT-AP University, Amaravati, Andhra Pradesh
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Artificial Intelligence", "Machine Learning", "Deep Learning", "Data Structures", "Cloud Computing", "Software Engineering"].map((subject, index) => (
                    <Badge
                      key={index}
                      className="bg-purple-600/20 text-purple-300 border-purple-500/30 text-sm"
                      style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>Intermediate (12th Grade)</h4>
                  <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 w-fit" style={{ fontFamily: 'Times New Roman, serif' }}>
                    2020 - 2022
                  </Badge>
                </div>
                <p className="text-lg text-teal-300 mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>Mathematics, Physics, Chemistry</p>
                <p className="text-gray-400 flex items-center gap-2" style={{ fontFamily: 'Times New Roman, serif' }}>
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

export default Education;
