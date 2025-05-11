import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";

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
        isScrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`text-2xl md:text-3xl font-bold font-heading ${isScrolled ? 'text-portfolio-blue' : 'text-white'}`}>
          <a href="#home" className="flex items-center">
            SK<span className="text-yellow-400">.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["home", "about", "education", "experience", "achievements", "projects", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => navigateTo(item)}
                className={`${
                  isScrolled 
                    ? 'text-gray-700 hover:text-portfolio-blue' 
                    : 'text-white/90 hover:text-yellow-400'
                } font-medium capitalize transition-colors text-sm tracking-wide`}
              >
                {item}
              </button>
            )
          )}
          {/* Download CV Button */}
          <a 
            href="/lovable-uploads/Shawon_kumar_mondal_cv.pdf"
            download 
            className={`
              px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm flex items-center
              ${isScrolled
                ? 'bg-yellow-400 text-portfolio-blue hover:bg-yellow-500'
                : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
              }
            `}
          >
            <FileText className="mr-2 h-4 w-4" /> Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'} focus:outline-none`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm absolute w-full shadow-lg animate-fade-in">
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
            {/* Mobile Download CV Button */}
            <a 
              href="/lovable-uploads/Shawon_kumar_mondal_cv.pdf"
              download 
              className="bg-yellow-400 text-portfolio-blue px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors text-center mt-4 font-medium flex items-center justify-center"
            >
              <FileText className="mr-2 h-4 w-4" /> Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
