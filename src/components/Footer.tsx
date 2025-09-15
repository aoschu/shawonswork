
import React from "react";
import { FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-heading">Shawon Kumar Mondal</h2>
            <p className="mt-2">Scientific Researcher — R&D</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-portfolio-lightBlue transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-portfolio-lightBlue transition-colors">About</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-portfolio-lightBlue transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-portfolio-lightBlue transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:shawon.eee.edu@gmail.com" className="hover:text-portfolio-lightBlue transition-colors">
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-portfolio-lightBlue transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-portfolio-lightBlue transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="/ShawonKumarMondal-CV.pdf" download className="hover:text-portfolio-lightBlue transition-colors flex items-center">
                    <FileText className="mr-2 h-4 w-4" /> Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-6 text-center">
          <p>&copy; {currentYear} Shawon Kumar Mondal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
