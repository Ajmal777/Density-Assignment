import React from 'react'
import styled from 'styled-components';
import TextBlur from './TextBlur';

const Highlight = styled.h1`
  display: inline;
  text-align: center;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
  font-size: ${props => props.fontSize ?? '3.5rem'};
  -webkit-text-fill-color: transparent;
  background: ${(props) => props.color ?? "#EBFF25"};
  background-clip: text;
  -webkit-background-clip: text;
  position: relative;
`;


const HighlightedText = ({ text, color, fontSize, blur }) => {
  return (
    <Highlight color={color} fontSize={fontSize}>
        {text}
        {blur && <TextBlur text={text} color={color}/>}
    </Highlight>
  )
}

export default HighlightedText