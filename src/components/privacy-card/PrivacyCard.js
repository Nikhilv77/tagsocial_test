import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <MotionContainer
      
    >
      <MotionTitle

      >
        Privacy Policy
      </MotionTitle>
      <MotionTitle
     
      >
       This Privacy Policy will help you better understand how we collect, use, and share your personal information.
      </MotionTitle>
      
      <MotionContent>
      <MotionSubTitle>Terms of use</MotionSubTitle>
        <MotionParagraph
  
        >
          Tags is a social networking platform for users to connect, communicate, and collaborate with other users through geofencing. This platform allows users to explore places, connect people, and discover events and businesses in the surrounding locality.
        </MotionParagraph>
        <MotionSubTitle>Objectionable content & behavior

</MotionSubTitle>
        <MotionParagraph
 
        >
          Objectionable content & behavior: You cannot upload content related to pornography, nudity, scam, bullying, abuse, or violence. Legal actions will be taken against violators, leading to a permanent ban from using Tag Social. Users can report such content for immediate action.
        </MotionParagraph>
        <MotionSubTitle>
        What type of data do we collect through Tags Social
</MotionSubTitle>
       
        <MotionParagraph
      
        >
          Basic Information: We collect basic information provided during account sign-up or business registration for authentication, messaging, communication, and connection purposes.
        </MotionParagraph>
        <MotionParagraph
      
        >
          Transactions: We collect payment information, including credit or debit card details and other billing information, for users making purchases or financial transactions through our platform.
        </MotionParagraph>
        <MotionParagraph
         
        >
          Photos: Users' uploaded photos are visible publicly and may be used for promotional purposes within the platform.
        </MotionParagraph>
        <MotionParagraph
   
        >
          Location: We collect users' current location only when media is uploaded through our app. This information is not shared with other users unless explicitly permitted by the user.
        </MotionParagraph>
        <MotionSubTitle>Can I delete my data?</MotionSubTitle>
        <MotionParagraph
  
        >
          You can completely erase your data, including photos, information, and others, by sending us a delete account request. We will further verify and confirm your request. Completely erasing your data may take 4-5 working days. Once deleted, you cannot restore your data as we permanently erase it from our servers.
        </MotionParagraph>
        <MotionSubTitle>Why do we access your Location in the background?</MotionSubTitle>
        <MotionParagraph
  
        >
          We use access to your current location to show you the media/content which were captured on your current location. The core functionality of Tags Social depends on GPS and Fine location, so granting location access is compulsory. We explicitly do not share your location with other users, and we don't collect your current location.
        </MotionParagraph>
        <MotionSubTitle>Report and Abuse?</MotionSubTitle>
        <MotionParagraph
  
        >
          Once reported, we take quick action on the post which was reported. We check if the report is appropriate, and if it's not, we take legal actions against the user who was reported.
        </MotionParagraph>
        <MotionSubTitle>Blocking?</MotionSubTitle>
        <MotionParagraph
   
        >
          Once you block a user, the user in the future will not be able to visit your profile and will not be able to see your posts.
        </MotionParagraph>
        <MotionSubTitle>Ads and promotions?</MotionSubTitle>
        <MotionParagraph
    
        >
          Tags Social shows ads and promotions based on your current location so you can avail yourself of offers and coupons from your nearby local stores. If any misleading or fraud is found, you can report it, and we will take action on it.
        </MotionParagraph>
        <MotionSubTitle>Account Privacy?</MotionSubTitle>
        <MotionParagraph
      
        >
          Your account will be visible to all users on Tags Social. However, only the users who are friends with you will be able to see your posts, and only your friends can send messages to you. You can make friends by scanning the QR of other users manually or use Revert Likes.
        </MotionParagraph>
        <MotionSubTitle>Post privacy?</MotionSubTitle>
        <MotionParagraph

        >
          In Tags Social, you are always posting a picture publicly on the location it was uploaded. Your uploaded picture will be visible to all users who come across the same location. You can increase the geographical range of your picture for security purposes; we provide checkboxes for privacy and sharing the location of the picture.
        </MotionParagraph>
        <MotionSubTitle>Refund policy</MotionSubTitle>
        <MotionParagraph

        >
          Tags Social is used to advertise businesses locally. Businesses can request a refund for their advertisements under the following conditions:
          <ol>
            <li>The advertisement is not visible on the platform.</li>
            <li>The advertisement was published unintentionally.</li>
            <li>The advertisement is posted on the wrong location.</li>
          </ol>
          Refund requests must be made within three days of advertising. Our team will assess the request and issue a refund after the assessment. Tags Social keeps track of previous refund requests, and frequent and unnecessary refund requests may affect future assessments.
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
  padding: 4em; /* Add padding for better spacing */
  width: 90vw;
  margin: auto;
  @media screen and (max-width:700px){
    width: 90vw !important;
    padding: 4em 1em 4em 1em;
  }
  @media screen and (max-width:500px){
    width: 94vw !important;
    padding: 4em 1em 4em 1em;
  }
  @media screen and (max-width:420px){
    width: 99vw !important;
    padding: 4em 1em 4em 1em;
  }
`;

const MotionTitle = styled(motion.h1)`
  font-family: Hauora, monospace !important; /* Times Roman font */
  font-size: 1.8rem; /* Increase font size */
  margin-bottom: 1.5rem;

  text-align: left;
  &:first-child {
    margin-top: 4rem;
    font-size: 2.4rem;
    text-align: center;
  }
  @media screen and (max-width:700px){
    font-size:1.4rem;
    &:first-child {
    margin-top: 3rem;
    font-size: 2.3rem;
  }
  }
  @media screen and (max-width:500px){
    font-size:1.3rem;
    &:first-child {
    margin-top: 3rem;
    font-size: 2.1rem;
  }
  }
  @media screen and (max-width:420px){
    font-size:1.1rem;
    &:first-child {
    margin-top: 3rem;
    font-size: 1.9rem;
  }
  }

`;

const MotionSubTitle = styled(motion.h2)`
  font-size: 1.6rem; /* Increase font size */
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-family: "Tenor Sans", sans-serif;
  
  @media screen and (max-width:700px){
     font-size: 1.5rem;
  }
  @media screen and (max-width:700px){
     font-size: 1.3rem;
  }
  @media screen and (max-width:420px){
     font-size: 1.1rem;
  }
`;

const MotionContent = styled(motion.div)`
font-family: "Tenor Sans", sans-serif;
`;

const MotionSection = styled.div`
  margin-bottom: 2rem; /* Add margin between sections */
`;

const MotionParagraph = styled(motion.p)`
  font-size: 1.2rem; /* Increase font size */
  line-height: 1.6;
  margin-bottom: 1.5rem; /* Add margin between paragraphs */
  text-align: left;
  @media screen and (max-width:700px){
     font-size: 1.2rem;
  }
  @media screen and (max-width:500px){
     font-size: 1.1rem;
  }
  @media screen and (max-width:420px){
   font-size: 1rem;
  }
`;

export default PrivacyPolicyPage;