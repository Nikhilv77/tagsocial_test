import gsap from 'gsap'
import React, { useRef } from 'react'
import { useLayoutEffect } from 'react'
import styled from 'styled-components'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color:#181818;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  background-color:#002244;
  font-size: 5em;
  z-index: 5;
  text-transform: capitalize;
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

const FourthSection = () => {
  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null)
  const Text1Ref = useRef(null)
  const Text2Ref = useRef(null)
  const Text3Ref = useRef(null)
  const Text4Ref = useRef(null)
 // Reference for the second text

  useLayoutEffect(() => {
    const Elem = sectionRef.current
    const Text1Elem = Text1Ref.current
    const Text2Elem = Text2Ref.current
    const Text3Elem = Text3Ref.current
    const Text4Elem = Text4Ref.current

    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: '5% top',
        end: `bottom top`,
        scrub: 4,
        pin: true,
        pinSpacing: true,
      },
    })

    let t1 = gsap.timeline({
      scrollTrigger: { 
        trigger: Elem,
        start: '5% top',
        end: `bottom top`,
        scrub: 5,
      },
    })
    .to(Text1Elem, { top: "-35%", scale: 1}) 
    .to(Text2Elem, { top: "-35%", scale: 1}) 
    .to(Text3Elem, { top: "-35%", scale: 1}) 
    .to(Text4Elem, { top: "30%", scale: 1}) 
  
    

    return () => {
      if (t1) t1.kill()
    }
  }, [])

  return (
    <Section ref={sectionRef}>
      <Title ref={Text1Ref} style={{top:"150%", position:'absolute',textAlign:'center'}}>Are you Bored?<br /> Try Something Exciting!</Title>
      <Title ref={Text2Ref} style={{ top: "170%", position: "absolute",textAlign:'center' }}>Get Rid of your Boring Life <br /> with TagSocial.</Title>  
          <Title ref={Text3Ref} style={{ top: "190%", position: "absolute" }}>It's Free!</Title>
          <Title ref={Text4Ref} style={{ top: "210%", position: "absolute", borderRadius:'1rem',padding:'0.5rem',cursor:'pointer' }}>Get Now</Title>
    </Section>
  )
}

export default FourthSection
