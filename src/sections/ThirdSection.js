/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import v1 from "../assets/banner1.mp4";
import v2 from "../assets/banner2.mp4";
import ScrollTrigger from "gsap/ScrollTrigger";
import thirdSectionImg1 from '../assets/Images/thirdsection-1.png'
import thirdSectionImg2 from '../assets/Images/thirdsection-2.png'
import Marquee from "react-fast-marquee";
import thirdSectionImg3 from '../assets/Images/thirdsection-3.png'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #181818;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const V1 = styled.img`
  position: absolute;
  top: -80%; /* initial position */
  width: 60%;
  height: 79vh;
  object-fit: contain;
  object-position: bottom;
  z-index: 1;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
`;


const V2 = styled.img`
  position: absolute;
  right: -50%;
  width: 60%;
  height: 79vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  z-index: 2;
`;
const V3 = styled.img`
 position: absolute;
  right: -50%;
  width: 40%;
  height: 40vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  z-index: 2;
`

const TitleContainer = styled.div`
  width: 50%;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  & > *:nth-child(2) {
    margin-left: 0rem;
  }
  & > *:nth-child(3) {
    margin-left:3rem;
  }

  @media screen and (max-width: 48em) {
    top: 0;
    right: 2rem;
  }
  @media screen and (max-width: 40em) {
    right: 5rem;
  }
  @media screen and (max-width: 30em) {
    top: 0;
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
 padding-top: 5rem;
 filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  @media screen and (max-width: 70em) {
    font-size: 3em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2em;
  }
`;
const Text = styled.p`
  font-size: 2em;
  padding: 2rem;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: 'Times Roman';
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 70em) {
    font-size: 1.3em;
  }
  @media screen and (max-width: 48em) {
    font-size: 1em;
  }
`;
const ThirdSection = () => {
  console.log("logged second");
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
  
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
    const video3Elem = videoRef3.current;
  console.log("worked");
    // pin the section
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom+=500 bottom`,
        scrub: 7,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: `bottom+=700 bottom`,
          scrub: 7,
        },
      })
      .to(video1Elem, { top: "5%", right: "10%", scale: 1 },"key1")
      .to(video2Elem, { top: "5%", right: "-5%", scale: 1 },"key1").to(video3Elem, { right: "2%", bottom : '5%', scale: 1 },"key1")
      ;

    elements("h1,p").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: 2,
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
  //   elements("p").forEach((el) =>
  //   t2.fromTo(
  //     el,
  //     {
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top top",
  //         end: `bottom bottom`,
  //         scrub: 1,
  //       },
  //       x: 100,
  //       opacity: 0,
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //     }
  //   )
  // );
    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <>
    <Section ref={sectionRef}>
       <TitleContainer ref={titleRef}>
        <Title>Transforming Social Connections
</Title>
        <Text>Embark on a journey of discovery, <br />as Tags Social connects you with like-minded individuals at new locations. </Text>
      
      </TitleContainer>
      <V1 ref={videoRef1} src={thirdSectionImg1}  />
      <V2 ref={videoRef2} src={thirdSectionImg2}   />
      {/* <V3 ref = {videoRef3} src={thirdSectionImg3}/> */}
      
    </Section>
   
    <div
    style={{backgroundColor:'#181818'}}
     >
       <Marquee speed={400}
       direction="left"
       >
         <h1
           style={{
             fontFamily: "Hauora, monospace",
             color: "#fff",
             fontSize: "5rem",
             textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
      
           }}
           whileHover={{
             textShadow: "0 0 20px rgba(255, 255, 255, 1)",
        
           }}
         >
           Enjoy Awesome Features.
         </h1>
         <h1
           style={{
             fontFamily: "Hauora, monospace",
             color: "#fff",
             fontSize: "5rem",
             textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        
           }}
           whileHover={{
             textShadow: "0 0 20px rgba(255, 255, 255, 1)",
           }}
         >
           Get To Know Amazing People.
         </h1>
       
       </Marquee>
       </div>
       </>
  );
};

export default ThirdSection;
