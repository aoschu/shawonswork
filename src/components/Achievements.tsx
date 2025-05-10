
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star } from "lucide-react";

interface AchievementItemProps {
  title: string;
  organization: string;
  date: string;
  icon: "award" | "star";
}

const AchievementItem = ({ title, organization, date, icon }: AchievementItemProps) => (
  <Card className="hover:shadow-lg transition-all border-l-4 border-l-portfolio-lightBlue">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="bg-portfolio-blue/10 rounded-full p-3 mt-1">
          {icon === "award" ? (
            <Award className="h-6 w-6 text-portfolio-blue" />
          ) : (
            <Star className="h-6 w-6 text-portfolio-accent" />
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <h4 className="font-medium text-portfolio-blue mt-1">{organization}</h4>
          <p className="text-gray-500 mt-1">{date}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Achievements = () => {
  const achievementData = [
    {
      title: "JENESYS 2.0 Short-term Invitation Programme Certification",
      organization: "Japan International Cooperation Center",
      date: "December 9 - December 17, 2013",
      icon: "award" as const
    },
    {
      title: "Leadership Certification",
      organization: "Green Force Training Program",
      date: "2016",
      icon: "award" as const
    },
    {
      title: "Environmental Awareness Training Certification",
      organization: "Green Force",
      date: "2016",
      icon: "award" as const
    },
    {
      title: "2nd Runner-Up in Roborace Category",
      organization: "National Robotics Competition",
      date: "July 27, 2017",
      icon: "star" as const
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue font-heading">Achievements</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognitions, certifications and awards that showcase my leadership skills
            and technical excellence throughout my professional journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {achievementData.map((achievement, index) => (
            <AchievementItem
              key={index}
              title={achievement.title}
              organization={achievement.organization}
              date={achievement.date}
              icon={achievement.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
