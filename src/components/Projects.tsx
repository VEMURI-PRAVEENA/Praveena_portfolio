
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI Chatbot using RAG with Mistral-7B",
      description: "Built an RAG-based chatbot using Mistral-7B for over 93% semantic accuracy. Processed 200+ pages of medical PDFs into 500+ semantic chunks using Sentence Transformers + FAISS.",
      technologies: ["LangChain", "HuggingFace", "FAISS", "Streamlit", "Mistral-7B", "Python"],
      github: "https://github.com/VEMURI-PRAVEENA/AI-RAG-based-chatbot",
      image: "/lovable-uploads/6fa67d60-a141-4c5e-81a1-b8a400a476d8.png",
      category: "AI/ML"
    },
    {
      title: "Face Mask Detection using CNN",
      description: "Developed and trained a CNN model to classify facial images into 'mask' and 'no mask' with 92%+ accuracy. Implemented real-time video stream detection using OpenCV.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "CNN", "Python", "Computer Vision"],
      github: "https://github.com/VEMURI-PRAVEENA/face-mask--detection",
      image: "/lovable-uploads/78d775ca-b26a-4080-aa45-d013128c81a5.png",
      category: "AI/ML"
    },
    {
      title: "FrozenLake: Q-Learning vs Policy Gradient",
      description: "Implemented both Q-Learning and Policy Gradient on FrozenLake-v1 using custom rewards. Compared convergence, stability, and average rewards with detailed performance analysis.",
      technologies: ["OpenAI Gym", "NumPy", "Matplotlib", "Reinforcement Learning", "Python"],
      github: "https://github.com/VEMURI-PRAVEENA/Frozen--lake",
      image: "/lovable-uploads/ca95651e-e833-4313-b466-c8f4c76e3c19.png",
      category: "Reinforcement Learning"
    },
    {
      title: "Brain Tumor Detection using YOLOv8",
      description: "An AI-powered deep learning solution that detects and localizes brain tumors in MRI scans using the YOLOv8 object detection model with high accuracy.",
      technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch", "Medical AI", "Deep Learning"],
      github: "https://github.com/VEMURI-PRAVEENA/brain_tumor_detection",
      image: "/lovable-uploads/f91af39c-87b4-4fba-b345-cd5a2cea444e.png",
      category: "AI/ML"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent font-sans">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
            Showcasing expertise in AI/ML through hands-on projects that solve real-world problems
          </p>
        </div>

        <div className="grid gap-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group transition-all duration-500 transform hover:scale-105 bg-gray-900/50 border-gray-800 shadow-lg hover:shadow-2xl overflow-hidden ${
                hoveredProject === index 
                  ? "shadow-2xl scale-105 bg-gray-900/70 shadow-purple-500/25 border-purple-500/30" 
                  : "hover:border-purple-500/30"
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="lg:w-1/2 relative h-64 lg:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:from-transparent lg:to-black/60"></div>
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600/80 to-teal-600/80 text-white border-none backdrop-blur-sm font-sans">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 font-sans">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 font-sans">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            className="bg-gradient-to-r from-purple-600/20 to-teal-600/20 text-purple-300 hover:from-purple-600/30 hover:to-teal-600/30 transition-all duration-200 border-purple-500/30 text-sm font-sans"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Button Only */}
                    <div className="flex gap-4">
                      <Button
                        className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white transition-all duration-300 transform hover:scale-105 border border-gray-600 font-sans"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github size={16} className="mr-2" />
                        <span>View Code</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
