
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Users, Trophy } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  details: string;
  activities?: Array<{
    title: string;
    icon: "book" | "code" | "users" | "trophy";
    items: string[];
  }>;
}

const EducationItem = ({ degree, institution, duration, location, details, activities }: EducationItemProps) => (
  <Card className="hover:shadow-lg transition-all border-l-4 border-l-portfolio-blue">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold">{degree}</h3>
      <h4 className="font-medium text-portfolio-blue mt-1">{institution}</h4>
      <div className="flex justify-between text-gray-500 mt-1 mb-3">
        <span>{duration}</span>
        <span>{location}</span>
      </div>
      <p className="text-gray-600 mb-4">{details}</p>
      
      {activities && activities.length > 0 && (
        <div className="mt-4 space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="border-t pt-3">
              <div className="flex items-center mb-2">
                {activity.icon === "book" && <BookOpen className="h-5 w-5 text-portfolio-blue mr-2" />}
                {activity.icon === "code" && <Code className="h-5 w-5 text-portfolio-blue mr-2" />}
                {activity.icon === "users" && <Users className="h-5 w-5 text-portfolio-blue mr-2" />}
                {activity.icon === "trophy" && <Trophy className="h-5 w-5 text-portfolio-blue mr-2" />}
                <h5 className="font-medium text-lg text-portfolio-blue">{activity.title}</h5>
              </div>
              <ul className="space-y-1 ml-7">
                {activity.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mr-2 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
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
      details: "Developed a strong foundation in electrical systems, circuit design, and programming fundamentals.",
      activities: [
        {
          title: "Activities and Societies",
          icon: "users",
          items: [
            "Robotics Club: Champion and 2nd Runner-Up at LFR (Line Following Robot) competitions (01/2016 - 09/2017).",
            "Cultural Club: Participated in cultural events and activities.",
            "Cricket Club: Active member and participant in sports events."
          ]
        },
        {
          title: "Skills Acquired",
          icon: "code",
          items: [
            "Programming: Python, Arduino IDE.",
            "Engineering: Electrical Engineering, Electronic Engineering, Antenna Design.",
            "Tools: ANSYS HFSS, Arduino IDE.",
            "Soft Skills: Knowledge sharing, leadership, teamwork.",
            "Languages: English."
          ]
        }
      ]
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
              activities={edu.activities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
