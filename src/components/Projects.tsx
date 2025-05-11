
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectCardProps {
  title: string;
  description: string;
  duration: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
}

const ProjectCard = ({
  title,
  description,
  duration,
  technologies,
  image,
  demoLink,
  repoLink,
}: ProjectCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-all group">
    <div className="relative h-56 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-portfolio-blue bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="flex space-x-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-portfolio-blue px-4 py-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
            >
              Live Demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-portfolio-blue px-4 py-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
    <CardContent className="p-6">
      <div className="flex justify-between mb-2">
        <h3 className="text-xl font-semibold text-portfolio-blue">{title}</h3>
        <span className="text-sm text-gray-500">{duration}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-portfolio-lightGray text-portfolio-gray px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  const aiProjectsData = [
    {
      title: "Low-Light Image Enhancement using MIRnet",
      description:
        "Developed a CNN-based MIRnet model for enhancing low-light image quality with improved color accuracy and reduced noise.",
      duration: "March 2023 – December 2024",
      technologies: ["CNN", "MIRnet", "Python", "TensorFlow", "Image Processing"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?fit=crop&w=800&h=500&q=80",
      repoLink: "#",
    },
    {
      title: "Data Matrix Information Extraction with YOLOv8",
      description:
        "Implemented YOLOv8-based system for multi-page document data extraction with high accuracy and computational efficiency.",
      duration: "August 2022 - January 2023",
      technologies: ["YOLOv8", "Computer Vision", "Python", "OCR", "Document Processing"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?fit=crop&w=800&h=500&q=80",
      repoLink: "#",
    },
    {
      title: "Rasa-based Customer Support Chatbot",
      description:
        "Developed an intelligent chatbot using Rasa framework for automating customer support inquiries with natural language understanding.",
      duration: "July 2022 - December 2022",
      technologies: ["Rasa", "NLP", "Python", "Neural Networks", "Intent Classification"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?fit=crop&w=800&h=500&q=80",
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Web Scraping System for Product Trends",
      description:
        "Created an automated scraping system to analyze vegan product trends and market insights using Python tools.",
      duration: "September 2022 - November 2022",
      technologies: ["Python", "BeautifulSoup", "Selenium", "Scrapy", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?fit=crop&w=800&h=500&q=80",
      repoLink: "#",
    },
  ];

  const arduinoProjectsData = [
    {
      title: "Line Following Robot",
      description:
        "Autonomous robot capable of following predefined paths with precision control systems.",
      duration: "January 2016 - May 2016",
      technologies: ["Arduino", "Sensors", "C++", "Electronics", "Robotics"],
      image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?fit=crop&w=800&h=500&q=80",
      repoLink: "#",
    },
    {
      title: "Sun Tracker",
      description:
        "Automated system designed to align with the sun's position for maximum energy capture in solar applications.",
      duration: "June 2016 - September 2016",
      technologies: ["Arduino", "Servo Motors", "Light Sensors", "Solar Technology"],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?fit=crop&w=800&h=500&q=80",
      repoLink: "#",
    },
    {
      title: "Smart Home System",
      description:
        "Integrated automation solutions for home control and monitoring, including temperature, lighting, and security features.",
      duration: "October 2016 - February 2017",
      technologies: ["Arduino", "IoT", "Sensors", "Home Automation"],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?fit=crop&w=800&h=500&q=80",
      repoLink: "#",
    },
    {
      title: "Smart Traffic Light Control",
      description:
        "Adaptive traffic management system based on real-time inputs to optimize traffic flow and reduce congestion.",
      duration: "March 2017 - July 2017",
      technologies: ["Arduino", "Traffic Systems", "Sensors", "C++", "Microcontrollers"],
      image: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?fit=crop&w=800&h=500&q=80",
      repoLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue font-heading">Projects</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my featured projects that highlight my expertise in AI, machine learning, 
            computer vision, natural language processing, and embedded systems.
          </p>
        </div>

        <Tabs defaultValue="ai" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="ai">AI & ML Projects</TabsTrigger>
            <TabsTrigger value="arduino">Arduino Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiProjectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  duration={project.duration}
                  technologies={project.technologies}
                  image={project.image}
                  demoLink={project.demoLink}
                  repoLink={project.repoLink}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="arduino" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {arduinoProjectsData.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  duration={project.duration}
                  technologies={project.technologies}
                  image={project.image}
                  demoLink={project.demoLink}
                  repoLink={project.repoLink}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
