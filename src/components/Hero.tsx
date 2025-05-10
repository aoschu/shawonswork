
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <h2 className="text-xl text-portfolio-accent font-medium">Hi there, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-blue font-heading">
              Shawon Kumar <br /> Mondal
            </h1>
            <div className="h-1 w-24 bg-portfolio-accent"></div>
            <h3 className="text-2xl md:text-3xl text-portfolio-gray">
              AI Engineer & Data Scientist
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl">
              I specialize in developing AI-driven solutions to optimize workflows and
              deliver actionable insights through machine learning, computer vision, and natural language processing.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-portfolio-blue hover:bg-portfolio-lightBlue text-white px-8 py-6 rounded"
                size="lg"
              >
                View Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white px-8 py-6 rounded bg-transparent"
                size="lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&q=80"
                  alt="Shawon Kumar Mondal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-portfolio-blue text-white p-4 rounded-lg shadow-lg">
                <p className="font-medium">5+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
