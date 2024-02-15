import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import brandImage from '.././assets/Images/Logo.png'

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;
  font-family: 'Times Roman';
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    img{
      width: 5rem;
    }
  }

  img{
    width: 5rem;
    height: auto;
    overflow: visible;
    filter: brightness(0) invert(1) grayscale(2);
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div variants={textVariants} initial="hidden" animate="visible">
      <img src={brandImage} alt="" />
      </motion.div>
  
    </Container>
  );
};

export default Loader;