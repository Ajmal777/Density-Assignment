import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: ${props => props.width ?? 'auto'};
  text-align: center;
  padding: 1rem;
`;
const Heading = styled.h1`
  color: ${props => props.color ?? '#EBFF25'} ;
  font-size: ${props => props.fontSize ?? '2rem'} ;
  font-weight: ${props => props.fontWeight ?? '700'};
  margin: 0;
`;
const Text = styled.p`
  color:  ${props => props.color ?? '#A9A9A9'} ;
  margin: 0;
  font-size:  ${props => props.fontSize ?? '1rem'} ;
  font-weight: 500;
`;

const Cell = ({heading, text, width, headSize, textSize, headColor, textColor, headerWeight}) => {
  return (
    <Container width={width}>
        <Heading fontSize={headSize} color={headColor} fontWeight={headerWeight}>{heading}</Heading>
        <Text fontSize={textSize} color={textColor}>{text}</Text>
    </Container>
  )
}

export default Cell