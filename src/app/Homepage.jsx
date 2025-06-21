import React from "react";
import Landing from "../pages/homepage/Landing";
import Navbar from "../components/Navbar";
import Carousel from "../pages/homepage/Carousel";
import FAQ from "../pages/homepage/FAQ";
import Founders from "../pages/homepage/Founders";
import Contact from "../pages/homepage/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Landing />
      <Carousel />
      <FAQ />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
