
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, School } from "lucide-react";

interface CommunityItemProps {
  role: string;
  organization: string;
  period: string;
  description: string;
  icon: "users" | "book" | "school";
  achievement?: string;
}

const CommunityItem = ({ role, organization, period, description, icon, achievement }: CommunityItemProps) => (
  <Card className="hover:shadow-lg transition-all border-l-4 border-l-portfolio-accent">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="bg-portfolio-accent/10 rounded-full p-3 mt-1">
          {icon === "users" ? (
            <Users className="h-6 w-6 text-portfolio-accent" />
          ) : icon === "book" ? (
            <BookOpen className="h-6 w-6 text-portfolio-accent" />
          ) : (
            <School className="h-6 w-6 text-portfolio-accent" />
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{role}</h3>
          <h4 className="font-medium text-portfolio-blue mt-1">{organization}</h4>
          <p className="text-gray-500 mt-1">{period}</p>
          <p className="text-gray-600 mt-3">{description}</p>
          {achievement && (
            <div className="mt-3 bg-green-50 border-l-4 border-green-400 p-3">
              <p className="text-green-800 font-medium">{achievement}</p>
            </div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Community = () => {
  const communityData = [
    {
      role: "Organizer and Volunteer",
      organization: "Bishwo Shahitto Kendro (World-Literature Centre)",
      period: "April 2012 - July 2020",
      description: "Promoted reading habits and progressive ideas in Bangladesh through community engagement.",
      icon: "book" as const
    },
    {
      role: "General Member",
      organization: "World Organization of the Scout Movement (WOSM)",
      period: "January 2019 - December 2020",
      description: "Active participation as a Rover Scout, contributing to youth development and community service.",
      icon: "users" as const
    },
    {
      role: "General Secretary",
      organization: "Student Community in Bremen, Germany",
      period: "January 2022 - Present",
      description: "Actively worked for the student community, organizing events, and fostering student engagement.",
      icon: "school" as const,
      achievement: "Received the DAAD Scholarship in January 2025 for outstanding contribution to the student community."
    }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue font-heading">Community Involvement</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My engagement with various communities reflects my commitment to social responsibility,
            leadership development, and positive impact beyond my professional work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {communityData.map((item, index) => (
            <CommunityItem
              key={index}
              role={item.role}
              organization={item.organization}
              period={item.period}
              description={item.description}
              icon={item.icon}
              achievement={item.achievement}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
