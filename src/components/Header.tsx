
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-portfolio-blue font-bold text-xl md:text-2xl font-heading">
          <a href="#home" className="flex items-center">
            SK<span className="text-portfolio-accent">.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "education", "experience", "achievements", "projects", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => navigateTo(item)}
                className="text-gray-700 hover:text-portfolio-accent font-medium capitalize transition-colors"
              >
                {item}
              </button>
            )
          )}
          <a 
            href="/ShawonKumarMondal-CV.pdf" 
            download 
            className="bg-portfolio-blue text-white px-4 py-2 rounded hover:bg-portfolio-lightBlue transition-colors"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg animate-fade-in">
          <nav className="flex flex-col p-4">
            {["home", "about", "education", "experience", "achievements", "projects", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item)}
                  className="text-gray-700 hover:text-portfolio-accent py-3 font-medium capitalize"
                >
                  {item}
                </button>
              )
            )}
            <a 
              href="/ShawonKumarMondal-CV.pdf" 
              download 
              className="bg-portfolio-blue text-white px-4 py-2 rounded hover:bg-portfolio-lightBlue transition-colors text-center mt-4"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
