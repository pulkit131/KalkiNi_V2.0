import React from "react";
import { Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="flex flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Support Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Hire Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    License (EULA)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Brand Guidelines
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 md:flex-2 md:ml-12">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">KalkiNI</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Empowering <span className="font-semibold">smarter</span>{" "}
                <span className="font-semibold">surveillance</span> with
                cutting-edge AI technology. Our AI-driven solutions ensure
                security, efficiency, and reliability. Stay connected for the
                latest in AI surveillance innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 md:translate-y-4">
              © 2024 KalkiNI™ is a registered trademark. All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4 md:justify-end items-center ">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              En
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Es
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
