import React from 'react'
import { Container, Title, Accordion } from '@mantine/core'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const PlaceholderText = `
  It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.
  It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.
  It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.
`

const FaqWrapper = styled(motion(Container))`
  padding-top: calc(var(--mantine-spacing-xl) * 4);
  padding-bottom: calc(var(--mantine-spacing-xl) * 2);
  min-height: 650px;
  font-family: Hauora, monospace !important;
`

const FaqTitle = styled(motion(Title))`
  margin-bottom: calc(var(--mantine-spacing-xl) * 1.5);
  font-family: Hauora, monospace !important;
  color: #fff;
  font-size: 2.3rem;
  @media (max-width: 720px) {
    font-size: 2.1rem !important;
  }
  @media (max-width: 500px) {
    font-size: 1.9rem !important;
  }
`

const FaqAccordionItem = styled(motion(Accordion.Item))`
  color: #fff;
  font-size: 1.1rem;
  background-color: #393939;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  font-family: 'Open Sans', sans-serif !important;
  @media (max-width: 720px) {
    font-size: 1rem !important;
  }
`

const FaqAccordionControl = styled(motion(Accordion.Control))`
  color: #fff;
  font-size: 1.2rem;
  font-family: 'Open Sans', sans-serif !important;
  @media (max-width: 720px) {
    font-size: 1.1rem !important;
  }
`

const FaqAccordionPanel = styled(motion(Accordion.Panel))`
  color: #fff;
`

const Faqs = () => {
  return (
    <FaqWrapper
      size="md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaqTitle
        ta="center"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Frequently Asked Questions
      </FaqTitle>

      <Accordion variant="separated">
        <FaqAccordionItem
          value="reset-password"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaqAccordionControl>
            How can I reset my password?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="another-account"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaqAccordionControl>
            Can I create more than one account?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="newsletter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <FaqAccordionControl>
            How can I subscribe to the monthly newsletter?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="credit-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <FaqAccordionControl>
            Do you store credit card information securely?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText}</FaqAccordionPanel>
        </FaqAccordionItem>

        <FaqAccordionItem
          value="payment"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <FaqAccordionControl>
            What payment systems do you work with?
          </FaqAccordionControl>
          <FaqAccordionPanel>{PlaceholderText}</FaqAccordionPanel>
        </FaqAccordionItem>
      </Accordion>
    </FaqWrapper>
  )
}

export default Faqs
