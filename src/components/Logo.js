import React from "react";
import styled from "styled-components";
import logo from '../assets/Images/Logo.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const LogoContainer = styled.div`
position: absolute;
top: 1rem;
left: 1rem;
height: 3rem;
width: 100%;
z-index: 5;
a{
 display: flex;
 align-items: center;
 gap: 0.3rem;
 cursor: pointer;
}

img{
 width: 4rem;
 height: 4rem;
 filter: brightness(0) invert(1) grayscale(1);
 user-select: none;
 
}
`


const Logo = () => {

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 0.8,
      delay: 1,
      ease: 'easeInOut'
    }
  }
}

  return (
    <LogoContainer>
      <Link to = "/">
        <motion.div
        initial = {{
          opacity: 0,
        }}
        animate = {{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut'
        }}
        >
      <img src={logo} alt="" />
      </motion.div>
  
      </Link>
    </LogoContainer>
  )
};

export default Logo;
