import React from "react";
import styled from "styled-components";
import BackgroundVideo from '../assets/header.mp4'
import {motion} from 'framer-motion'
import HeroImage from '../assets/Images/hero-image.png'
import ctaImage1 from '../assets/Images/google-play.png'
import ctaImage2 from '../assets/Images/app-store.png'
import { VideoComp } from "./videoComp";
import Marquee from "react-fast-marquee";

  const Title = styled(motion.div)`
  overflow: hidden;
height: 0;
  z-index: 5;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props=>props.theme.text}; 
  div{
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
  }
  h1{
    font-family: "Times Roman";
    text-shadow: 1px 1px 1px ${props=>props.theme.body};
    font-size: clamp(3em, 5.3em, 5.3em);

    user-select: none;
 @media (max-width:768px){
  font-size: 3.5em;
 }
  }

  h2{
    font-family: "Times Roman";
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props=>props.theme.body};
    font-size: clamp(1.3em, 2em, 2em);
    text-transform: capitalize;
    user-select: none;
    text-align:center;
    width:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
padding: 0.5rem;
@media (max-width:768px){
  font-size: 1.5em;
 }
  }
  .cta-images{
    display: flex;
    gap: 1rem;
    padding : 2em;
    @media (max-width: 768px) {
        flex-direction: column; /* Switch to column for screens smaller than 768px */
      }
  }
  .cta-image{
   max-width: 14rem;
    max-height: 5rem;
    user-select: none;
    cursor: pointer;
  }

  `
  const MarqueeH1 = styled(motion.h1)`
  font-family: Hauora, monospace;
  color: #fff;
  font-size: 4.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  @media only screen and (max-width: 700px) {
    font-size: 3rem;
  }

`;

const HeaderVideo = () => {
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      
    },
    visible: {
      opacity: 1
    },
    transition:{
      delay:6,
      duration:2
    }
    
  }

  return(
    <>
  <Title
  initial={{
    height: 0,
    opacity: 0, 
  }}
  animate={{
    opacity: 1,
    height: "30rem", 
  }}
  transition={{
    delay: 5,
    duration: 1,
  }}
>
       <motion.div
       > 
        <motion.h1
        >TagSocial</motion.h1>

       </motion.div>
       
       <motion.h2 >Join a vibrant community where creativity knows no bounds. 
         </motion.h2>
       <motion.div  className="cta-images">
        <img className="cta-image" src={ctaImage1} alt="" />
        <img className="cta-image" src={ctaImage2} alt="" />
       </motion.div>
      </Title>
     
    
     <Marquee  speed={400}>
     <MarqueeH1 whileHover={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}>
  Discover.
</MarqueeH1>
<MarqueeH1 whileHover={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}>
  Connect.
</MarqueeH1>
<MarqueeH1 whileHover={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}>
  Share.
</MarqueeH1>
</Marquee>

      <VideoComp/>
   
</>
  );
};

export default HeaderVideo;









/*import React from "react";
import styled from "styled-components";
import BackgroundVideo from '../assets/header.mp4'
import {motion} from 'framer-motion'
import HeroImage from '../assets/Images/hero-image.png'
import ctaImage1 from '../assets/Images/google-play.png'
import ctaImage2 from '../assets/Images/app-store.png'
const VideoContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  video{
    height: 100vh;
    width: 100%;
    object-fit: cover;
    filter: grayscale(30%) blur(5px);
  }
  `
  const DarkOverlay = styled.div`
 position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
z-index: 1;
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.2)`};
  `

  const Title = styled(motion.div)`
  position: absolute;
bottom: 3em;
top: 3em;
  z-index: 5;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props=>props.theme.text}; 
  div{
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
  }
  h1{
    font-family: Kaushan Script;
    text-shadow: 1px 1px 1px ${props=>props.theme.body};
    font-size: clamp(3em, 5.3em, 5.3em);

    user-select: none;
 @media (max-width:768px){
  font-size: 3.5em;
 }
  }

  h2{
    font-family: Sirin Stencil;
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props=>props.theme.body};
    font-size: clamp(1.3em, 2em, 2em);
    text-transform: capitalize;
    user-select: none;
    position: relative;
    text-align:center;
    width:80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
padding: 0.5rem;
@media (max-width:768px){
  font-size: 1.5em;
 }
  }
  .cta-images{
    display: flex;
    gap: 1rem;
    padding : 2em;
    @media (max-width: 768px) {
        flex-direction: column; 
      }
    }
    .cta-image{
     max-width: 14rem;
      max-height: 5rem;
      user-select: none;
      cursor: pointer;
    }
  
    `
  
  const HeaderVideo = () => {
    
  
    const brandVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
  
        transition: {
          delayChildren: 2,
          staggerChildren:0.3
        }
      }
    }
    const itemVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1
      }
    }
    return(
      <VideoContainer>
        
        <DarkOverlay/>
        <Title variants = {brandVariants} initial = 'hidden' animate = "visible">
         <div> 
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>T</motion.h1>
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>a</motion.h1>
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>g</motion.h1>
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>S</motion.h1>
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>o</motion.h1>
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>c</motion.h1>
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>i</motion.h1>
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>a</motion.h1>
          <motion.h1 variants={itemVariants} data-scroll  data-scroll-speed = '0.2'>l</motion.h1>
         </div>
         
         <motion.h2 variants={itemVariants} data-scroll data-scroll-speed = '0.3'>Let's cookup some good memories. <br />Join a vibrant community where creativity knows no bounds. 
         </motion.h2>
         <motion.div variants={itemVariants} data-scroll  data-scroll-speed = '0.6' className="cta-images">
          <img className="cta-image" src={ctaImage1} alt="" />
          <img className="cta-image" src={ctaImage2} alt="" />
         </motion.div>
        </Title>
        <video src={BackgroundVideo} type = "video/mp4"  autoPlay loop muted></video>
      </VideoContainer>
    );
  };
  
  export default HeaderVideo;
   */