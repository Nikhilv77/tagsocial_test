/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import secondSectionImage1 from '../assets/Images/tgs-header-1.png'
import secondSectionImage2 from '../assets/Images/tgs-header.png'
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
`;

const V1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 2;
  user-select: none;
`;

const V2 = styled.img`
  position: absolute;
  top: -60%;
  left: -20%;
  height: 52vh;
  width: 22%;
  object-fit: contain;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  height: 1auto;
  user-select: none;
  z-index: 1;

  @media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`;

const TitleContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  & > *:nth-child(3) {
    margin-left: 12rem;
  }

  @media screen and (max-width: 48em) {
    top: 60%;
    width: 80%;
  }
  @media screen and (max-width: 40em) {
    width: 80%;
   
  }
  @media screen and (max-width: 30em) {
    top: 80%;
    right: 20%;
    width: 80%;
  }
`;

const Title = styled.h1`
  font-size: 4em;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: 'Times Roman';
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));


  @media screen and (max-width: 70em) {
    font-size: 3em;
  }
  @media screen and (max-width: 48em) {
    font-size: 1.8em;
  }
`;
const MarqueeH1 = styled.h1`
font-family: Hauora, monospace;
color: #fff;
font-size: 4.3rem;
text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);

@media only screen and (max-width: 700px) {
  font-size: 3rem;
}

`;

const CameraSection = () => {
  console.log("logged second");
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
  
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
  console.log("worked");
    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 6,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
    .timeline({
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 6,
      },
    })
    .to(video1Elem, { scale: 0.13, left: '50%', top: '45%', x: '-55%', y: '-47%',zIndex:1,rotation:10,opacity:0 }, "key1")
    .to(video2Elem, { left: '50%', top: '40%', x: '-50%', y: '-50%', scale: 1.3,zIndex:2,rotation:10 }, "key1");
  

    elements("h1").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: 2,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
    );

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <>
    <Section ref={sectionRef}>
      <V1 ref={videoRef1} src={secondSectionImage1}  />
      <V2 ref={videoRef2} src={secondSectionImage2}  />
      <TitleContainer ref={titleRef}>
        <Title>Give Some Life <br /> To Your Social <br /> Experience</Title>
      
      </TitleContainer>
    </Section>
       <div
    style={{ backgroundColor: '#181818', border: '2px solid #fff', borderRadius: '10px', padding: '10px' }}
     >
       <Marquee speed={400}>
         <MarqueeH1
          
           whileHover={{
             textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
        
           }}
         >
          Give Yourself A Good Time.
         </MarqueeH1>
         <MarqueeH1
        
           whileHover={{
             textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
        
           }}
         >
        Get TagSocial Now.
         </MarqueeH1>
      
       </Marquee>
     </div>
     </>
  );
};

export default CameraSection;























/*
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import v1 from "../assets/banner1.mp4";
import v2 from "../assets/banner2.mp4";
import ScrollTrigger from "gsap/ScrollTrigger";
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
`;

const V1 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;

const V2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: 1auto;

  z-index: 1;

  @media screen and (max-width: 30em) {
    width: 100%;
    right: 0;
    top: 10%;
  }
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;

  & > *:nth-child(2) {
    margin-left: 6rem;
  }
  & > *:nth-child(3) {
    margin-left: 12rem;
  }

  @media screen and (max-width: 48em) {
    top: 60%;
    right: 2rem;
  }
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  @media screen and (max-width: 30em) {
    top: 70%;
    right: 40%;
  }
`;

const Title = styled.h1`
  font-size: 5em;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: 'Times Roman';


  @media screen and (max-width: 70em) {
    font-size: 3em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2em;
  }
`;

const CameraSection = () => {
  console.log("logged second");
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
  
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
  console.log("worked");
    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `bottom+=500 bottom`,
          scrub: 1,
        },
      })
      .to(video1Elem, { scale: 0.3 },"key1")
      .to(video2Elem, { scale: 0.6 },"key1");

    elements("h1").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: 1,
            // markers: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      )
    );

    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <V1 ref={videoRef1} src={v1} type="video/mp4" autoPlay muted loop />
      <V2 ref={videoRef2} src={v2} type="video/mp4" autoPlay muted loop />
      <TitleContainer ref={titleRef}>
        <Title>Share Awesome Memories on</Title>
        <Title>TagSocial</Title>
      
      </TitleContainer>
    </Section>
  );
};

export default CameraSection;*/