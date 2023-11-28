import React from "react";
import styled from "styled-components";
const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: max-content;
  gap: 0.5rem;
`;

const Image = styled.img`
  align-items: center;
  max-width: 150px;
  height: 100%;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3`
  color: #fff;
  margin: 0;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
`;
const Designation = styled.p`
  color: #808090;
  margin: 0;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 400;
`;

const Person = ({img, name, designation}) => {
  return (
    <Avatar>
      <Image src={img}/>
      <Details>
        <Name>{name}</Name>
        <Designation>{designation}</Designation>
      </Details>
    </Avatar>
  );
};

export default Person;