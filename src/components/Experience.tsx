
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Certificates from "@/components/Certificates";
interface ExperienceItemProps {
  position: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const ExperienceItem = ({ position, company, duration, location, responsibilities }: ExperienceItemProps) => (
  <Card className="hover:shadow-lg transition-all border-l-4 border-l-portfolio-accent">
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold">{position}</h3>
      <h4 className="font-medium text-portfolio-blue mt-1">{company}</h4>
      <div className="flex justify-between text-gray-500 mt-1 mb-3">
        <span>{duration}</span>
        <span>{location}</span>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2 mt-2"></span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Experience = () => {
  const experienceData = [
    {
      position: "AI and Data Analyst Intern",
      company: "MEKOS GmbH",
      duration: "July 2024 - August 2024",
      location: "Bremen, Germany",
      responsibilities: [
        "Analyzed transaction volumes and station locations using dBeaver SQL and OpenStreetMap.",
        "Created data visualization to identify patterns and trends in customer behavior.",
        "Delivered strategic expansion reports graded 1.0 (6 ECTS).",
        "Implemented Python scripts for data preprocessing and analysis."
      ]
    },
    {
      position: "Student Assistant in AI",
      company: "MERENTIS GmbH",
      duration: "July 2022 – December 2023",
      location: "Bremen, Germany",
      responsibilities: [
        "Developed Rasa-based chatbot for customer interactions and support.",
        "Created document processing pipelines using LayoutLM and Donut for automated data extraction.",
        "Scraped vegan product trends using BeautifulSoup, Selenium, and Scrapy.",
        "Collaborated with cross-functional teams to integrate AI solutions with existing systems.",
        "Optimized algorithms for better performance and accuracy."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue font-heading">Work Experience</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional experience has allowed me to apply my AI and data science expertise to
            solve real-world problems and deliver impactful solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8 space-y-6">
            {experienceData.map((exp, index) => (
              <ExperienceItem
                key={index}
                position={exp.position}
                company={exp.company}
                duration={exp.duration}
                location={exp.location}
                responsibilities={exp.responsibilities}
              />
            ))}
          </div>
          <div className="md:col-span-4">
            <Certificates title="Work Certificates" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
