
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Sparkles } from "lucide-react";

const ComingSoon = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: 'Times New Roman, serif' }}>
            Coming Soon
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Times New Roman, serif' }}>
            Exciting new projects and features are on the way
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 hover:border-purple-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/10"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="mb-6">
                <Sparkles className="w-16 h-16 mx-auto text-purple-400 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                Advanced AI Projects
              </h3>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                Working on cutting-edge machine learning models and deep learning applications that push the boundaries of AI innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 hover:border-teal-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-500/10"></div>
            <CardContent className="p-8 text-center relative z-10">
              <div className="mb-6">
                <Clock className="w-16 h-16 mx-auto text-teal-400 animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300" style={{ fontFamily: 'Times New Roman, serif' }}>
                Research Publications
              </h3>
              <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                Preparing research papers on AI/ML topics and contributing to the academic community with innovative solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
