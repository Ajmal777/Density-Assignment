import React from "react";
import styled from "styled-components";
import Phones from "../Resources/PhoneGroup.svg";
import SectionHeader from "./SectionHeader";
import Title from "./TextComponents/Title";
import TextBlur from "./TextComponents/TextBlur";
import HighlightedText from "./TextComponents/HighlightedText";
import Description from "./TextComponents/Description";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
`;

const RadialBlur = styled.div`
  height: 50%;
  width: 50%;
  position: absolute;
  background: radial-gradient(#78e65d, #1d4e2c);
  filter: blur(100px);
  border-radius: 50%;
  z-index: -1;
`;

const Intro = () => {
  return (
    <Container>
      <SectionHeader width='70%'>
        <Title text={"It's time to trade, the "} fontSize={'5rem'} />
        <HighlightedText text={"future."} color={'linear-gradient(97deg,rgba(212, 249, 56, 0.7) 47.68%, rgba(213, 250, 57, 0.7) 70.85% )'} blur={true} fontSize={'5rem'}/>
        <Description text={"Trade BTC, ETH Futures with 125x leverage and earn rewards."} />
      </SectionHeader>
      <ImageContainer>
        <RadialBlur />
        <Image src={Phones} />
      </ImageContainer>
    </Container>
  );
};

export default Intro;
