
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  details: string;
}

const EducationItem = ({ degree, institution, duration, location, details }: EducationItemProps) => (
  <Card className="hover:shadow-lg transition-all border-l-4 border-l-portfolio-blue">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold">{degree}</h3>
      <h4 className="font-medium text-portfolio-blue mt-1">{institution}</h4>
      <div className="flex justify-between text-gray-500 mt-1 mb-3">
        <span>{duration}</span>
        <span>{location}</span>
      </div>
      <p className="text-gray-600">{details}</p>
    </CardContent>
  </Card>
);

const Education = () => {
  const educationData = [
    {
      degree: "Master's in Communication and Information Technology",
      institution: "University of Bremen",
      duration: "May 2021 – August 2025",
      location: "Bremen, Germany",
      details: "Focus on machine learning for terrestrial and non-terrestrial networks, 5G, and 6G technologies."
    },
    {
      degree: "Bachelor of Science in Electrical and Electronic Engineering",
      institution: "Ahsanullah University of Science and Technology",
      duration: "October 2014 - December 2018",
      location: "Bangladesh",
      details: "Developed a strong foundation in electrical systems, circuit design, and programming fundamentals."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue font-heading">Education</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey has equipped me with both theoretical knowledge and practical skills
            in electrical engineering, communication technology, and artificial intelligence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <EducationItem
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              duration={edu.duration}
              location={edu.location}
              details={edu.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
