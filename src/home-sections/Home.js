



import React from "react";
import styled from "styled-components";
import HeaderVideo from "../components/HeaderVideo";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import {motion} from 'framer-motion'
import {Header} from "./Nav";


const Section = styled.section`
  position: relative;
  background-color: #181818;
  overflow: hidden;
  height: 100vh;

  /* @media (min-width: 1024px) and (min-height: 600px) and (max-width: 1024px) and (max-height: 600px) {
    height: 120vh;
  } */
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
z-index: 1;
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
top: 0;
border-radius: 60%;
background-color: grey;
filter: blur(72px);
z-index: 1;
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
z-index: 1;
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

const Home = () => {
  useEffect(()=>{
    (
      async()=>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])
  return <Section>
  <Blur1/>
  <Blur2/>
  <Blur3/>
 <Header/>
    <HeaderVideo/>
  </Section>;
};

export default Home;




