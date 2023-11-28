import React from "react";
import styled from "styled-components";
import TextBlur from "./TextBlur";

const TitleText = styled.h1`
  display: inline;
  color: ${ props => props.color ?? 'white'};
  text-align: ${props => props.textAlign ?? 'center'};
  font-size: ${(props) => props.fontSize ?? "3.5rem"};
  font-weight: ${ props => props.fontWeight ?? '700'};
  line-height: 1.25;
  margin: 0;
  position: relative;
`;

const Title = ({ text, fontSize, blur, color, textAlign, fontWeight }) => {
  return (
    <TitleText fontSize={fontSize} color={color} textAlign={textAlign} fontWeight={fontWeight}>
      {text}
      {blur && <TextBlur text={text} />}
    </TitleText>
  );
};

export default Title;
