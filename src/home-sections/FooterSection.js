import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

import Logo from "../assets/Images/Logo.png";


const Section = styled.section`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  background-color: #181818;
  color: white;

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 8vw;
    height: auto;
    filter: brightness(0) invert(1) grayscale(1);
 user-select: none;
  }

  h3 {
    font-family: 'Times New Roman', Times, serif;
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    font-family: 'Times New Roman', Times, serif;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};
  font-family: 'Times New Roman', Times, serif;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;

  }

  @media (max-width: 64em) {
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  useEffect(()=>{
    (
      async()=>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section>
      <LogoContainer>
        <img
          width="300"
          height="300"
          src={Logo}
          alt="Wibe"
          // data-scroll
          // data-scroll-speed="2"
        />
        <h3
          // data-scroll
          // data-scroll-speed="-1"
        >
          TagSocial
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            Home
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            Features
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#shop")}>
            FAQs
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".new-arrival")}>
            Privacy Policy
          </li>
         
        </ul>
        <Bottom>
        <span style={{display:'flex', alignItems:'center', justifyContent:"center", gap:'0.2rem'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="126.445 2.281 589 589" id="facebook"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle><path fill="#fff" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 13333.33 13333.33" id="instagram-logo"><defs><linearGradient id="a" x1="9425.49" x2="3907.84" y1="1689.61" y2="11643.72" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4845a2"></stop><stop offset=".278" stop-color="#a844a1"></stop><stop offset=".302" stop-color="#a844a1"></stop><stop offset=".38" stop-color="#a844a1"></stop><stop offset=".6" stop-color="#d7233e"></stop><stop offset=".6" stop-color="#d7233e"></stop><stop offset=".871" stop-color="#f8a325"></stop><stop offset="1" stop-color="#f8dd25"></stop></linearGradient></defs><rect width="13333.33" height="13333.33" fill="none"></rect><path fill="url(#a)" d="M4365.91 2471.84l4601.52 0c1029.13,0 1869.24,842.02 1869.24,1869.25l0 4649.24c0,1029.14 -840.11,1871.15 -1869.24,1871.15l-4601.52 0c-1027.22,0 -1869.24,-842.02 -1869.24,-1871.15l0 -4649.24c0,-1027.23 842.02,-1869.25 1869.24,-1869.25z"></path><path fill="#fff" d="M8196.04 3877.12l-3058.76 0c-683.54,0 -1242.98,559.44 -1242.98,1242.98l0 3091.22c0,683.55 559.43,1242.98 1242.98,1242.98l3058.76 0c683.55,0 1242.98,-559.44 1242.98,-1242.98l0 -3091.22c0,-683.55 -559.44,-1242.98 -1242.98,-1242.98zm729.37 4047.8l0 0c0,555.62 -456.33,1011.95 -1011.95,1011.95l-2491.69 0c-557.53,0 -1011.95,-456.33 -1011.95,-1011.95l0 -2516.51c0,-557.53 454.42,-1011.95 1011.95,-1011.95l2491.69 0c555.62,0 1011.95,454.42 1011.95,1011.95l0 2516.51z"></path><path fill="#fff" fill-rule="nonzero" d="M6666.67 5290.03c-758.01,0 -1374.73,618.63 -1374.73,1376.63 0,758.01 616.72,1374.73 1374.73,1374.73 758.01,0 1376.63,-616.72 1376.63,-1374.73 0,-758.01 -618.62,-1376.63 -1376.63,-1376.63zm0 2287.39l0 0c-502.16,0 -910.76,-408.6 -910.76,-910.76 0,-502.16 408.6,-910.75 910.76,-910.75 502.15,0 910.75,408.59 910.75,910.75 0,502.16 -408.6,910.76 -910.75,910.76z"></path><path fill="#fff" d="M9436.86 3868.69c156.57,0 282.58,-126.02 282.58,-280.67 0,-156.56 -126.02,-282.58 -282.58,-282.58 -154.66,0 -280.67,126.02 -280.67,282.58 0,154.66 126.02,280.67 280.67,280.67z"></path></svg>
          </span>
        <span
        style={{display:'flex',alignItems:'center', gap:'8px'}}
          >
        MADE IN INDIA.
          </span>
          
          <span
         
        
          >
            TagSocial&copy; 2021.<br/>
            
             All Rights Reserved.
          </span>
          
            
          
    
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
