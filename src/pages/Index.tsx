
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="bg-transparent">
        <About />
      </div>
      <div className="bg-transparent">
        <Education />
      </div>
      <div className="bg-transparent">
        <Experience />
      </div>
      <div className="bg-transparent">
        <Achievements />
      </div>
      <div className="bg-transparent">
        <Community />
      </div>
      <div className="bg-transparent">
        <Projects />
      </div>
      <div className="bg-transparent">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
