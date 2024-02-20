import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import bgImage from '../assets/Images/frame22.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gPlay from '../assets/Images/google-play.png'
import appStore from '../assets/Images/app-store.png'
const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #181818;
  display: flex;
  justify-content: center;
  align-items: center;
`
const I1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 2;
`;

const Title = styled.h1`

  font-size: 5em;
  z-index: 5;
  text-transform: capitalize;
  background-color: #181818;
  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: 'Times Roman';
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 70em) {
    font-size: 3em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2em;
  }
`
const Images = styled.div`
  z-index: 5;
  padding: 0.5rem;
  text-transform: 0 0 4px #fff;
  display: flex;
  color: #fff;
  font-family: 'Times Roman';
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3));

  @media screen and (max-width: 70em) {
    flex-direction: column;
  }
  @media screen and (max-width: 48em) {
    flex-direction: column;
  }
`

const FifthSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const imageRef = useRef(null);
  const Text1Ref = useRef(null)
  const Text2Ref = useRef(null)

 // Reference for the second text

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const Text1Elem = Text1Ref.current
    const Text2Elem = Text2Ref.current
    const imageElem = imageRef.current;


    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: '5% top',
        end: `bottom top`,
        scrub: 3,
        pin: true,
        pinSpacing: true,
      },
    })

    let t1 = gsap.timeline({
      scrollTrigger: { 
        trigger: Elem,
        start: '5% top',
        end: `bottom top`,
        scrub: 1,
      },
    })
    .to(Text1Elem, { top: "-45%", scale: 1}) 
    .to(Text2Elem, { top: "45%", scale: 1},"key1")
    .to(imageElem,{scale : 0.6, rotation: 25},"key1") 
  
    

    return () => {
      if (t1) t1.kill()
    }
  }, [])

  return (
    <Section ref={sectionRef}>
  <I1 ref={imageRef} src={bgImage}/>
      <Title ref={Text1Ref} style={{top:"50%", position:'absolute',textAlign:'center'}}>TagSocial brings innovative <br /> features and functionalities <br /> to the social media landscape</Title> 
      <Images ref={Text2Ref} style={{top:"170%", position:'absolute',textAlign:'center'}}>

        <img style={{height:'6rem',width:'18rem', padding:"0.5rem", cursor:'pointer'}} src={gPlay} alt="" />
        <img style={{ height:'6rem',width:'18rem',padding:'0.5rem',cursor:'pointer'}} src={appStore} alt="" />
      </Images>
    </Section>
    
  )
}

export default FifthSection
