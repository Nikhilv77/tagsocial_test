import gsap from "gsap";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import v1 from "../assets/Images/tgs-header-1.webp";
import v2 from "../assets/Images/second-section-2.png";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;
const Blur1 = styled.div`
height: 18rem;
width: 14rem;
position: absolute;
left: -5%;
top: 10%;
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
bottom: 0;
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
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  z-index: 2;
`;

const V2 = styled.img`
  position: absolute;
  top: -40%;

  left: -45%;
  width: 60%;
  height: 80vh;
object-fit: contain;
  z-index: 1;
  @media screen and (max-width: 30em) {
    height: 70vh;
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
  font-size: 3rem;
  font-family: Hauora, monospace;
  z-index: 5;
  text-transform: capitalize;

  @media screen and (max-width: 70em) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 48em) {
    font-size: 1.4rem;
  }
`;
const SubTitle = styled.p`
  font-size: 1.5rem;
  font-family: Hauora, monospace;
  z-index: 5;
  text-transform: capitalize;

  @media screen and (max-width: 70em) {
    font-size: 1.4rem;
  }
  @media screen and (max-width: 48em) {
    font-size: 1.2rem;
  }
`;
const Button = styled.button`
  font-family: Hauora, monospace;
  font-weight: 600;
  padding: 0.8rem 2rem 0.8rem 2rem;
  font-size: calc(0.4em + 1vw);
  border: none;
  background-color: #007fff;
  color: #fff;
  border-radius: 0.3rem;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  align-self: center;
  margin: 1.3rem 0 0 0;



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

const CameraSection = () => {
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);



  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
  

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
      .to(video1Elem, { scale: 0.3,opacity:0,rotation:-15 }, "key1")
      .to(video2Elem, { scale: 1,rotation:15,left:'20%',top:0 }, "key1");

    elements("h1,p,button").forEach((el) =>
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
      <Blur1/>
      <Blur2/>
      <Blur3/>
      <V1 ref={videoRef1} src={v1}  />
      <V2 ref={videoRef2} src={v2}  />
      <TitleContainer ref={titleRef}>
        <Title>Give Some Life <br />To Your Social <br />Experience</Title>
        <SubTitle>We brought Features you wanna see.</SubTitle>
        <Button>Checkout</Button>
      </TitleContainer>
    </Section>
  );
};

export default CameraSection;