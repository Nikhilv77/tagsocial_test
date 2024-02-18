import React from "react";
import  PrivacyCard  from "../components/privacy-card/PrivacyCard";
import { FAQFeaturesPrivacyNav } from "../components/Faq,Features,PrivacyNavbar";
import { MantineProvider,createTheme } from '@mantine/core'
import  FooterCard  from "../components/footer-card/FooterCard";
import { ContactUs } from "../components/contactus/ContactUs";
import { useEffect } from "react";


const PrivacyPage = () => {
  useEffect(()=>{
    (
      async()=>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])
  const theme = createTheme({
 
  });
  
  return <div style={{backgroundColor:'#181818'}}>
  <FAQFeaturesPrivacyNav/>
  <MantineProvider theme={theme}>
  <PrivacyCard/>
  <ContactUs/>
  </MantineProvider>
  <FooterCard/>
  </div>
};

export default PrivacyPage;