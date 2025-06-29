
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techCategories = [
    {
      title: "Machine Learning",
      skills: ["Python", "TensorFlow", "Keras", "Jupyter", "Google Colab", "Scikit-learn", "Streamlit"],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Data Analytics", 
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Excel"],
      color: "from-green-600 to-green-800"
    },
    {
      title: "Databases",
      skills: ["Python", "MySQL", "PostgreSQL"],
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "DevOps",
      skills: ["AWS", "Docker", "Flask", "FastAPI"],
      color: "from-orange-600 to-orange-800"
    },
    {
      title: "AWS",
      skills: ["Lambda", "EC2", "S3", "IAM", "RDS", "SageMaker"],
      color: "from-yellow-600 to-yellow-800"
    },
    {
      title: "Generative AI",
      skills: ["Python", "LangChain", "HuggingFace", "Groq"],
      color: "from-pink-600 to-pink-800"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🧰 Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tools I Use to Build & Deploy AI Systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 bg-[#1e1e2f] border-gray-700 hover:border-blue-500/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative"
                    >
                      <Badge
                        className="w-full justify-center py-2 px-3 bg-gray-800/50 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-white border-gray-600 hover:border-blue-400/50 transition-all duration-300 cursor-default backdrop-blur-sm rounded-xl"
                      >
                        <span className="text-sm font-medium">{skill}</span>
                      </Badge>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        Tool: {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default TechStack;
