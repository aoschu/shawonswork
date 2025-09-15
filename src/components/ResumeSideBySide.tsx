// src/components/ResumeSideBySide.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Users, Trophy } from "lucide-react";

/* ---------- Reusable bits ---------- */
const SectionHeader = ({ title, blurb }: { title: string; blurb: string }) => (
  <div className="mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue font-heading">{title}</h2>
    <div className="h-1 w-24 bg-portfolio-accent mt-4 mb-6"></div>
    <p className="text-gray-600 max-w-xl">{blurb}</p>
  </div>
);

/* ---------- Education ---------- */
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

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  duration,
  location,
  details,
  activities,
}) => (
  <Card className="hover:shadow-lg transition-all border-l-4 border-l-portfolio-blue w-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-portfolio-blue mb-2 leading-tight">{degree}</h3>
      <h4 className="font-semibold text-portfolio-accent text-lg mb-2">{institution}</h4>
      <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 mb-4 space-y-1 sm:space-y-0">
        <span className="font-medium">{duration}</span>
        <span className="italic">{location}</span>
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed">{details}</p>

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

const educationData: EducationItemProps[] = [
  {
    degree: "Master's in Communication and Information Technology",
    institution: "University of Bremen",
    duration: "May 2021 – August 2025",
    location: "Bremen, Germany",
    details:
      "Focus on machine learning for terrestrial and non-terrestrial networks, 5G, and 6G technologies.",
  },
  {
    degree: "Bachelor of Science in Electrical and Electronic Engineering",
    institution: "Ahsanullah University of Science and Technology",
    duration: "October 2014 - December 2018",
    location: "Bangladesh",
    details:
      "Developed a strong foundation in electrical systems, circuit design, and programming fundamentals.",
    activities: [
      {
        title: "Activities and Societies",
        icon: "users",
        items: [
          "Robotics Club: Champion and 2nd Runner-Up at LFR (Line Following Robot) competitions (01/2016 - 09/2017).",
          "Cultural Club: Participated in cultural events and activities.",
          "Cricket Club: Active member and participant in sports events.",
        ],
      },
      {
        title: "Skills Acquired",
        icon: "code",
        items: [
          "Programming: Python, Arduino IDE.",
          "Engineering: Electrical Engineering, Electronic Engineering, Antenna Design.",
          "Tools: ANSYS HFSS, Arduino IDE.",
          "Soft Skills: Knowledge sharing, leadership, teamwork.",
          "Languages: English.",
        ],
      },
    ],
  },
];

/* ---------- Experience ---------- */
interface ExperienceItemProps {
  position: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  position,
  company,
  duration,
  location,
  responsibilities,
}) => (
  <Card className="hover:shadow-lg transition-all border-l-4 border-l-portfolio-accent w-full">
    <CardContent className="p-6">
      <h3 className="text-xl font-bold text-portfolio-blue mb-2 leading-tight">{position}</h3>
      <h4 className="font-semibold text-portfolio-accent text-lg mb-2">{company}</h4>
      <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 mb-4 space-y-1 sm:space-y-0">
        <span className="font-medium">{duration}</span>
        <span className="italic">{location}</span>
      </div>
      <ul className="space-y-3">
        {responsibilities.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const experienceData: ExperienceItemProps[] = [
  {
    position: "Scientific Researcher — R&D (Full‑time)",
    company: "Aerospace Data Security GmbH",
    duration: "Sep 2025 – Present",
    location: "Germany",
    responsibilities: [
      "Research and development on Galileo satellite navigation systems within the R&D group.",
      "Perform analysis, simulation, and documentation to support secure and reliable navigation.",
      "Collaborate with cross‑functional teams on requirements, testing, and integration.",
    ],
  },
  {
    position: "AI and Data Analyst Intern",
    company: "MEKOS GmbH",
    duration: "July 2024 - August 2024",
    location: "Bremen, Germany",
    responsibilities: [
      "Analyzed transaction volumes and station locations using dBeaver SQL and OpenStreetMap.",
      "Created data visualization to identify patterns and trends in customer behavior.",
      "Delivered strategic expansion reports graded 1.0 (6 ECTS).",
      "Implemented Python scripts for data preprocessing and analysis.",
    ],
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
      "Optimized algorithms for better performance and accuracy.",
    ],
  },
];

/* ---------- Two-column composition ---------- */
const ResumeSideBySide: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left column — Education */}
          <div>
            <SectionHeader
              title="Education"
              blurb="My academic journey has equipped me with both theoretical knowledge and practical skills in electrical engineering, communication technology, and artificial intelligence."
            />
            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <EducationItem key={idx} {...edu} />
              ))}
            </div>
          </div>

          {/* Right column — Work Experience */}
          <div>
            <SectionHeader
              title="Work Experience"
              blurb="My professional experience has allowed me to apply my AI and data science expertise to solve real-world problems and deliver impactful solutions."
            />
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <ExperienceItem key={idx} {...exp} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSideBySide;
