
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: "🐍", level: 90 },
        { name: "Java", icon: "☕", level: 85 },
        { name: "HTML", icon: "🌐", level: 88 },
        { name: "CSS", icon: "🎨", level: 82 },
        { name: "SQL", icon: "🗄️", level: 85 }
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", icon: "🧠", level: 88 },
        { name: "PyTorch", icon: "🔥", level: 85 },
        { name: "Scikit-learn", icon: "📊", level: 90 },
        { name: "OpenCV", icon: "👁️", level: 85 },
        { name: "Keras", icon: "🔬", level: 88 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: "☁️", level: 82 },
        { name: "Docker", icon: "🐳", level: 80 },
        { name: "Git", icon: "📝", level: 85 },
        { name: "Apache Spark", icon: "⚡", level: 78 },
        { name: "FastAPI", icon: "🚀", level: 82 }
      ],
      color: "from-teal-500 to-cyan-500"
    },
    {
      category: "Data Science",
      skills: [
        { name: "Pandas", icon: "🐼", level: 90 },
        { name: "NumPy", icon: "🔢", level: 88 },
        { name: "Matplotlib", icon: "📈", level: 85 },
        { name: "Seaborn", icon: "🎯", level: 82 },
        { name: "Tableau", icon: "📊", level: 80 }
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, cloud technologies, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 transform hover:scale-105 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 hover:border-purple-500/30 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors duration-300">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="text-white font-medium group-hover/skill:text-purple-300 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-600/20 to-teal-600/20 border-purple-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10"></div>
            <CardContent className="p-8 text-center relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Leadership", "Problem-solving", "Communication", "Adaptability", "Team Collaboration", "Critical Thinking"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 text-white border border-white/20 rounded-full hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
