import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Star, Shield } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle AI Associate",
      issuer: "Oracle Corporation",
      date: "February 2025",
      description: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate. Gained expertise in machine learning concepts, OCR, classification, and chatbot services on OCI.",
      skills: ["Machine Learning", "OCR", "Classification", "Chatbot Services", "Oracle Cloud Infrastructure"],
      logo: "🔵",
      verified: true,
      certificateImage: "/lovable-uploads/e65abdeb-29a8-4028-8f4a-dc194b664bae.png",
      hasImage: true
    },
    {
      title: "Principles of Generative AI Certification",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Certified in principles of Generative AI including LLMs, transformers, and generative model architectures.",
      skills: ["Generative AI", "LLMs", "Transformers", "AI Principles"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1i1-b3Tlj4ZWkV_yLZduhQW16asAOTuHn/view?usp=sharing"
    },
    {
      title: "Artificial Intelligence Primer Certification",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Completed comprehensive AI fundamentals training covering machine learning, deep learning, and AI applications in enterprise solutions.",
      skills: ["AI Fundamentals", "Machine Learning", "Deep Learning", "Enterprise AI"],
      logo: "🟢",
      verified: true,
      badgeImage: "/lovable-uploads/25563a4a-4ff6-4515-bd5c-e24295030ce2.png",
      certificateLink: "https://drive.google.com/file/d/1XeqO7mH7YqReRBx4SEx92UAlpio1GjXQ/view?usp=sharing"
    },
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "October 2024",
      description: "Completed 40+ hours of training on scalable AWS architecture design. Mastered core AWS services and best practices.",
      skills: ["EC2", "S3", "IAM", "RDS", "VPC", "Auto Scaling", "CloudFormation"],
      logo: "🟠",
      verified: true,
      credlyLink: "https://www.credly.com/badges/ccd123a3-5223-4402-87bb-66c0f663cfa4",
      badgeImage: "/lovable-uploads/ef6fef7f-0326-4265-82c2-2a90c6bb127e.png"
    },
    {
      title: "Prompt Engineering",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Mastered techniques for effective prompt engineering with LLMs including prompt design, optimization, and best practices.",
      skills: ["Prompt Design", "LLM Optimization", "AI Communication", "ChatGPT"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1FsDpgZEYPcpy_xIqfqmXEsqAgBTYV4Wt/view?usp=sharing"
    },
    {
      title: "OpenAI GPT-3 for Developers",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Completed training on OpenAI's GPT-3 API, including integration techniques and application development.",
      skills: ["GPT-3 API", "OpenAI", "API Integration", "NLP Applications"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1MYBmEHsEiWNdCa0cs1qnIW3jAaKa4G3V/view?usp=sharing"
    },
    {
      title: "Deep Learning for Developers",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Comprehensive training in deep learning architectures, neural networks, and practical implementation for developers.",
      skills: ["Neural Networks", "CNN", "RNN", "Deep Learning", "TensorFlow"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1mKze23BnZL0km2zx8ADmNNZm3z5BHt9p/view?usp=sharing"
    },
    {
      title: "Generative AI Unleashing",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Advanced course on generative AI technologies, applications, and implementation strategies.",
      skills: ["Generative AI", "AI Applications", "Model Deployment", "Innovation"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1XHWUC4brHU-REMGB5ZYqcNg5k4-rKIeY/view?usp=sharing"
    },
    {
      title: "Generative Models for Developers",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Hands-on training in building and deploying generative models including GANs, VAEs, and diffusion models.",
      skills: ["GANs", "VAEs", "Diffusion Models", "Model Training"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1oNdWh2ZRIMkjs0C7wT-XWJ5V82MgLGNX/view?usp=sharing"
    },
    {
      title: "Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Comprehensive AI course covering fundamental concepts, algorithms, and practical applications.",
      skills: ["AI Algorithms", "Problem Solving", "AI Ethics", "Automation"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1MZToTO4-ezHYdibi6X1B7he8jx76u80X/view?usp=drive_link"
    },
    {
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Practical training in Agile methodology and Scrum framework for effective project management.",
      skills: ["Agile", "Scrum", "Sprint Planning", "Project Management"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1V44HVMMJ6JHexVrPwLyCWHbp1prXi5Bw/view?usp=sharing"
    },
    {
      title: "Email Writing Skills",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Professional communication course covering effective email writing for business contexts.",
      skills: ["Business Communication", "Professional Writing", "Email Etiquette"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/16WxnlGXmPAexmNjZLp7u4AQVrFdVWIDr/view?usp=sharing"
    },
    {
      title: "Introduction to OpenAI GPT Models",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Comprehensive introduction to OpenAI's GPT models, architecture, and applications.",
      skills: ["GPT Models", "OpenAI", "Language Models", "AI Applications"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1lZMs6TPrJemXrVnCrX5MApwaTvDGBelr/view?usp=sharing"
    },
    {
      title: "Introduction to Natural Language Processing",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Foundational course in NLP covering text processing, sentiment analysis, and language understanding.",
      skills: ["NLP", "Text Processing", "Sentiment Analysis", "Tokenization"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1ejhZ84gg6OvmfAMYUOU6v2VvsN0MSLD0/view?usp=sharing"
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Introduction to deep learning concepts, neural network architectures, and practical applications.",
      skills: ["Deep Learning", "Neural Networks", "Backpropagation", "Activation Functions"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1Dxg2KB-SVVmzs6l0BZDfG4by2rh9JD-o/view?usp=sharing"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Foundational course covering AI concepts, history, applications, and future trends.",
      skills: ["AI Fundamentals", "Machine Learning Basics", "AI Ethics", "AI Applications"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1S8o2c0uCS_HlO93QNZCcFEFyjFK54yX6/view?usp=sharing"
    },
    {
      title: "Computer Vision 101",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Introduction to computer vision including image processing, object detection, and visual recognition.",
      skills: ["Computer Vision", "Image Processing", "Object Detection", "OpenCV"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1iqGr5x88rqJipQu_5CP15_PQEmIpp5P6/view?usp=drive_link"
    },
    {
      title: "Introduction to Robotic Process Automation",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Comprehensive introduction to RPA concepts, tools, and automation strategies.",
      skills: ["RPA", "Process Automation", "Bot Development", "Workflow Automation"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/10Ra53Nay7a9XmqGCSQcnJkkoyepzKQYs/view?usp=sharing"
    },
    {
      title: "High Impact Presentations",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Training on creating and delivering effective, high-impact presentations.",
      skills: ["Presentation Skills", "Public Speaking", "Visual Design", "Storytelling"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1Qy1iuXuVF0lYi3J-9L7-9vq-2vpviZMJ/view?usp=sharing"
    },
    {
      title: "Time Management",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Effective time management techniques and productivity strategies for professionals.",
      skills: ["Time Management", "Productivity", "Prioritization", "Goal Setting"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1-NignrXJklyOv3ZZYdM5R2Cpm7iP-8n6/view?usp=sharing"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "June 2025",
      description: "Foundational course covering data science concepts, tools, and methodologies.",
      skills: ["Data Science", "Data Analysis", "Statistics", "Python"],
      logo: "🟢",
      verified: true,
      certificateLink: "https://drive.google.com/file/d/1x2iMM9zmw_ljTa7FhLciDTgdW_IMGQXc/view?usp=sharing"
    }
  ];

  const achievements = [
    {
      title: "Technical Content Creator",
      organization: "CSI Club (Think & Thrive), VIT-AP",
      period: "Dec 2022 – Jun 2024",
      description: "Increased social media reach by 35% and boosted event participation by 30% through data-driven technical content and consistent engagement.",
      impact: ["35% social media reach increase", "30% event participation boost", "Data-driven content strategy"]
    },
    {
      title: "Academic Excellence",
      organization: "VIT AP University",
      period: "2022 – Present",
      description: "Maintaining exceptional academic performance with CGPA of 8.91/10 in B.Tech CSE (AI & ML).",
      impact: ["8.91/10 CGPA", "AI & ML Specialization", "Dean's List"]
    }
  ];

  const handleCertificateClick = (cert: any) => {
    if (cert.certificateLink) {
      window.open(cert.certificateLink, '_blank');
    } else if (cert.hasImage && cert.certificateImage) {
      window.open(cert.certificateImage, '_blank');
    } else if (cert.credlyLink) {
      window.open(cert.credlyLink, '_blank');
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] font-serif relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 left-20 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Recognized expertise and continuous learning in AI, cloud technologies, and leadership
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center animate-fade-in-up delay-300">
            <Award className="mr-3 text-blue-400" size={28} />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-gray-600 bg-[#1e1e2f] backdrop-blur-sm shadow-lg cursor-pointer animate-fade-in-up hover:shadow-blue-500/25`}
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
                onClick={() => handleCertificateClick(cert)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{cert.logo}</span>
                      <div>
                        <CardTitle className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="flex items-center space-x-2 text-gray-300">
                          <span>{cert.issuer}</span>
                          {cert.verified && (
                            <Badge className="bg-green-600/20 text-green-300 text-xs flex items-center border-green-500/30">
                              <Shield size={12} className="mr-1" />
                              Verified
                            </Badge>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar size={16} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Badge Image */}
                  {cert.badgeImage && (
                    <div className="flex justify-center mb-4">
                      <img
                        src={cert.badgeImage}
                        alt={`${cert.title} Badge`}
                        className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )}

                  {cert.hasImage && cert.certificateImage && (
                    <div className="mb-4">
                      <img
                        src={cert.certificateImage}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <p className="text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-200 border-blue-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCertificateClick(cert);
                    }}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span>
                      {cert.credlyLink ? "Verify Credential" : "View Certificate"}
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center animate-fade-in-up delay-700">
            <Star className="mr-3 text-purple-400" size={28} />
            Leadership & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-gray-600 bg-[#1e1e2f] backdrop-blur-sm shadow-lg animate-fade-in-up hover:shadow-purple-500/25`}
                style={{ animationDelay: `${(index + 7) * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {achievement.organization} • {achievement.period}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Impact:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {achievement.impact.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
