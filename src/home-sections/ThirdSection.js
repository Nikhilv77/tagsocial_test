/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled,{keyframes} from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import thirdSectionImg1 from '../assets/Images/thirdsection-1.png'
import thirdSectionImg2 from '../assets/Images/thirdsection-2.png'
import Marquee from "react-fast-marquee";
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


const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 12%;
  left: 4%;

  @media screen and (max-width: 1120px) {
    top: 10%;
  left: 25%;
  right: 25%;
  }
  @media screen and (max-width: 620px) {
    top: 15%;
  }
`;
const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 justify-content: center;
  position: absolute;
  gap: 1.4rem;
  top: 14%;
  left: 8%;
  /* text-align: justify; */
 

  @media screen and (max-width: 1120px) {
    top: 30%;
    
  }
  @media screen and (max-height:600px){
    top: 20%;
  }
 
`;

const Title = styled.h1`
  font-size: calc(3em + 1vw); /* Adjust the font size based on viewport width */
  z-index: 5;
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
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.1));

  @media screen and (max-width: 1120px) {
    font-size: calc(2.4em + 1vw); /* Adjust font size for smaller screens */
  }
  @media screen and (max-width: 625px) {
    font-size: calc(1.9em + 1vw); /* Adjust font size for even smaller screens */
  }
`;
const Text = styled.p`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif !important;
font-size: calc(1em + 1vw);
line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
 
  color: #fff;
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
  /* filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3)); */
              
  @media screen and (max-width: 1120px) {
    font-size: calc(0.8em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(0.6em + 1vw);
  }
`;


const Button = styled.button`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 600;
  padding: 1rem 2.2rem 1rem 2.2rem;
  font-size: calc(0.4em + 1vw);
  border: 1px solid #fff;
  background-color: #007fff;
  color: #fff;
  border-radius: 0.3rem;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  align-self: flex-start;



  &:hover {
    cursor: pointer;
    background-color: transparent;
    border:1px solid #007fff;
    color: #fff;
    box-shadow: 0 0 20px 10px rgba(0,115,207,0.2);
  }

  @media screen and (max-width: 1120px) {
    font-size: calc(0.8em + 1vw);
  }

  @media screen and (max-width: 625px) {
    font-size: calc(0.4em + 1vw);
    padding: 0.8rem 2rem 0.8rem 2rem;
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
font-size: 4.3rem;
background-color: #007FFF;

@media only screen and (max-width: 700px) {
  font-size: 3rem;
}

`;

const ThirdSection = () => {
  console.log("logged second");
  
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);
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
      .to(video1Elem, { top: "8%", right: "10%", scale: 1 },"key1")
      .to(video2Elem, { top: "8%", right: "-5%", scale: 1 },"key1")
      ;

      elements("h1").forEach((el) =>
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
    "key2"
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
      )
    );
    subElements("button").forEach((el) =>
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
      
    )
  );
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
      </TitleContainer>
      <TextContainer ref={textRef}>
      <Text>Embark on a journey of discovery. Connect with like-minded individuals and begin building meaningful relationships. Get started now!</Text>
      <Button>GET STARTED</Button>
      </TextContainer>
      <V1 ref={videoRef1} src={thirdSectionImg1}  />
      <V2 ref={videoRef2} src={thirdSectionImg2}   />
      
    </Section>
   
    <div
  style={{ backgroundColor: '#181818', borderRadius: '10px', padding: '10px' }}
     >
       <Marquee speed={400}
       direction="right"
       >
          <MarqueeH1
          whileHover={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
          }}
         >
           Enjoy Awesome Features. Get To Know Amazing People.
         </MarqueeH1>
       
       </Marquee>
       </div>
       </>
  );
};

export default ThirdSection;
