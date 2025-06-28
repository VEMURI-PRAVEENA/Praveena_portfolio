
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Oracle AI Associate",
      issuer: "Oracle",
      date: "February 2025",
      description: "Gained expertise in machine learning concepts, OCR, classification, and chatbot services on OCI.",
      skills: ["Machine Learning", "OCR", "Classification", "Chatbot Services", "Oracle Cloud"],
      logo: "🔵",
      verified: true
    },
    {
      title: "AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      date: "October 2024",
      description: "Completed 40+ hours of training on scalable AWS architecture design. Mastered core AWS services and best practices.",
      skills: ["EC2", "S3", "IAM", "RDS", "VPC", "Auto Scaling", "CloudFormation"],
      logo: "🟠",
      verified: true
    }
  ];

  const achievements = [
    {
      title: "Content Creator",
      organization: "Think & Thrive & CSI Clubs, VIT-AP",
      period: "Dec 2022 – Jun 2024",
      description: "Produced mental-wellness infographics and technical posts that boosted Instagram reach by 35% and lifted event attendance by 30%.",
      impact: ["35% Instagram reach increase", "30% event attendance boost", "Mental wellness advocacy"]
    },
    {
      title: "Academic Excellence",
      organization: "VIT AP University",
      period: "2022 – Present",
      description: "Maintaining exceptional academic performance with CGPA of 8.88/10 in B.Tech CSE (AI & ML).",
      impact: ["8.88/10 CGPA", "AI & ML Specialization", "Dean's List"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized expertise and continuous learning in AI, cloud technologies, and leadership
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3 text-blue-600" size={28} />
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-102 border-l-4 border-l-blue-500"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{cert.logo}</span>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="flex items-center space-x-2 text-gray-600">
                          <span>{cert.issuer}</span>
                          {cert.verified && (
                            <Badge className="bg-green-100 text-green-700 text-xs">
                              Verified
                            </Badge>
                          )}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Star className="mr-3 text-purple-600" size={28} />
            Leadership & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-102 border-l-4 border-l-purple-500"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {achievement.organization} • {achievement.period}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Impact:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {achievement.impact.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
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
