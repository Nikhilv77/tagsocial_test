import { Container, Title, Accordion } from '@mantine/core';
import { motion } from 'framer-motion';

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

const faqStyles = {
  wrapper: {
    paddingTop: 'calc(var(--mantine-spacing-xl) * 2)',
    paddingBottom: 'calc(var(--mantine-spacing-xl) * 2)',
    minHeight: '650px',
    fontFamily: "'Times New Roman', Times, serif",
  },
  title: {
    marginBottom: 'calc(var(--mantine-spacing-xl) * 1.5)',
    fontFamily: "'Times New Roman', Times, serif",
    color: '#fff',
  },
  item: {
    color: '#fff',
    fontSize: '1.2rem',
    backgroundColor: '#393939',
    borderRadius: '8px',
    marginBottom: '20px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  control: {
    color: '#fff',
    fontSize: '1.2rem',
  },
};

const MotionContainer = motion(Container);
const MotionTitle = motion(Title);
const MotionAccordion = motion(Accordion.Item);
const MotionAccordionControl = motion(Accordion.Control);
const MotionAccordionPanel = motion(Accordion.Panel);

export function Faqs() {
  return (
    <MotionContainer size="md" style={faqStyles.wrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <MotionTitle ta="center" style={faqStyles.title} initial={{ y: -50 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
        Frequently Asked Questions
      </MotionTitle>

      <Accordion variant="separated">
        <MotionAccordion style={faqStyles.item} value="reset-password" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <MotionAccordionControl style={faqStyles.control}>How can I reset my password?</MotionAccordionControl>
          <MotionAccordionPanel>{placeholder}</MotionAccordionPanel>
        </MotionAccordion>

        <MotionAccordion style={faqStyles.item} value="another-account" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <MotionAccordionControl style={faqStyles.control}>Can I create more than one account?</MotionAccordionControl>
          <MotionAccordionPanel>{placeholder}</MotionAccordionPanel>
        </MotionAccordion>

        <MotionAccordion style={faqStyles.item} value="newsletter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <MotionAccordionControl style={faqStyles.control}>How can I subscribe to the monthly newsletter?</MotionAccordionControl>
          <MotionAccordionPanel>{placeholder}</MotionAccordionPanel>
        </MotionAccordion>

        <MotionAccordion style={faqStyles.item} value="credit-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
          <MotionAccordionControl style={faqStyles.control}>Do you store credit card information securely?</MotionAccordionControl>
          <MotionAccordionPanel>{placeholder}</MotionAccordionPanel>
        </MotionAccordion>

        <MotionAccordion style={faqStyles.item} value="payment" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          <MotionAccordionControl style={faqStyles.control}>What payment systems do you work with?</MotionAccordionControl>
          <MotionAccordionPanel>{placeholder}</MotionAccordionPanel>
        </MotionAccordion>
      </Accordion>
    </MotionContainer>
  );
}
