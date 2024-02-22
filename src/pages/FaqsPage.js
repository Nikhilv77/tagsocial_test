import React from "react";
import { Faqs } from "../components/faqs/Faqs";
import { FAQFeaturesPrivacyNav } from "../components/Faq,Features,PrivacyNavbar";
import { MantineProvider,createTheme } from '@mantine/core'
import  FooterCard  from "../components/footer-card/FooterCard";
import { useEffect } from "react";

const FaqsPage = () => {
  const theme = createTheme({
 
  });
  // useEffect(()=>{
  //   (
  //     async()=>{
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default;
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // },[])
  
  return <div style={{backgroundColor:'#181818'}}>
  <FAQFeaturesPrivacyNav/>
  <MantineProvider theme={theme}>
  <Faqs/>
  </MantineProvider>
  <FooterCard/>
  </div>
};

export default FaqsPage;
