import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-yellow-300/30 blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 left-40 w-56 h-56 rounded-full bg-yellow-300/20 blur-xl"></div>
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full border-2 border-white/20 animate-[spin_25s_linear_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-28 h-28 rounded-full border-2 border-white/20 animate-[spin_30s_linear_infinite_reverse]"></div>
      
      {/* Small dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-1/3 grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
        </div>
        <div className="absolute right-20 bottom-1/3 grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
        </div>
      </div>
      
      {/* Squiggly lines */}
      <svg className="absolute top-20 right-1/3 animate-[bounce_15s_ease-in-out_infinite]" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40C20 20 30 60 40 40C50 20 60 60 70 40C80 20 90 60 100 40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      
      <svg className="absolute bottom-40 left-1/3 animate-[bounce_20s_ease-in-out_infinite_reverse]" width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 40C20 20 30 60 40 40C50 20 60 60 70 40C80 20 90 60 100 40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-8 text-white animate-fade-in">
            <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-yellow-300 font-medium">
              AI Engineer & Data Scientist
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight">
              Shawon Kumar <br /> <span className="text-yellow-300">Mondal</span>
            </h1>
            <div className="h-1 w-24 bg-yellow-300"></div>
            <h3 className="text-2xl md:text-3xl font-medium">
              Solving complex problems with AI
            </h3>
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              I specialize in developing AI-driven solutions to optimize workflows and
              deliver actionable insights through machine learning, computer vision, and natural language processing.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-6">
              <Button onClick={() => scrollToSection("projects")} className="bg-yellow-400 hover:bg-yellow-500 text-portfolio-blue font-semibold px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105" size="lg">
                View Portfolio
              </Button>
              <Button onClick={() => scrollToSection("contact")} className="bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-full border-2 border-white/70 transition-all duration-300 hover:border-white" size="lg">
                Contact Me <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="relative animate-[bounce_6s_ease-in-out_infinite]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 blur-lg opacity-70 scale-110"></div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-yellow-400 rounded-full"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white relative z-10">
                <img alt="Shawon Kumar Mondal" className="w-full h-full object-cover" src="/lovable-uploads/84fe97e0-dab1-4226-9a04-d7991ca52a1f.jpg" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-portfolio-blue p-4 rounded-lg shadow-lg z-20 backdrop-blur-sm">
                <p className="font-medium">3+ Years Experience</p>
              </div>
              
              {/* Tech circles */}
              <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                <span className="text-portfolio-blue font-bold">AI</span>
              </div>
              <div className="absolute -bottom-4 -left-8 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-10">
                <span className="text-portfolio-blue font-bold">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
