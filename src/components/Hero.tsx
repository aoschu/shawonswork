
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
    <section id="home" className="relative min-h-screen flex items-center py-20 bg-portfolio-blue overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-yellow-300/30 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-yellow-300/20 blur-xl"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full border-2 border-white/20"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border-2 border-white/20"></div>
      
      {/* Squiggly lines */}
      <svg className="absolute top-20 right-1/3" width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40C20 20 30 60 40 40C50 20 60 60 70 40C80 20 90 60 100 40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      
      <svg className="absolute bottom-20 left-1/3" width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40C20 20 30 60 40 40C50 20 60 60 70 40C80 20 90 60 100 40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round"/>
      </svg>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8 text-white">
            <h2 className="text-xl text-yellow-300 font-medium">Hi there, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
              Shawon Kumar <br /> Mondal
            </h1>
            <div className="h-1 w-24 bg-yellow-300"></div>
            <h3 className="text-2xl md:text-3xl">
              AI Engineer, Data Scientist & Certified Leader
            </h3>
            <p className="text-lg text-white/80 max-w-2xl">
              I specialize in developing AI-driven solutions to optimize workflows and
              deliver actionable insights through machine learning, computer vision, and natural language processing.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-yellow-400 hover:bg-yellow-500 text-portfolio-blue font-semibold px-8 py-6 rounded-full"
                size="lg"
              >
                View Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-full"
                size="lg"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-400 rounded-full"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1596075780750-81249df16d19?auto=format&fit=crop&q=80"
                  alt="Shawon Kumar Mondal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-portfolio-blue/90 text-white p-4 rounded-lg shadow-lg border border-portfolio-blue/50 z-20">
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
