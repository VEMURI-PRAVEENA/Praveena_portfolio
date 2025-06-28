
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Face Mask Detection using CNN",
      description: "Developed and trained a CNN model to classify facial images into 'mask' and 'no mask' with 92%+ accuracy. Implemented real-time video stream detection using OpenCV and deployed .h5 model.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/face-mask--detection",
      features: [
        "92%+ accuracy CNN model",
        "Real-time video stream detection",
        "Feature maps visualization",
        "Dense layer interpretation"
      ]
    },
    {
      title: "FrozenLake: Q-Learning vs Policy Gradient Comparison",
      description: "Implemented both Q-Learning and Policy Gradient on FrozenLake-v1 using custom rewards. Compared convergence, stability, and average rewards with detailed performance analysis.",
      technologies: ["OpenAI Gym", "NumPy", "Matplotlib"],
      github: "https://github.com/VEMURI-PRAVEENA/Frozen--lake",
      features: [
        "Custom reward function implementation",
        "Convergence and stability comparison",
        "Agent path visualizations",
        "Performance metrics analysis"
      ]
    },
    {
      title: "AI Chatbot using RAG with Mistral-7B",
      description: "Built an RAG-based chatbot using Mistral-7B for over 93% semantic accuracy. Processed 200+ pages of medical PDFs into 500+ semantic chunks using Sentence Transformers + FAISS.",
      technologies: ["LangChain", "HuggingFace", "FAISS", "Streamlit", "Mistral-7B"],
      github: "https://github.com/VEMURI-PRAVEENA/AI-RAG-based-chatbot",
      features: [
        "93%+ semantic accuracy",
        "500+ semantic chunks processing",
        "Medical PDF document processing",
        "Dynamic context retrieval from vector DB"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my expertise in AI/ML through hands-on projects that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                hoveredProject === index ? "shadow-2xl" : "shadow-lg"
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
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
