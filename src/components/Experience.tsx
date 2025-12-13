import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "AI & Data Engineering Intern",
      company: "Infosys Springboard",
      type: "Virtual Internship",
      period: "Sep 2025 – Present",
      description: "Developing AI-based property valuation application with ML models and real-time predictions.",
      responsibilities: [
        "Developed an AI-based property valuation application using ML models and Streamlit for real-time price predictions",
        "Designed a market insights dashboard displaying price trends, ROI forecasts and rental estimates",
        "Automated PDF valuation report generation using ReportLab to simplify documentation",
        "Integrated callback and email notifications to streamline user interaction",
        "Enhanced usability with favourites, prediction history and modular navigation"
      ],
      achievement: "Prototype selected among top milestone submissions for innovation and user-focused design",
      technologies: ["Python", "Streamlit", "Machine Learning", "ReportLab", "Data Analytics"],
      color: "from-blue-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-screen filter blur-xl opacity-40 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-blue-400" size={40} />
            Internship Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hands-on industry experience building real-world AI applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-[#1e1e2f]/80 backdrop-blur-sm border-gray-600 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-blue-400 font-medium">
                        {exp.company} • {exp.type}
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-gray-300 bg-gray-700/50 px-4 py-2 rounded-lg">
                      <Calendar size={18} className="mr-2 text-blue-400" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-lg">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + respIndex * 0.1 }}
                          className="flex items-start text-gray-300"
                        >
                          <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={16} />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievement && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 }}
                      className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4"
                    >
                      <p className="text-green-300 font-medium flex items-center">
                        <span className="text-2xl mr-3">🏆</span>
                        <span><strong>Key Achievement:</strong> {exp.achievement}</span>
                      </p>
                    </motion.div>
                  )}

                  <div className="pt-4">
                    <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1.2 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-3 py-1">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
