
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "Python", icon: "🐍", color: "#3776ab" },
        { name: "TensorFlow", icon: "🧠", color: "#ff6f00" },
        { name: "Keras", icon: "🔥", color: "#d00000" },
        { name: "Jupyter", icon: "📓", color: "#f37626" },
        { name: "Google Colab", icon: "☁️", color: "#f9ab00" },
        { name: "Scikit-learn", icon: "📊", color: "#f7931e" },
        { name: "Streamlit", icon: "🚀", color: "#ff4b4b" }
      ],
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Data Analytics", 
      skills: [
        { name: "Python", icon: "🐍", color: "#3776ab" },
        { name: "Pandas", icon: "🐼", color: "#150458" },
        { name: "NumPy", icon: "🔢", color: "#013243" },
        { name: "Matplotlib", icon: "📈", color: "#11557c" },
        { name: "Seaborn", icon: "🎨", color: "#444876" },
        { name: "Tableau", icon: "📊", color: "#e97627" },
        { name: "Excel", icon: "📝", color: "#217346" }
      ],
      color: "from-green-600 to-green-800"
    },
    {
      title: "Databases",
      skills: [
        { name: "Python", icon: "🐍", color: "#3776ab" },
        { name: "MySQL", icon: "🗄️", color: "#4479a1" },
        { name: "PostgreSQL", icon: "🐘", color: "#336791" }
      ],
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "DevOps",
      skills: [
        { name: "AWS", icon: "☁️", color: "#ff9900" },
        { name: "Docker", icon: "🐳", color: "#2496ed" },
        { name: "Flask", icon: "🌶️", color: "#000000" },
        { name: "FastAPI", icon: "⚡", color: "#009688" }
      ],
      color: "from-orange-600 to-orange-800"
    },
    {
      title: "AWS",
      skills: [
        { name: "Lambda", icon: "λ", color: "#ff9900" },
        { name: "EC2", icon: "🖥️", color: "#ff9900" },
        { name: "S3", icon: "🪣", color: "#ff9900" },
        { name: "IAM", icon: "🔐", color: "#ff9900" },
        { name: "RDS", icon: "💾", color: "#ff9900" },
        { name: "SageMaker", icon: "🤖", color: "#ff9900" }
      ],
      color: "from-yellow-600 to-yellow-800"
    },
    {
      title: "Generative AI",
      skills: [
        { name: "Python", icon: "🐍", color: "#3776ab" },
        { name: "LangChain", icon: "🔗", color: "#1c3c3c" },
        { name: "HuggingFace", icon: "🤗", color: "#ff6b35" },
        { name: "Groq", icon: "⚡", color: "#f55036" }
      ],
      color: "from-pink-600 to-pink-800"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative overflow-hidden">
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
              className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 bg-[#1e1e2f] border-gray-600 hover:border-blue-500/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-full h-2 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                
                <h3 className="text-xl font-bold text-white mb-6 group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative"
                    >
                      <div className="flex items-center space-x-3 p-3 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-gray-600 hover:border-blue-400/50 transition-all duration-300 cursor-default backdrop-blur-sm rounded-xl">
                        <div 
                          className="text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg"
                          style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                        Tool: {skill.name}
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
