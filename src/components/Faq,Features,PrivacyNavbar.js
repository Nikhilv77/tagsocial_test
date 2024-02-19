import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Headers = styled(motion.header)`
  display: flex;
  height: 11vh;
  justify-content: space-between;
  align-items: center;
  background: rgba(24, 24, 24, 0.5); /* #181818 color */
  backdrop-filter: blur(10px) !important; 
  color: white;
  position: fixed;
  z-index: 3;
  width: 100vw;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img{
 width: 3.4rem;
 margin-left: 2rem;
 height: 3.4rem;
 filter: brightness(0) invert(1) grayscale(1);
 user-select: none;
 
}
`;

const Nav = styled.nav`
width: 70%;

 font-family: 'Times New Roman', Times, serif;
 display: flex;
 align-items: center;
 justify-content:space-between;
 transition: all 0.3s;
 @media only Screen and (max-width: 1117px) {
   display: none;
  }
  .no-hover {
  text-decoration: none; /* Optional: Remove underline on hover */
}

.no-hover:hover::after {
  width: 0; /* Set width to 0 on hover to disable the hover effect */
}
  a {
    font-weight: 600;
    line-height: 1.5;
    font-size: 1.3rem;
    color: white;
    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 0;
      background: transparent;
      transition: width 0.5s;
    }
    &:hover::after {
      width: 100%;
      background: linear-gradient(109.6deg, rgb(6, 183, 249) 11.2%, rgb(25, 74, 236) 91.1%);
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`;

const Button = styled.button`
user-select: none;
 background: linear-gradient(to right, rgba(0,126,242,1), rgb(11, 93, 165));
  padding: 0.7rem;
  margin-right: 2rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 1.2rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: height 0.2s;
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 1117px) {
    font-size: 1.2rem;
    margin-right: 0;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;
const HamburgerBtn = styled.button`
  display: none;
  @media only screen and (max-width: 1117px) {
    display: inline-block;
  }
  position: relative;
  margin-right: 1.5rem;
  background-color: transparent;
  color: white;
  width: 2.4rem;
  height: 11px;
  border: none;
  margin-top: 0rem;
  transition: transform 0.3s, background-color 0.3s;
  cursor: pointer;



  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 100%;
    height: 3px;
    display: block;
    position: absolute;
    left: 0;
    transition: top 0.3s, transform 0.3s;
  }
  
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;


const MobileMenu = styled.nav`
  display: none;

  @media only Screen and (max-width: 1117px) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};

  z-index: 10;
  background: rgba(24, 24, 24, 0.93);
  backdrop-filter: blur(7px) !important; 
  border-radius:1rem; /* Adjust the alpha value (0.7) for opacity */ /* Adds a blur effect for glass-like appearance */
  margin: 0.5rem;
  a {
    color: white;
    font-weight: 600;
    font-size: 1.3rem;
    margin: 1.5rem;
    cursor: pointer;
    font-family: 'Times New Roman', Times, serif;
  }
`;

export const FAQFeaturesPrivacyNav = () => {
  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };


  return (

    <Headers 
    ref={ref}>
      <Logo>
        <img src={logo} alt="TagSocial" />
      </Logo>
      <Nav>
        <div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          width:'60%',
    
        }}>
           <a href="/">Home</a>
<a href="/features">Features</a>
<a href="/faqs">FAQs</a>
<a href="/terms-and-conditions">Privacy Policy</a>
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.syneidisi.tagsocial" target="_blank" class="no-hover">
  <Button>Download</Button>
</a>
      </Nav>
     
      <HamburgerBtn clicked={+click} onClick={() => setClick(!click)} >
        <span></span>
      </HamburgerBtn>

      <MobileMenu clicked={+click}>
      <a href="/">Home</a>
<a href="/features">Features</a>
<a href="/faqs">FAQs</a>
<a href="/terms-and-conditions">Privacy Policy</a>
        <a href="https://play.google.com/store/apps/details?id=com.syneidisi.tagsocial" target="_blank" class="no-hover">
  <Button>Download</Button>
</a>
      </MobileMenu>
    </Headers>
  
  );
};
