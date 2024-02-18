import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TermsAndConditionsPage = () => {
  return (
    <MotionContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MotionTitle
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        Terms and Conditions
      </MotionTitle>
      <MotionContent>
        <MotionParagraph
          style={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          lectus augue. Donec id odio et lacus dignissim imperdiet. In hac
          habitasse platea dictumst. Integer tincidunt diam vitae sapien
          vehicula, sed ultricies metus gravida. Integer posuere hendrerit
          erat, eget vehicula odio fermentum non. Proin sed nisl sem. Vivamus
          feugiat bibendum erat, a malesuada nisi accumsan in. Duis ultrices
          quam risus, eu lobortis ex varius id. Proin nec lectus nec ex
          volutpat fermentum.
        </MotionParagraph>
        <MotionParagraph
          style={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
          necessitatibus nesciunt? Et, labore. Laudantium possimus animi modi
          harum, exercitationem libero nemo ea repellat. Ipsa molestias
          distinctio sed doloribus amet esse assumenda beatae! Explicabo
          obcaecati quisquam deleniti ipsum facere. Deleniti fugit est
          excepturi mollitia voluptate autem assumenda voluptatem placeat
          tempore suscipit. Tempore harum, ut ducimus esse rem voluptates a
          facere provident eaque quas ipsa atque sed quae ipsam sapiente. Unde,
          beatae. Dolores sed, ipsam tempora blanditiis soluta non corporis hic
          nihil quis, sit numquam, illo consequuntur. Inventore, corrupti
          tempora.
        </MotionParagraph>
        {/* Add more paragraphs and content as needed */}
      </MotionContent>
    </MotionContainer>
  );
};

// Styled Components

const MotionContainer = styled(motion.div)`
  background-color: #181818; /* Dark background color */
  color: #fff; /* Text color */
  padding: 1.2rem;
  width: 80vw;
  margin: auto;
`;

const MotionTitle = styled(motion.h1)`
  font-family: 'Times New Roman', Times, serif; /* Times Roman font */
  font-size: 2rem;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const MotionContent = styled(motion.div)`
  font-family: 'Times New Roman', Times, serif; /* Times Roman font */
`;

const MotionParagraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 1.2rem;
  line-height: 1.6;
  text-align: justify;
`;

export default TermsAndConditionsPage;
