



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

  @media (min-width: 1024px) and (min-height: 600px) and (max-width: 1024px) and (max-height: 600px) {
    height: 120vh;
  }
`;

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
 <Header/>
    <HeaderVideo/>
  </Section>;
};

export default Home;




