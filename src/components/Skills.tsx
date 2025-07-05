
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "HTML", "CSS", "SQL"],
      color: "bg-blue-600/20 text-blue-300 border-blue-500/30"
    },
    {
      category: "AI & Machine Learning",
      skills: ["Transformers", "Prompt Engineering", "RAG", "Model Optimization", "Deep Learning"],
      color: "bg-purple-600/20 text-purple-300 border-purple-500/30"
    },
    {
      category: "Data Analytics",
      skills: ["Data Cleaning", "Preprocessing", "Statistical Modeling", "ML Algorithms"],
      color: "bg-green-600/20 text-green-300 border-green-500/30"
    },
    {
      category: "Visualization & Tools",
      skills: ["Matplotlib", "Seaborn", "Tableau", "Jupyter", "Git"],
      color: "bg-orange-600/20 text-orange-300 border-orange-500/30"
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Apache Spark", "CI/CD", "Containerization"],
      color: "bg-cyan-600/20 text-cyan-300 border-cyan-500/30"
    },
    {
      category: "Frameworks & Libraries",
      skills: ["LangChain", "HuggingFace", "FAISS", "Streamlit", "TensorFlow"],
      color: "bg-rose-600/20 text-rose-300 border-rose-500/30"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, cloud technologies, and data science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group transition-all duration-300 bg-gray-800/70 backdrop-blur-sm border-gray-600">
                  <CardContent className="p-6">
                    <motion.h3
                      whileHover={{ color: "#60a5fa" }}
                      transition={{ duration: 0.3 }}
                      className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      {category.category}
                    </motion.h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.3, 
                            delay: (index * 0.1) + (skillIndex * 0.05) + 0.2
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            className={`${category.color} transition-transform duration-200 cursor-default`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <motion.div
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Leadership", "Problem-solving", "Communication", "Adaptability", "Team Collaboration"].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge className="bg-white/20 text-white border-white/30 transition-colors duration-200">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
