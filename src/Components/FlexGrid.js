import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props => props.gap ?? '1.5rem'};
  width: ${props => props.width ?? 'auto'};
`;

const FlexGrid = ({ gap, justifyContent, width, children }) => {
  return (
    <Container gap={gap} justifyContent={justifyContent} width={width} >
        { children }
    </Container>
  )
}

export default FlexGrid