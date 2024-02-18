



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
height: 100vh;
overflow: hidden;
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
 <Header/>
    <HeaderVideo/>
  </Section>;
};

export default Home;




