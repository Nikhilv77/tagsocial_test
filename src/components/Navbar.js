import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Logo from "./Logo";

const NavContainer = styled(motion.div)`
min-height: 0;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
z-index: 2;
transition: all 0.2s ease-in-out;
font-family: "Times Roman";
overflow: hidden;

`
const MenuButton = styled(motion.li)`
    text-transform: capitalize;
    width: 5rem;
    height: 5rem;
    margin-left: auto;
    background-color: rgba(255, 255, 255, 0.2); 
    list-style: none;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
    align-items: center;
    cursor: pointer;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.3);
    @media (min-width:720px){
      display: none;
    }
`;

const MenuItems = styled(motion.ul)`
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
background-color: rgba(255, 255, 255, 0.2); 
backdrop-filter: blur(5px);
min-height: ${props=>props.theme.navHeight};
`
const MenuItem = styled.li`
color: #fff;

text-transform: capitalize;
list-style: none;
font-size: 1.6em;
cursor: pointer;

` 


const Navbar = () => {
  const[menuClicked,setMenuClicked] = useState(false);
  return <NavContainer  initial={{
    height: 0 // initial height value
  }}
  animate={{
    height: "5rem", // or a specific pixel value like '200px'
  }}
  transition={{
    delay: 5,
    duration: 1,
  }}
  menuClicked = {menuClicked}>
    <MenuItems drag='y'
    dragConstraints = {{
      top: 0,
      bottom: 140
    }}
    dragSnapToOrigin
    dragElastic = {0.05}
    >
          <MenuButton onClick={()=>{
      setMenuClicked(!menuClicked)
    }}>menu</MenuButton>
    <MenuItem><Logo/></MenuItem>
    <MenuItem>Home</MenuItem>
    <MenuItem>Features</MenuItem>
    <MenuItem>Faqs</MenuItem>
    <MenuItem>Privacy Policy</MenuItem>

    </MenuItems>

  </NavContainer>;
};

export default Navbar;



/*import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const NavContainer = styled(motion.div)`
position: absolute;
top: ${props=>props.menuClicked? '0' : `-${props.theme.navHeight}`};
min-height: ${props=>props.theme.navHeight};
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
z-index: 6;
transition: all 0.2s ease-in-out;
font-family: Sirin Stencil;
`
const MenuButton = styled(motion.li)`
    text-transform: capitalize;
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 1em;
    top: 104%;
    background-color: rgba(255, 255, 255, 0.2); 
    list-style: none;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
    align-items: center;
    cursor: pointer;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 20px rgba(255,255,255,0.3), 0 0 30px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.3);
`;

const MenuItems = styled(motion.ul)`
width: 100vw;
position: relative;
display: flex;
justify-content: space-around;
align-items: center;
background-color: rgba(255, 255, 255, 0.2); 
backdrop-filter: blur(5px);
min-height: ${props=>props.theme.navHeight};
`
const MenuItem = styled.li`
color: #fff;

text-transform: capitalize;
list-style: none;
font-size: 1.6em;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover{
transform: scale(1.3);
}
` 


const Navbar = () => {
  const[menuClicked,setMenuClicked] = useState(false);
  return <NavContainer initial = {{
    y: '-100%',
  }}
  animate = {{
    y: '0'
  }}
  transition = {{
    delay: 2,
    duration: 2
  }}
  menuClicked = {menuClicked}>
    <MenuItems drag='y'
    dragConstraints = {{
      top: 0,
      bottom: 140
    }}
    dragSnapToOrigin
    dragElastic = {0.05}
    >
          <MenuButton onClick={()=>{
      setMenuClicked(!menuClicked)
    }}>menu</MenuButton>
    <MenuItem>Home</MenuItem>
    <MenuItem>Features</MenuItem>
    <MenuItem>Faqs</MenuItem>
    <MenuItem>Privacy Policy</MenuItem>

    </MenuItems>

  </NavContainer>;
};

export default Navbar;
 */