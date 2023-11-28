import React from 'react'
import styled from 'styled-components';

const Blur = styled.span`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${ props => props.color ?? 'white'};
  -webkit-background-clip: text;
  filter: blur(5px);
  z-index: -1;
`;

const TextBlur = ({ text, color }) => {
  return (
    <Blur color={color}>
        {text}
    </Blur>
  )
}

export default TextBlur