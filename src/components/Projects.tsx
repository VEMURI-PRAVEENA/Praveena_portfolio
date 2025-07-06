
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "FrozenLake: Q-Learning vs Policy Gradient Comparison",
      description: "Implemented both Q-Learning and Policy Gradient on FrozenLake-v1 using custom rewards. Compared convergence, stability, and average rewards with detailed performance analysis.",
      technologies: ["OpenAI Gym", "NumPy", "Matplotlib"],
      github: "#",
      image: "/lovable-uploads/eb49cabb-6522-4d5d-940f-9675c92767da.png",
      features: [
        "Custom reward function implementation",
        "Compared convergence, stability, and average rewards",
        "Plotted agent path visualizations and performance metrics"
      ],
      category: "Reinforcement Learning"
    }
  ];

  const comingSoonProjects = [
    {
      title: "RAG-based Chatbot",
      description: "AI-powered chatbot using Retrieval-Augmented Generation with advanced language models for enhanced conversational experiences.",
      technologies: ["Python", "LangChain", "FAISS", "Mistral-7B", "HuggingFace", "Streamlit"],
      category: "AI/ML"
    },
    {
      title: "Face Mask Detection",
      description: "Computer vision system for real-time face mask detection using deep learning and convolutional neural networks.",
      technologies: ["TensorFlow", "Keras", "CNN", "OpenCV", "Python"],
      category: "Computer Vision"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section ref={ref} id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] font-serif relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-64 h-64 bg-blue-600/10 rounded-full mix-blend-screen filter blur-xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-72 h-72 bg-violet-600/10 rounded-full mix-blend-screen filter blur-xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Showcasing expertise in AI/ML through hands-on projects that solve real-world problems
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="w-full"
            >
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-600 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left: Project Image */}
                  <motion.div
                    className="relative group"
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                      {/* Glowing White Border Animation */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        animate={{
                          boxShadow: [
                            "0 0 0 2px rgba(255, 255, 255, 0.2)",
                            "0 0 0 2px rgba(255, 255, 255, 0.6)",
                            "0 0 0 2px rgba(255, 255, 255, 0.2)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                      />
                    </div>
                  </motion.div>

                  {/* Right: Content */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-200 border-purple-500/30">
                              {project.category}
                            </Badge>
                          </motion.div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 leading-relaxed mt-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      {/* Scrolling Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
                        <div className="relative overflow-hidden h-12 bg-gray-700/30 rounded-lg">
                          <motion.div
                            className="flex items-center gap-4 absolute"
                            animate={{
                              x: ["100%", "-100%"]
                            }}
                            transition={{
                              duration: 15,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          >
                            {[...project.technologies, ...project.technologies].map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                className="flex-shrink-0"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Badge className="bg-gradient-to-r from-blue-600/30 to-violet-600/30 text-blue-200 border-blue-500/30 whitespace-nowrap">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-white text-sm">Key Features:</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          {project.features.slice(0, 2).map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.4, 
                                delay: (index * 0.2) + (featureIndex * 0.1) + 0.8
                              }}
                              className="flex items-start"
                            >
                              <motion.span 
                                className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mr-2 flex-shrink-0 mt-2"
                                whileHover={{ scale: 1.5 }}
                              />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* GitHub Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600/80 hover:to-purple-600/80 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github size={18} className="mr-2" />
                        View on GitHub
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Coming Soon
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {comingSoonProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.2) }}
              >
                <Card className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm border-gray-600 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-200 border-orange-500/30">
                        Coming Soon
                      </Badge>
                      <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-200 border-purple-500/30">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-400 mb-3">Technologies:</h5>
                      <div className="relative overflow-hidden h-10 bg-gray-700/30 rounded-lg">
                        <motion.div
                          className="flex items-center gap-3 absolute"
                          animate={{
                            x: ["100%", "-100%"]
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          {[...project.technologies, ...project.technologies].map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              className="flex-shrink-0"
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge className="bg-gradient-to-r from-blue-600/30 to-violet-600/30 text-blue-200 border-blue-500/30 whitespace-nowrap text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20"
        >
          <motion.h3  
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            My GitHub
          </motion.h3>
          
          <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-600 shadow-xl overflow-hidden">
            <div className="p-8">
              <motion.div
                className="relative group mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 2px rgba(255, 255, 255, 0.2)",
                        "0 0 0 2px rgba(255, 255, 255, 0.6)",
                        "0 0 0 2px rgba(255, 255, 255, 0.2)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.img
                    src="/lovable-uploads/eb4dc249-3f27-4512-92ee-cb5ba19196f2.png"
                    alt="GitHub Profile"
                    className="w-full h-auto rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600/80 hover:to-purple-600/80 text-white transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3"
                    onClick={() => window.open("https://github.com/VEMURI-PRAVEENA", "_blank")}
                  >
                    <Github size={20} className="mr-2" />
                    👉 View My GitHub
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
