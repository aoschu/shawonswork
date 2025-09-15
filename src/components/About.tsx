
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <Card className="hover:shadow-md transition-all">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold text-portfolio-blue mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const About = () => {
  const skillCategories = [
    {
      title: "Communications & Navigation",
      skills: ["Satellite Communication", "Wireless Communication", "Galileo Navigation Systems", "Signal Processing"],
    },
    {
      title: "Machine Learning & Deep Learning",
      skills: ["Supervised & Unsupervised Learning", "CNN", "GANs", "Transformers", "TensorFlow"],
    },
    {
      title: "Computer Vision",
      skills: ["Object Detection", "OCR", "Layout Analysis", "OpenCV", "YOLOv8", "EasyOCR", "LayoutLM"],
    },
    {
      title: "Natural Language Processing",
      skills: ["Text Classification", "Information Extraction", "Rasa", "spaCy"],
    },
    {
      title: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "SQL", "Power BI"],
    },
    {
      title: "Software Development",
      skills: ["Python", "Matlab"],
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Problem-Solving", "Team Collaboration", "Adaptability", "Communication"],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue font-heading">About Me</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-4">Biography</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I am a Scientific Researcher specializing in satellite navigation systems and wireless communication 
                technologies. Currently employed at Aerospace Data Security GmbH, I focus on Galileo satellite navigation 
                research within their R&D group, combining AI and communication expertise to advance secure navigation solutions.
              </p>
              <p>
                My expertise spans across satellite communication, wireless systems, machine learning, computer vision, 
                and natural language processing, allowing me to bridge advanced AI techniques with cutting-edge communication technologies.
              </p>
              <p>
                With a strong foundation in electrical and electronic engineering and specialized education in communication and information technology, 
                I bridge the gap between theoretical concepts and practical applications in the AI field.
              </p>
              <p>
                My professional journey includes developing chatbots, document processing pipelines, and image enhancement systems, 
                where I've consistently delivered high-quality solutions that meet business objectives.
              </p>
              <p>
                Apart from my technical expertise, I am also passionate about community service, leadership, and innovative projects. 
                My involvement in social and educational initiatives reflects my commitment to making a positive impact.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-4">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <SkillCategory
                  key={index}
                  title={category.title}
                  skills={category.skills}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
