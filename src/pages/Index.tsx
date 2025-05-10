
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div className="bg-white">
        <About />
      </div>
      <div className="bg-gray-50">
        <Education />
      </div>
      <div className="bg-white">
        <Experience />
      </div>
      <div className="bg-gray-50">
        <Achievements />
      </div>
      <div className="bg-white">
        <Projects />
      </div>
      <div className="bg-gray-50">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
