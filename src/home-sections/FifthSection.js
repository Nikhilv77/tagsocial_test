import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import bgImage from '../assets/Images/frame22.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
import sunFrameImage from '../assets/Images/sun-frame.png'
const Section = styled.section`
  width: 100vw;
  height: 100vh;
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
  user-select: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 2;
`;
const I2 = styled.img`
height: 70vh;
width: 80%;
position: absolute;
bottom : -80%;
user-select: none;
left: 2%;
object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  z-index: 3; 
`

const Title = styled.h1`

  font-size: 4.6em;
  z-index: 5;
  text-transform: capitalize;
  background-color: transparent;
  padding: 0.3rem;
 opacity: 0.8;
  border-radius: 1rem;
  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: Hauora, monospace;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));

  @media screen and (max-width: 70em) {
    font-size: 3em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2em;
  }
`
const Cta = styled.h1`
  font-size: 3.3em;
  z-index: 6;
  text-transform: capitalize;
 opacity: 1;

  text-transform: 0 0 4px #fff;
  color: #fff;
  font-family: Hauora, monospace;
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.5));
  text-shadow: 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 1px 1px 0px #333,
                 2px 2px 0px #333,
                 3px 3px 0px #333,
                 3px 3px 0px #333,
                 4px 4px 0px #333,
                 4px 4px 0px #333,
                5px 5px 0px #333;

  @media screen and (max-width: 70em) {
    font-size: 2.7em;
  }
  @media screen and (max-width: 48em) {
    font-size: 2.2em;
  }
`


const FifthSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const imageRef = useRef(null);
  const Text1Ref = useRef(null);
  const frameRef = useRef(null);
  const ctaRef = useRef(null);

 // Reference for the second text

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const Text1Elem = Text1Ref.current;
    const imageElem = imageRef.current;
    const frameElem = frameRef.current;
    const ctaElem = ctaRef.current;


    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: '5% top',
        end: `bottom top`,
        scrub: 2,
        pin: true,
        pinSpacing: true,
      },
    })

    let t1 = gsap.timeline({
      scrollTrigger: { 
        trigger: Elem,
        start: '5% top',
        end: `bottom top`,
        scrub: 2,
      },
    })
    .to(Text1Elem, { top: "-45%", scale: 1}) 
    .to(imageElem,{scale : 0.3, rotation: 15,bottom:'5%'},"key1")
    .to(frameElem,{bottom:"4%",scale:1,rotation:-20},"key1")
    .to(ctaElem,{top:'50%', right:'20%',scale:1,rotation:15})
    
  
    
 
    return () => {
      if (t1) t1.kill()
    }
  }, [])

  return (
    <Section ref={sectionRef}>
  <I1 ref={imageRef} src={bgImage}/>
      <Title ref={Text1Ref} style={{top:"50%", position:'absolute',textAlign:'center'}}>TagSocial brings innovative <br /> features and functionalities <br /> to the social media landscape</Title> 
     <I2 ref={frameRef} src={sunFrameImage}/>
     <Cta ref={ctaRef} style={{top:"-50%", position:'absolute'}}>Your Gateway to Timeless Memories
   
     </Cta>
    </Section>
    
  )
}
export default FifthSection

//Your Gateway to Timeless Memories