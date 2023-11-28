import React from "react";
import styled from "styled-components";
import BrandLogo from "../Resources/DensityFooterLogo.svg";
import fbIcon from '../Resources/Social Media Icons/fb.svg';
import TwitterIcon from '../Resources/Social Media Icons/Twitter.svg';
import LinkedInIcon from '../Resources/Social Media Icons/LinkedIn.svg';
import InstaIcon from '../Resources/Social Media Icons/Insta.svg';

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: ${(props) => props.width ?? "50%"};
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  color: white;
`;

const Brand = styled.img`
  display: flex;
  align-items: center;
  width: 25%;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;
const Text = styled.p`
  color: #ddd;
  font-size: 0.8rem;
  font-weight: 400;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Brand src={BrandLogo} />
        <Container width={"100%"}>
          <Links>
            <Link href="#">Blog</Link>
            <Link href="#">Fees</Link>
            <Link href="#">Leaderboard</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Privacy Policy</Link>
          </Links>
          <Text>
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
          </Text>
          <Links>
            <Link href="#"><img src={fbIcon}/></Link>
            <Link href="#"><img src={TwitterIcon}/></Link>
            <Link href="#"><img src={LinkedInIcon}/></Link>
            <Link href="#"><img src={InstaIcon}/></Link>
          </Links>
        </Container>
      </Container>
    </Wrapper>
  );
};

export default Footer;
