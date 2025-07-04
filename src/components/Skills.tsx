
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "HTML", "CSS", "SQL"],
      color: "bg-blue-600/20 text-blue-300 border-blue-500/30",
      icon: "💻"
    },
    {
      category: "AI & Machine Learning",
      skills: ["Transformers", "Prompt Engineering", "RAG", "Model Optimization", "Deep Learning"],
      color: "bg-purple-600/20 text-purple-300 border-purple-500/30",
      icon: "🤖"
    },
    {
      category: "Data Analytics",
      skills: ["Data Cleaning", "Preprocessing", "Statistical Modeling", "ML Algorithms"],
      color: "bg-green-600/20 text-green-300 border-green-500/30",
      icon: "📊"
    },
    {
      category: "Visualization & Tools",
      skills: ["Matplotlib", "Seaborn", "Tableau", "Jupyter", "Git"],
      color: "bg-orange-600/20 text-orange-300 border-orange-500/30",
      icon: "📈"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Apache Spark", "CI/CD", "Containerization"],
      color: "bg-cyan-600/20 text-cyan-300 border-cyan-500/30",
      icon: "☁️"
    },
    {
      category: "Frameworks & Libraries",
      skills: ["LangChain", "HuggingFace", "FAISS", "Streamlit", "TensorFlow"],
      color: "bg-rose-600/20 text-rose-300 border-rose-500/30",
      icon: "🔧"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, cloud technologies, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Leadership", "Problem-solving", "Communication", "Adaptability", "Team Collaboration"].map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
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
