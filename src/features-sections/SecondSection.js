/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled,{keyframes} from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import thirdSectionImg1 from '../assets/images/featurespage-images/section-2-1.png'
import thirdSectionImg2 from '../assets/images/featurespage-images/section-2-2.png'
import Marquee from "react-fast-marquee";
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Blur1 = styled.div`
height: 18rem;
width: 14rem;
position: absolute;
left: -5%;
top: 20%;
border-radius: 70%;
background-color: grey;
filter: blur(72px);
z-index: -999;
opacity: 0.5;
@media screen and (max-width: 1120px) {
    height: 9rem;
    width: 7rem;
  }
  @media screen and (max-height:600px){
    height:6rem;
    width: 4rem;
  }
`
const Blur2 = styled.div`
height: 26rem;
width: 18rem;
position: absolute;
right: -5%;
bottom: 0;
border-radius: 60%;
background-color: grey;
filter: blur(72px);
z-index: -999;
opacity: 0.5;
@media screen and (max-width: 1120px) {
    height: 13rem;
    width: 9rem;
  }
  @media screen and (max-height:600px){
    height:8rem;
    width: 5rem;
  }
`
const Blur3 = styled.div`
height: 13rem;
width: 9rem;
position: absolute;
left: -5%;
top: 0;
border-radius: 60%;
background-color: grey;
filter: blur(72px);
z-index: -999;
opacity: 0.5;
@media screen and (max-width: 1120px) {
    height: 6rem;
    width: 4rem;
  }
  @media screen and (max-height:600px){
    height:3rem;
    width: 3rem;
  }
`
const V1 = styled.img`
  position: absolute;
  top: 0;
  right:-100%; /* initial position */
  width: 80%; /* Set initial width as a percentage of viewport width */
/* Ensure the image doesn't exceed its container's width */
  
  height: 79vh;
  object-fit: contain;
  object-position: bottom;
  z-index: 1;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
`;


const V2 = styled.img`

  position: absolute;
  left: -100%;
  top: 0%;
  top: 0;
  width: 80%; /* Set initial width as a percentage of viewport width */
/* Ensure the image doesn't exceed its container's width */
  height: 79vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  z-index: 2;
`;


const TextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
 justify-content:center;
  position: absolute;
  gap: 1rem;
  top: 10%;
  left: 25%;
  right: 25%;

@media screen and (max-width:520px){
  width: 70%;
}
@media screen and (max-width:320px){
  width: 80%;
}
`;


const Title = styled.h1`
  font-size: calc(3em + 1vw); /* Adjust the font size based on viewport width */
  z-index: 5;
  font-family: Hauora, monospace;
  text-transform: capitalize;
  text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 3px 3px 0px #333,
                 3px 3px 0px #333,
                 4px 4px 0px #333,
                 4px 4px 0px #333,
                5px 5px 0px #333;
  color: #fff;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.1));

  @media screen and (max-width: 1120px) {
   /* Adjust font size for smaller screens */
   font-size: calc(2.3em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(1.7em + 1vw); /* Adjust font size for even smaller screens */
  }
`;
const Text = styled.p`
/* text-align: justify; */
font-family: Hauora, monospace;
font-size: calc(1em + 1vw);
line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
 
  color: 	#A8A8A8;
  font-family: 'Times Roman';
  text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 1px 1px 0px #333,
                2px 2px 0px #333;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
              
  @media screen and (max-width: 1120px) {
    font-size: calc(0.8em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(0.7em + 1vw);
  }
`;


const MarqueeH1 = styled.h1`
 text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 3px 3px 0px #333,
                 3px 3px 0px #333,
                4px 4px 0px #333 !important;
font-family: Hauora, monospace;
color: #fff;
font-size: 3.5rem;
background-color: #383838;

@media only screen and (max-width: 700px) {
  font-size: 2.7rem;
}

`;



const ThirdSection = () => {
  console.log("logged second");
  
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const textRef = useRef(null);

  const subElements = gsap.utils.selector(textRef)

  useLayoutEffect(() => {
  
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;

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
          end: `bottom+=700 bottom`,
          scrub: 1,
        },
      })
      .to(video1Elem, { right: "-20%", top:0, scale: 1},"key1")
      .to(video2Elem, { left: "-20%", top:0, scale: 1},"key1")
      ;

      subElements("h1").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: 1,
            
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
    "key3"
      )
    );
   subElements("p").forEach((el) =>
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `bottom bottom`,
            scrub: 1,
            
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "key3"
      )
    );
    
    return () => {
      if (t2) t2.kill();
    };
  }, []);

  return (
    <>
    <Section ref={sectionRef}>
      <Blur1/>
      <Blur2/>
      <Blur3/>
      <TextContainer ref={textRef}>
      <Title>Do more with with Location based feed
</Title>
      <Text> Embark on a journey of discovery, as Tags Social connects you with like-minded individuals at new locations. 
</Text>
      </TextContainer>
      <V1 ref={videoRef1} src={thirdSectionImg1}  />
      <V2 ref={videoRef2} src={thirdSectionImg2}   />
      
    </Section>
   
    <div
  style={{ backgroundColor: '#181818', padding: '10px', border:'none' }}
     >
    <Marquee speed={200} direction="right" style={{ zIndex:'99', transform: "rotate(8deg)" }}>
  <MarqueeH1 whileHover={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}>
    Enjoy Awesome Features. Get To Know Amazing People.
  </MarqueeH1>
</Marquee>
       </div>
       </>
  );
};

export default ThirdSection;