import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-40 transition-all duration-100 border-b-white border-b-2">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-white tracking-wide">
              KalkiNI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div
              className="
              ml-10 flex items-center space-x-12
              min-[767px]:max-[972px]:space-x-5
            "
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-white hover:font-semibold py-2 px-3 text-base font-medium transition-all duration-100 hover:scale-105"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="text-gray-300 hover:text-white hover:font-semibold py-2 px-3 text-base font-medium transition-all duration-100 hover:scale-105"
              >
                News
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-white hover:font-semibold py-2 px-3 text-base font-medium transition-all duration-100 hover:scale-105"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("blogs")}
                className="text-gray-300 hover:text-white hover:font-semibold py-2 px-3 text-base font-medium transition-all duration-100 hover:scale-105"
              >
                Blogs
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className="text-gray-300 hover:text-white hover:font-semibold py-2 px-3 text-base font-medium transition-all duration-100 hover:scale-105 min-[767px]:max-[972px]:whitespace-nowrap"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white hover:font-semibold py-2 px-3 text-base font-medium transition-all duration-100 hover:scale-105"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 border-t border-gray-700">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 text-sm font-medium w-full text-left transition-all duration-300 rounded-lg"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 text-sm font-medium w-full text-left transition-all duration-300 rounded-lg"
              >
                News
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 text-sm font-medium w-full text-left transition-all duration-300 rounded-lg"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("blogs")}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 text-sm font-medium w-full text-left transition-all duration-300 rounded-lg"
              >
                Blogs
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 text-sm font-medium w-full text-left transition-all duration-300 rounded-lg"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 text-sm font-medium w-full text-left transition-all duration-300 rounded-lg"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
