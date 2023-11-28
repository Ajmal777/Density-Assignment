import React from "react";
import styled from "styled-components";
import Title from "./TextComponents/Title";
import Description from "./TextComponents/Description";
import Button from "./Button";

const Wrapper = styled.div`
  width: 50%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 1rem;
  width: ${(props) => props.width ?? "50%"};
  height: ${props => props.height ?? "50%"};
`;
const Image = styled.img`
  width: 30%;
`;

const Card = ({ img, title, desc, buttonText, width }) => {
  return (
    <Wrapper>
      <Container width={width}>
        <Image src={img} />
        <Title
          fontSize={"2rem"}
          color={"white"}
          text={title}
          fontWeight={"500"}
          textAlign={"left"}
        />
        <Description
          fontSize={".8rem"}
          color={"#A9A9A9"}
          text={desc}
          textAlign={"left"}
        />
        {buttonText && <Button text={buttonText} />}
      </Container>
    </Wrapper>
  );
};

export default Card;
