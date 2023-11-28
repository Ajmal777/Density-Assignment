import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    border: ${props => props.border ?? '1px solid white'};
    border-radius: ${props => props.radius ?? '0'};
    background: ${props => props.background ?? 'rgba(0, 0, 0, 0.05)'};
    box-shadow: 0px 0px 10px 0px rgba(235, 255, 37, 0.20);
    backdrop-filter: blur(26.25px);
    width: fit-content;
    align-self: center;
    padding: 1rem 2rem;
`

const RowBlocks = ({ children, border, radius, background }) => {
  return (
    <Container border={border} radius={radius} background={background}>
        {children}
    </Container>
  )
}

export default RowBlocks