/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import React from "react";
import styled from "styled-components";
import i1 from '../assets/Images/features/hero-1.png'
import i2 from '../assets/Images/features/hero-2.png'
import i3 from '../assets/Images/features/hero-3.png'
import i4 from '../assets/Images/features/hero-4.png'

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
  left:-20%; /* initial position */
  width: 60%;
  height: 60vh;
  user-select: none;
  object-fit: contain;
  object-position: bottom;
  z-index: 1;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
`;


const V2 = styled.img`
user-select: none;
  position: absolute;
  right: -20%;
  top: -2%;
  width: 60%;

  height: 50vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  z-index: 2;
`;
const V3 = styled.img`
  position: absolute;
  left:-15%;
  bottom: 5%;
 user-select: none;
  width: 64%;
  height: 34vh;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  transform: rotate(8deg);
  z-index: 2;
`;
const V4 = styled.img`
  position: absolute;
  right: -20%;
  user-select: none;
  bottom: -7%;
  width: 56%;
  height: 36vh;
  object-fit: contain;
  transform: rotate(-17deg);
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
  z-index: 2;
`;

const TextContainer = styled.div`
text-align: center;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 justify-content: center;
  position: absolute;
  gap: 1rem;

  #svgContainer{
    display: flex;
justify-content: center;
align-items: center;
padding: 1.3rem;
border-radius: 50%;
border: 2px solid #fff;
background-color: transparent;
transition: all 0.6s ease-in-out;
cursor: pointer;
&:hover{
  background: linear-gradient(to right, rgba(0, 126, 242, 1), rgb(11, 93, 165));
}
  }
`;


const Title = styled.h1`
  font-size: calc(2.6em + 1vw); /* Adjust the font size based on viewport width */
  z-index: 5;
  text-transform: capitalize;
  /* text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 3px 3px 0px #333,
                 3px 3px 0px #333,
                 4px 4px 0px #333,
                 4px 4px 0px #333,
                5px 5px 0px #333; */
  color: #fff;
  font-family: Hauora, monospace;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

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
font-family: Hauora, monospace !important;
font-size: calc(1em + 1vw);
line-height: 1.8;
  z-index: 5;
  text-transform: capitalize;
  text-transform: 0 0 4px #fff;
 
  color: 	#A8A8A8;
  font-family: 'Times Roman';
  /* text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 2px 2px 0px #333,
                 1px 1px 0px #333,
                2px 2px 0px #333; */
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));
              
  @media screen and (max-width: 1120px) {
    font-size: calc(0.8em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(0.7em + 1vw);
  }
`;

const Button = styled.button`
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  height: 5em;
  margin-bottom: auto;
  width: 5em;
  font-size: calc(0.6em + 1vw);
  border:none;
  background-color: white;
  color: #333;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 20px 10px rgba(0,115,207,0.3);
  overflow: hidden;
  transition: box-shadow 0.3s ease; 
  &:hover {
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0 20px 10px rgba(0,115,207,0.6);
  }
  @media screen and (max-width: 1120px) {
    font-size: calc(0.8em + 1vw);
  }
  @media screen and (max-width: 625px) {
    font-size: calc(0.5em + 1vw);
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



const HeroSection = () => {
  const smoothScroll = () => {
    window.scrollBy({
      top: window.innerHeight * 2,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div
  style={{ backgroundColor: '#181818', padding: '10px', border:'none' }}
     >
    <Marquee speed={200} direction="right" style={{transform: "rotate(-8deg)"}} >
  <MarqueeH1 whileHover={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}>
    Enjoy Awesome Features. Get To Know Amazing People.
  </MarqueeH1>
</Marquee>
       </div>
    <Section>
      <Blur1/>
      <Blur2/>
      <Blur3/>
      <TextContainer>
      <Title>Features that set you apart</Title>
      <Text> 
There are thrilling features waiting for you to explore.
</Text>
<div
id="svgContainer"
onClick={smoothScroll}
>
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="white" viewBox="0 0 92 92" id="down-arrow"><path d="M73.8 57.9l-25 24.9C48 83.6 47 84 46 84s-2-.4-2.8-1.2l-25-24.9c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0L42 70.4V12c0-2.2 1.8-4 4-4s4 1.8 4 4v58.4l18.2-18.1c1.6-1.6 4.1-1.6 5.7 0 1.5 1.5 1.5 4-.1 5.6z"></path></svg></div>
      </TextContainer>
      <V1 src={i1}/>
      <V2 src={i2}/>
      <V3 src={i4}/>
      <V4 src={i3}/>
    </Section>
   
    <div
  style={{ backgroundColor: '#181818', padding: '10px', border:'none' }}
     >
    <Marquee speed={200} direction="right" style={{ zIndex:'999', transform: "rotate(8deg)" }}>
  <MarqueeH1 whileHover={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}>
    Enjoy Awesome Features. Get To Know Amazing People.
  </MarqueeH1>
</Marquee>
       </div>
       </>
  );
};

export default HeroSection;
