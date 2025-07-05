
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI Chatbot using RAG with Mistral-7B",
      description: "Built an RAG-based chatbot using Mistral-7B for over 93% semantic accuracy. Processed 200+ pages of medical PDFs into 500+ semantic chunks using Sentence Transformers + FAISS.",
      technologies: ["LangChain", "HuggingFace", "FAISS", "Streamlit", "Mistral-7B"],
      github: "https://github.com/VEMURI-PRAVEENA/AI-RAG-based-chatbot",
      features: [
        "93%+ semantic accuracy",
        "Processed 200+ pages of medical PDFs → 500+ semantic chunks using Sentence Transformers + FAISS",
        "Integrated LangChain QA pipeline for dynamic context retrieval from vector DB"
      ],
      category: "AI/ML"
    },
    {
      title: "Brain Tumor Detection using YOLOv8",
      description: "An AI-powered deep learning solution that detects and localizes brain tumors in MRI scans using the YOLOv8 object detection model.",
      technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch", "TensorFlow", "Keras", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/brain_tumor_detection",
      features: [
        "Trained YOLOv8 (yolov8n.pt) on custom-labeled brain MRI dataset",
        "Achieved high accuracy, precision, recall, and mAP during evaluation",
        "Visualized detection results, bounding boxes, and performance metrics",
        "Exported models for deployment: PyTorch .pt, TensorFlow SavedModel, Keras .h5"
      ],
      category: "AI/ML"
    },
    {
      title: "Face Mask Detection using CNN",
      description: "Developed and trained a CNN model to classify facial images into 'mask' and 'no mask' with 92%+ accuracy. Implemented real-time video stream detection using OpenCV and deployed .h5 model.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/face-mask--detection",
      features: [
        "92%+ accuracy CNN model",
        "Real-time video stream detection",
        "Visualized feature maps and interpreted dense layer contributions"
      ],
      category: "AI/ML"
    },
    {
      title: "FrozenLake: Q-Learning vs Policy Gradient Comparison",
      description: "Implemented both Q-Learning and Policy Gradient on FrozenLake-v1 using custom rewards. Compared convergence, stability, and average rewards with detailed performance analysis.",
      technologies: ["OpenAI Gym", "NumPy", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/Frozen--lake",
      features: [
        "Custom reward function implementation",
        "Compared convergence, stability, and average rewards",
        "Plotted agent path visualizations and performance metrics"
      ],
      category: "Reinforcement Learning"
    }
  ];

  // Sort projects by category (AI/ML first)
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.category === "AI/ML" && b.category !== "AI/ML") return -1;
    if (a.category !== "AI/ML" && b.category === "AI/ML") return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] font-serif relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-violet-600/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Showcasing expertise in AI/ML through hands-on projects that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sortedProjects.map((project, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 bg-gray-800/80 backdrop-blur-sm border-gray-600 shadow-lg hover:shadow-2xl animate-fade-in-up ${
                hoveredProject === index 
                  ? "shadow-2xl scale-105 bg-gradient-to-br from-gray-800 to-gray-700 shadow-blue-500/25" 
                  : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 relative z-10">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-200 border-purple-500/30">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-300 leading-relaxed relative z-10">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 relative">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-blue-300 hover:from-blue-600/30 hover:to-violet-600/30 transition-all duration-200 transform hover:scale-105 border-blue-500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mr-2 flex-shrink-0 mt-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button - GitHub with Logo */}
                <div className="pt-4">
                  <Button
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={18} className="mr-2" />
                    <span>View on GitHub</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Coming Soon Card */}
          <Card className="group cursor-pointer transition-all duration-500 bg-gray-800/60 backdrop-blur-sm border-gray-600 border-dashed shadow-lg animate-fade-in-up hover:shadow-xl hover:shadow-purple-500/25">
            <CardContent className="flex flex-col items-center justify-center h-full py-16 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white">More Projects Coming Soon</h3>
              <p className="text-gray-400 text-center">
                Currently working on exciting new AI/ML projects that will be showcased here.
              </p>
              <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-200 border-purple-500/30">
                In Development
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
