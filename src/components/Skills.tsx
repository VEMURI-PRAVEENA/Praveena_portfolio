
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive toolkit spanning AI/ML, cloud technologies, and data science
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="group transition-all duration-300 bg-gray-800/70 backdrop-blur-sm border-gray-600 hover:border-blue-500/50 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <CardContent className="p-6 relative z-10">
                  <motion.div
                    className="flex items-center gap-3 mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="text-2xl"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      {category.icon}
                    </motion.span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.category}
                    </h3>
                  </motion.div>
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover={{ 
                          scale: 1.15,
                          rotate: [0, -3, 3, 0],
                          boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)",
                          y: -2
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        style={{ delay: (skillIndex * 0.05) + "s" }}
                      >
                        <Badge
                          className={`${category.color} transition-all duration-200 cursor-pointer hover:shadow-lg relative overflow-hidden`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          />
                          <span className="relative z-10">{skill}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <motion.div
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(147, 51, 234, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: "200% 200%" }}
              />
              <CardContent className="p-8 text-center relative z-10">
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Soft Skills
                </motion.h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Leadership", "Problem-solving", "Communication", "Adaptability", "Team Collaboration"].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 1.4 + (index * 0.1) }}
                      whileHover={{ 
                        scale: 1.15,
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Badge className="bg-white/20 text-white border-white/30 transition-all duration-200 cursor-pointer hover:bg-white/30">
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
