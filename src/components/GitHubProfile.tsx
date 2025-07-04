
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const GitHubProfile = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            GitHub Profile
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my coding journey and open-source contributions
          </p>
        </div>

        <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-lg"></div>
          <div className="absolute inset-0 border-2 border-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg"></div>
          
          <CardContent className="p-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-blue-500 p-1 shadow-2xl shadow-green-500/25">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-2 border-gray-800">
                    <img
                      src="/lovable-uploads/f0a93034-6b55-44e6-a5f4-e45b6c40ce6b.png"
                      alt="GitHub Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 blur-xl animate-pulse"></div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">VEMURI-PRAVEENA</h3>
                <p className="text-green-400 font-medium mb-4">AI & ML Engineer | Data Science Enthusiast | Cloud Explorer</p>
                
                <div className="space-y-2 text-gray-300 mb-6">
                  <p>🧠 I'm currently working on AI Chatbots, LLMs with RAG, and RL Algorithms</p>
                  <p>🌱 I'm currently learning TensorFlow, Mistral-7B, LangChain, and AWS Deployment</p>
                  <p>🤝 Ask me about Q-Learning vs Policy Gradient, Prompt Engineering, Cloud-Native AI Projects</p>
                  <p>🔗 I'm looking to collaborate on AI/ML Projects & Research</p>
                  <p>⚡ Fun fact: I love coding while sipping on chai ☕ – it powers my neurons and my code!</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["PYTHON", "JAVA", "HTML", "CSS", "AWS", "DOCKER", "SQL", "APACHE SPARK", "TABLEAU", "SEABORN"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-green-600/20 to-blue-600/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center md:justify-start">
                  <Button
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a
                      href="https://github.com/VEMURI-PRAVEENA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={20} />
                      Visit GitHub
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a
                      href="https://github.com/VEMURI-PRAVEENA?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      View Repositories
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GitHubProfile;
