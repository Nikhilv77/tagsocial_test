import React from "react";
import {FAQFeaturesPrivacyNav} from '../components/Faq,Features,PrivacyNavbar'
import Footer from "../home-sections/FooterSection";
import FirstSection from "../features-sections/FirstSection";
import SecondSection from "../features-sections/SecondSection";
import HeroSection from "../features-sections/HeroSection";
import ThirdSection from "../features-sections/ThirdSection";
import FourthSection from "../features-sections/FourthSection";
import FifthSection from "../features-sections/FifthSection";


const FeaturesPage = () => {
  return <div  style={{backgroundColor:'#181818'}}>
    <FAQFeaturesPrivacyNav/>
    <HeroSection/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <Footer/>
  </div>;
};

export default FeaturesPage;
