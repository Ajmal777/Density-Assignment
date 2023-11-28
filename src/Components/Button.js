import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    width: ${props => props.width ?? 'fit-content'};
    height: ${props => props.height ?? '3rem'};
    padding: ${props => `${props.py} ${props.px}`};
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: linear-gradient(86deg, #D4F938 23.09%, #32D875 108.69%);
    box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.80);
    backdrop-filter: blur(5px);
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
`;

const Button = ({ text, py='1rem', px='2rem', width, height }) => {
  return (
    <StyledButton px={px} py={py} width={width} height={height} >
        {text}
    </StyledButton>
  )
}

export default Button