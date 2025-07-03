
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Eye } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How I Built a RAG-based Chatbot with 93% Accuracy",
      description: "Deep dive into building an intelligent chatbot using Retrieval-Augmented Generation with Mistral-7B, processing 200+ pages of medical PDFs into semantic chunks.",
      date: "December 2024",
      readTime: "8 min read",
      category: "AI/ML",
      status: "Coming Soon",
      tags: ["RAG", "LangChain", "Mistral-7B", "FAISS"]
    },
    {
      title: "Q-Learning vs Policy Gradient: A FrozenLake Case Study",
      description: "Comprehensive comparison of reinforcement learning algorithms, analyzing convergence patterns, stability, and performance metrics in OpenAI's FrozenLake environment.",
      date: "January 2025",
      readTime: "12 min read", 
      category: "Reinforcement Learning",
      status: "Coming Soon",
      tags: ["Q-Learning", "Policy Gradient", "OpenAI Gym", "RL"]
    },
    {
      title: "YOLOv8 for Medical Imaging: Brain Tumor Detection",
      description: "Technical walkthrough of implementing YOLOv8 for medical image analysis, achieving high precision in brain tumor detection with custom-labeled MRI datasets.",
      date: "February 2025",
      readTime: "10 min read",
      category: "Computer Vision",
      status: "Coming Soon", 
      tags: ["YOLOv8", "Medical AI", "Computer Vision", "PyTorch"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📝 Blog & Insights
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical deep-dives and insights from my AI/ML projects and research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group cursor-pointer transition-all duration-500 transform hover:scale-105 bg-gray-800/80 backdrop-blur-sm border-gray-600 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    className="bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-blue-300 border-blue-500/30"
                  >
                    {post.category}
                  </Badge>
                  {post.status === "Coming Soon" && (
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400/50">
                      {post.status}
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </CardTitle>
                
                <CardDescription className="text-gray-300 leading-relaxed line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-200 text-xs border-purple-500/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            🚀 More technical articles coming soon! Follow my journey in AI/ML development.
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Blog;
