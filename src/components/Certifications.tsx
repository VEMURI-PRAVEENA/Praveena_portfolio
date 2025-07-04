
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Shield } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle Corporation",
      date: "February 14, 2025",
      description: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate.",
      skills: ["Machine Learning", "OCR", "Classification", "Chatbot Services"],
      logo: "🔵",
      verified: true,
      certificateImage: "/lovable-uploads/e65abdeb-29a8-4028-8f4a-dc194b664bae.png"
    },
    {
      title: "AWS Academy Graduate - Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "October 2024",
      description: "Completed 40+ hours of training on scalable AWS architecture design.",
      skills: ["EC2", "S3", "IAM", "RDS", "VPC", "Auto Scaling"],
      logo: "🟠",
      verified: true,
      credlyLink: "https://www.credly.com/badges/ccd123a3-5223-4402-87bb-66c0f663cfa4",
      badgeImage: "/lovable-uploads/ef6fef7f-0326-4265-82c2-2a90c6bb127e.png"
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Completed foundational training on AWS cloud concepts and services.",
      skills: ["AWS Basics", "Cloud Computing", "EC2", "S3", "Security"],
      logo: "🟠",
      verified: true,
      badgeImage: "/lovable-uploads/25563a4a-4ff6-4515-bd5c-e24295030ce2.png"
    }
  ];

  const handleCertificateClick = (cert: any) => {
    if (cert.certificateImage) {
      window.open(cert.certificateImage, '_blank');
    } else if (cert.credlyLink) {
      window.open(cert.credlyLink, '_blank');
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognized expertise and continuous learning in AI, cloud technologies, and leadership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-gray-800 bg-black/50 shadow-lg cursor-pointer hover:shadow-blue-500/25"
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
                </div>
                <div className="text-sm text-gray-400">{cert.date}</div>
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
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
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
    </section>
  );
};

export default Certifications;
