import React from "react";
import Home from "../home-sections/Home";
import SecondSection from "../home-sections/SecondSection";
import ThirdSection from "../home-sections/ThirdSection";
import FourthSection from "../home-sections/FourthSection";
import FifthSection from "../home-sections/FifthSection";
import SixthSection from "../home-sections/SixthSection";
import Footer from "../home-sections/FooterSection";
import SeventhSection from "../home-sections/SeventhSection";


const HomePage = () => {
  return <div>
     <Home />
   <SecondSection />
   <ThirdSection />
   <SeventhSection/>
   <FourthSection />
  <SixthSection/>
  <FifthSection />
  <Footer/>
  </div>

};

export default HomePage;
