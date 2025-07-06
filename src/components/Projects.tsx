import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "Face Mask Detection using CNN",
      description: "Developed and trained a CNN model to classify facial images into 'mask' and 'no mask' with 92%+ accuracy. Implemented real-time video stream detection using OpenCV and deployed .h5 model.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/face-mask--detection",
      image: "/lovable-uploads/d59bf700-cd97-4455-bd99-d98ab994d176.png",
      features: [
        "92%+ accuracy CNN model",
        "Real-time video stream detection",
        "Visualized feature maps and interpreted dense layer contributions"
      ],
      category: "AI/ML",
      gradient: "from-blue-600/20 to-cyan-600/20",
      accentColor: "blue"
    },
    {
      title: "AI Chatbot using RAG with Mistral-7B",
      description: "Built an RAG-based chatbot using Mistral-7B for over 93% semantic accuracy. Processed 200+ pages of medical PDFs into 500+ semantic chunks using Sentence Transformers + FAISS.",
      technologies: ["LangChain", "HuggingFace", "FAISS", "Streamlit", "Mistral-7B"],
      github: "https://github.com/VEMURI-PRAVEENA/AI-RAG-based-chatbot",
      image: "/lovable-uploads/040a527c-f572-4a8a-871e-3c809fb8babc.png",
      features: [
        "93%+ semantic accuracy",
        "Processed 200+ pages of medical PDFs → 500+ semantic chunks",
        "Integrated LangChain QA pipeline for dynamic context retrieval"
      ],
      category: "AI/ML",
      gradient: "from-purple-600/20 to-pink-600/20",
      accentColor: "purple"
    },
    {
      title: "Brain Tumor Detection using YOLOv8",
      description: "An AI-powered deep learning solution that detects and localizes brain tumors in MRI scans using the YOLOv8 object detection model.",
      technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch", "TensorFlow", "Keras", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/brain_tumor_detection",
      image: "/lovable-uploads/13e7dba5-3fcc-4d91-9824-cbbbc32de131.png",
      features: [
        "Trained YOLOv8 on custom-labeled MRI dataset",
        "Achieved high accuracy, precision, recall, and mAP",
        "Visualized bounding boxes and performance metrics",
        "Exported to: PyTorch .pt, TensorFlow SavedModel, Keras .h5"
      ],
      category: "AI/ML",
      gradient: "from-green-600/20 to-emerald-600/20",
      accentColor: "green"
    },
    {
      title: "FrozenLake: Q-Learning vs Policy Gradient Comparison",
      description: "Implemented both Q-Learning and Policy Gradient on FrozenLake-v1 using custom rewards. Compared convergence, stability, and average rewards with detailed performance analysis.",
      technologies: ["OpenAI Gym", "NumPy", "Matplotlib"],
      github: "#",
      image: "/lovable-uploads/e5c94a12-0cf5-4afc-8bb4-0e596ed8b685.png",
      features: [
        "Custom reward function implementation",
        "Compared convergence, stability, and average rewards",
        "Plotted agent path visualizations and performance metrics"
      ],
      category: "Reinforcement Learning",
      gradient: "from-orange-600/20 to-red-600/20",
      accentColor: "orange"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 25,
        duration: 0.4
      }
    }
  };

  const getAccentColors = (color: string) => {
    const colors = {
      blue: {
        glow: "shadow-blue-500/25",
        border: "border-blue-500/30",
        text: "text-blue-300",
        bg: "bg-blue-600/20"
      },
      purple: {
        glow: "shadow-purple-500/25",
        border: "border-purple-500/30",
        text: "text-purple-300",
        bg: "bg-purple-600/20"
      },
      green: {
        glow: "shadow-green-500/25",
        border: "border-green-500/30",
        text: "text-green-300",
        bg: "bg-green-600/20"
      },
      orange: {
        glow: "shadow-orange-500/25",
        border: "border-orange-500/30",
        text: "text-orange-300",
        bg: "bg-orange-600/20"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section ref={ref} id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            rotate: [360, 180, 0],
            x: [0, -80, 0],
            y: [0, 80, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-screen filter blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.2, 0.05],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-600/10 rounded-full mix-blend-screen filter blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-6">
              Featured AI/ML Projects
            </h2>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur opacity-75"
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Showcasing cutting-edge AI/ML expertise through innovative projects that solve real-world challenges
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const accentColors = getAccentColors(project.accentColor);
            return (
              <motion.div
                key={index}
                variants={projectVariants}
                className="w-full"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className={`relative overflow-hidden transition-all duration-500 transform ${hoveredProject === index ? 'scale-[1.01]' : ''} ${accentColors.glow} hover:shadow-2xl`}>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}
                    animate={{
                      opacity: hoveredProject === index ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className={`absolute inset-0 rounded-lg ${accentColors.border}`}
                    animate={{
                      boxShadow: [
                        `0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)`,
                        `0 0 0 2px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2)`,
                        `0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)`
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <div className="relative bg-gray-800/80 backdrop-blur-sm border-gray-600">
                    <div className="grid lg:grid-cols-2 gap-8 p-8">
                      <motion.div
                        className="relative group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                          <motion.div
                            className="absolute inset-0 rounded-lg"
                            animate={{
                              boxShadow: [
                                "0 0 0 2px rgba(255, 255, 255, 0.3), 0 0 25px rgba(255, 255, 255, 0.15)",
                                "0 0 0 3px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.25)",
                                "0 0 0 2px rgba(255, 255, 255, 0.3), 0 0 25px rgba(255, 255, 255, 0.15)"
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center rounded-lg"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            loading="eager"
                          />
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 rounded-lg`}
                            whileHover={{ opacity: 0.3 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      </motion.div>

                      <div className="flex flex-col justify-between">
                        <div>
                          <CardHeader className="p-0 mb-6">
                            <div className="flex items-center gap-3 mb-3">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Badge className={`${accentColors.bg} ${accentColors.text} ${accentColors.border} text-sm px-3 py-1`}>
                                  {project.category}
                                </Badge>
                              </motion.div>
                            </div>
                            <CardTitle className={`text-2xl font-bold text-white hover:${accentColors.text} transition-colors duration-300 mb-3`}>
                              {project.title}
                            </CardTitle>
                            <CardDescription className="text-gray-300 leading-relaxed text-base">
                              {project.description}
                            </CardDescription>
                          </CardHeader>

                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
                            <div className="relative overflow-hidden h-12 bg-gray-700/40 rounded-lg border border-gray-600/50">
                              <motion.div
                                className="flex items-center gap-4 absolute whitespace-nowrap"
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
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Badge className={`${accentColors.bg} ${accentColors.text} ${accentColors.border} whitespace-nowrap text-sm px-3 py-1`}>
                                      {tech}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </div>
                          </div>

                          <div className="space-y-3 mb-8">
                            <h4 className="font-semibold text-white text-base">Key Features:</h4>
                            <ul className="text-sm text-gray-300 space-y-2">
                              {project.features.slice(0, 3).map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -30 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ 
                                    duration: 0.3,
                                    delay: (index * 0.05) + (featureIndex * 0.05) + 0.3
                                  }}
                                  className="flex items-start"
                                >
                                  <motion.span 
                                    className={`w-2 h-2 ${accentColors.bg} rounded-full mr-3 flex-shrink-0 mt-2`}
                                    whileHover={{ scale: 2, rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                  <span className="leading-relaxed">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-auto"
                        >
                          <Button
                            className={`w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-${project.accentColor}-600/80 text-white transition-all duration-500 shadow-lg hover:shadow-xl text-base py-3`}
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <motion.div
                              className="flex items-center justify-center"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Github size={18} className="mr-2" />
                              View on GitHub
                              <motion.span
                                className="ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                →
                              </motion.span>
                            </motion.div>
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20"
        >
          <motion.h3  
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-12 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 2.2 }}
          >
            🚧 More Projects Coming Soon...
          </motion.h3>
          
          <Card className="relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10"
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative bg-gray-800/80 backdrop-blur-sm border-gray-600 p-12 text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-8xl mb-6"
              >
                🔬
              </motion.div>
              <h4 className="text-2xl font-semibold text-white mb-4">Under Development</h4>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Exciting new AI/ML projects are currently in development. Stay tuned for groundbreaking innovations!
              </p>
              <div className="flex justify-center space-x-3">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 1, 0.5],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.4 }}
          className="mt-20"
        >
          <motion.h3  
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-blue-200 mb-12 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 2.6 }}
          >
            My GitHub Portfolio
          </motion.h3>
          
          <Card className="relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-blue-600/10"
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative bg-gray-800/80 backdrop-blur-sm border-gray-600 p-8">
              <motion.div
                className="relative group mb-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 2px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.15)",
                        "0 0 0 4px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.25)",
                        "0 0 0 2px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.15)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.img
                    src="/lovable-uploads/eb4dc249-3f27-4512-92ee-cb5ba19196f2.png"
                    alt="GitHub Profile"
                    className="w-full h-auto rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    loading="eager"
                  />
                </div>
              </motion.div>

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-green-600/80 hover:to-blue-600/80 text-white transition-all duration-500 shadow-lg hover:shadow-xl px-10 py-4 text-lg"
                    onClick={() => window.open("https://github.com/VEMURI-PRAVEENA", "_blank")}
                  >
                    <motion.div
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Github size={24} className="mr-3" />
                      👉 View My GitHub
                      <motion.span
                        className="ml-3"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.div>
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
