import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.div`
  text-align: center;
  width: ${(props) => props.width ?? "50%"};
`;
const SectionHeader = ({ width, children }) => {
  return (
    <Wrapper>
      <TextContainer width={width}>
        {children}
      </TextContainer>
    </Wrapper>
  );
};

export default SectionHeader;
