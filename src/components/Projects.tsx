
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI Chatbot using RAG with Mistral-7B",
      description: "Built an RAG-based chatbot using Mistral-7B for over 93% semantic accuracy. Processed 200+ pages of medical PDFs into 500+ semantic chunks using Sentence Transformers + FAISS.",
      technologies: ["LangChain", "HuggingFace", "FAISS", "Streamlit", "Mistral-7B"],
      github: "https://github.com/VEMURI-PRAVEENA/AI-RAG-based-chatbot",
      image: "/placeholder.svg",
      category: "AI/ML"
    },
    {
      title: "Brain Tumor Detection using YOLOv8",
      description: "An AI-powered deep learning solution that detects and localizes brain tumors in MRI scans using the YOLOv8 object detection model.",
      technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch", "TensorFlow"],
      github: "https://github.com/VEMURI-PRAVEENA/brain_tumor_detection",
      image: "/placeholder.svg",
      category: "AI/ML"
    },
    {
      title: "Face Mask Detection using CNN",
      description: "Developed and trained a CNN model to classify facial images into 'mask' and 'no mask' with 92%+ accuracy. Implemented real-time video stream detection using OpenCV.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/face-mask--detection",
      image: "/placeholder.svg",
      category: "AI/ML"
    },
    {
      title: "FrozenLake: Q-Learning vs Policy Gradient",
      description: "Implemented both Q-Learning and Policy Gradient on FrozenLake-v1 using custom rewards. Compared convergence, stability, and average rewards with detailed performance analysis.",
      technologies: ["OpenAI Gym", "NumPy", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/Frozen--lake",
      image: "/placeholder.svg",
      category: "Reinforcement Learning"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing expertise in AI/ML through hands-on projects that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 bg-black/50 border-gray-800 shadow-lg hover:shadow-2xl ${
                hoveredProject === index 
                  ? "shadow-2xl scale-105 bg-gradient-to-br from-gray-900 to-gray-800 shadow-blue-500/25" 
                  : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-200 border-purple-500/30">
                  {project.category}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-blue-300 hover:from-blue-600/30 hover:to-violet-600/30 transition-all duration-200 border-blue-500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    <span>GitHub</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span>Live Demo</span>
                  </Button>
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
