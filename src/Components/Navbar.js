import React from "react";
import styled from "styled-components";
import brand from "../Resources/Brand.svg";
import Button from "./Button";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
  background: rgba(42, 93, 50, 0.2);
  backdrop-filter: blur(20px);
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-grow: 0.5;
`;

const Link = styled.li`
  color: #fcfcfc;
  font-size: 0.875rem;
  font-weight: 400;
  list-style-type: none;
  text-decoration: none;
`;

const NavContainer = styled(Container)`
    flex-grow: .5;
`
const LinksContainer = styled(Container)`
    flex-grow: .3;
`


const Navbar = () => {
  return (
    <Wrapper>
      <NavContainer>
        <Brand>
          <img src={brand} />
        </Brand>
        <LinksContainer>
          <Links>
            <Link as='a' href="#">Career</Link>
            <Link as='a' href="#">Blogs</Link>
            <Link as='a' href="#">Leaderboard</Link>
            <Link as='a' href="#">Fees</Link>
          </Links>
          <Button text="TRADE NOW" />
        </LinksContainer>
      </NavContainer>
    </Wrapper>
  );
};

export default Navbar;
