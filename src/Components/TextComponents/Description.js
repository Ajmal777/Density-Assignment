import React from 'react'
import styled from 'styled-components';

const Desc = styled.p`
  color: ${ props => props.color ?? '#e7e7ea'};
  text-align: ${props => props.textAlign ?? 'center'};
  font-size: 1.1rem;
  font-weight: 400;
  text-transform: capitalize;
`;


const Description = ({ text, color, textAlign }) => {
  return (
    <Desc color={color} textAlign={textAlign}>
        {text}
    </Desc>
  )
}

export default Description