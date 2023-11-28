import * as React from "react";
import Navbar from "../Components/Navbar";
import "../index.css";
import Intro from "../Components/Intro";
import styled from "styled-components";
import RowBlocks from "../Components/RowBlocks";
import Cell from "../Components/Cell";
import phone1 from "../Resources/Phones Group 1/phone1.svg";
import phone2 from "../Resources/Phones Group 1/phone2.svg";
import phone3 from "../Resources/Phones Group 1/phone3.svg";
import SectionHeader from "../Components/SectionHeader";
import Fee from "../Resources/fee.svg";
import CryptoChart from "../Resources/cryptoChart.svg";
import Button from "../Components/Button";
import HighlightedText from "../Components/TextComponents/HighlightedText";
import Title from "../Components/TextComponents/Title";
import Description from "../Components/TextComponents/Description";
import PriceChart from "../Resources/PriceChart.svg";
import Benefit1 from "../Resources/Benefits/pic1.svg";
import Benefit2 from "../Resources/Benefits/pic2.svg";
import Iphone1 from "../Resources/IPhones/iPhone1.svg";
import Iphone2 from "../Resources/IPhones/iPhone2.svg";
import Iphone3 from "../Resources/IPhones/iPhone3.svg";
import Card from "../Components/Card";
import CreateAccountImg from "../Resources/IPhones/CreateAccount.svg";
import DepositFundImg from "../Resources/IPhones/DepositFund.svg";
import BecomeTraderImg from "../Resources/IPhones/BecomeTrader.svg";
import BrandIcons from "../Components/BrandIcons";
import People from "../Components/People";
import Review1 from "../Resources/Reviews/p1.svg";
import Review2 from "../Resources/Reviews/p2.svg";
import Review3 from "../Resources/Reviews/p3.svg";
import LoudSpeaker from '../Resources/LoudSpeaker.svg';
import Share1 from '../Resources/Share/p1.svg'
import Share2 from '../Resources/Share/p2.svg'
import Share3 from '../Resources/Share/p3.svg'
import bgImg from '../Resources/BackgroundImage.png';
import visionary1 from "../Resources/Visionaries/p1.svg"
import visionary2 from "../Resources/Visionaries/p2.svg"
import visionary3 from "../Resources/Visionaries/p3.svg"
import BigPhone from '../Resources/BigPhone.svg';
import Footer from "../Components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  top: 8rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => props.justifyContent ?? "center"};
  align-items: ${(props) => props.alignItems ?? "center"};
  padding: ${(props) => props.padding ?? "1rem"};
  gap: ${(props) => props.gap ?? "0"};
`;
const Column = styled(Container)`
  top: unset;
  justify-content: ${props => props.justifyContent ?? 'auto'};
  align-items: center;
  width: 100%;
  height: 50%;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
  margin-left: ${props => props.marginLeft ?? '0'};
`;

const BigImage = styled.img`
  height: auto;
  width: 30%;
`;

const Section = styled(Container)`
  background: ${(props) => props.background ?? "transparent"};
  gap: ${props => props.gap ?? '2rem'};
  top: unset;
  align-items: center;
  padding: 4rem 3rem;
  overflow: ${props => props.overflow ?? 'none'};
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  z-index: -1;
`;

const AbsoluteContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  top: ${props => props.top ?? 'unset'};
  bottom: ${props => props.bottom ?? 'unset'};
  right: ${props => props.right ?? 'unset'};
  left: ${props => props.left ?? 'unset'};
  z-index: ${props => props.zIndex ?? 'auto'};
`;

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Section>
          <Intro />
        </Section>
        <Section>
          <RowBlocks borderColor={"1px solid rgba(50, 216, 117, 0.96)"}>
            <Cell headSize={"2.5rem"} heading="00%" text="Conversion Fee" />
            <Cell
              headSize={"2.5rem"}
              heading="500 Mn+"
              text="Lifetime Volume Traded"
            />
            <Cell
              headSize={"2.5rem"}
              heading="250+"
              text="Total Tradable Pairs"
            />
            <Cell headSize={"2.5rem"} heading="15,000+" text="Traders" />
          </RowBlocks>
        </Section>
        <Section>
          <Column>
            <Image src={phone1} />
            <Image src={phone2} />
            <Image src={phone3} />
          </Column>
        </Section>
        <Section>
          <SectionHeader>
            <Title text="Trade More. " />
            <HighlightedText text="Pay Less." />
            <Description text={"Our low Fees Supercharge Your Profits"} />
          </SectionHeader>
          <Row padding="0">
            <Image src={Fee} />
          </Row>
        </Section>
        <Section>
          <SectionHeader>
            <Title text="Explore the Markets like it is your " />
            <HighlightedText text={"Playground."} />
            <Description
              text={
                "Search for your favorite coins and stay ahead of the market"
              }
            />
          </SectionHeader>
          <Image src={CryptoChart} />
          <Button text="Explore Markets" />
        </Section>
        <Section>
          <SectionHeader title="New Frontiers.">
            <HighlightedText text="Unlock " />
            <Title text={"New Frontiers."} />
            <Description
              text={
                "Are you a stock trader looking for new opportunities to make money? We got you covered!"
              }
            />
          </SectionHeader>
          <RowBlocks
            radius={"0.5rem"}
            border={"1px solid rgba(255, 255, 255, 0.25)"}
          >
            <Cell
              width={"min-content"}
              headSize={"1.5rem"}
              headColor={"white"}
              heading={"Same Strategies"}
            />
            <Cell
              width={"min-content"}
              headSize={"1.5rem"}
              headColor={"white"}
              heading={"Same Indicators"}
            />
            <Cell
              width={"min-content"}
              headSize={"1.5rem"}
              headColor={"white"}
              heading={"Better Leverage"}
            />
            <Cell
              width={"min-content"}
              headSize={"1.5rem"}
              headColor={"white"}
              heading={"24x7 Trading"}
            />
          </RowBlocks>
          <Image src={PriceChart} />
        </Section>
        <Section background="white">
          <SectionHeader>
            <Title text={"Start Small. Earn Big."} color="black" />
            <Description
              text={
                "Deposity a minimum of 1000 and get a Deposit bonus + dedicagted relationship manager"
              }
              color={"black"}
            />
          </SectionHeader>
          <Row gap={"1rem"}>
            <Image src={Benefit1} />
            <Image src={Benefit2} />
          </Row>
        </Section>
        <Section gap="4rem">
          <SectionHeader>
            <Title text={"Derivates made simple in "} />
            <HighlightedText text={"3 Easy"} />
            <Title text={" Steps"} />
          </SectionHeader>
          <Row gap="8rem" justifyContent="space-between">
            <Image marginLeft='auto' src={Iphone1} />
            <Card
              img={CreateAccountImg}
              title={"Create an Account"}
              desc={
                "Register & Complete your Verification in less than 2 minutes"
              }
              buttonText={"Trade now"}
            />
          </Row>
          <Row gap="8rem" justifyContent="space-between">
            <Image marginLeft='auto' src={Iphone2} />
            <Card
              img={DepositFundImg}
              title={"Deposit Funds"}
              desc={
                "Add funds quickly using a variety of payment methods"
              }
              buttonText={"Trade now"}
            />
          </Row>
          <Row gap="8rem" justifyContent="space-between">
            <Image marginLeft='auto' src={Iphone3} />
            <Card
              img={BecomeTraderImg}
              title={"Become a Trader"}
              desc={
                "Choose Your Trading Pair & Trade Seamlessly"
              }
              buttonText={"Trade now"}
            />
          </Row>
        </Section>
        <Section>
          <Title text={"Backed by the Best."} />
          <Column>
              <BrandIcons />
              <People />
          </Column>
        </Section>
        <Section background="white">
          <SectionHeader>
            <Title color={"black"} text={"Don’t take our word for it."} />
            <Description color={"black"} text={"Hear it from our expert community of traders who have made insane amounts in a short amount of time"}/>
          </SectionHeader>
          <Row gap={'1rem'}>
              <Image src={Review1} />
              <Image src={Review2} />
              <Image src={Review3} />
          </Row>
        </Section>
        <Section>
          <Image src={LoudSpeaker} />
          <SectionHeader>
            <Title text={"Earn Money. "}/>
            <HighlightedText text={"The Easy Way."} />
            <Description text={"No Complexity of Trading Fee, generate volume and win"} />
          </SectionHeader>
          <Row gap={"1rem"}>
              <Image src={Share1} />
              <Image src={Share2} />
              <Image src={Share3} />
          </Row>
          <Button text={"start earning now"} />
        </Section>
        <Section overflow="hidden">
          <BackgroundImage src={bgImg} />
          <SectionHeader>
            <Title text={"Trade Together. "} />
            <HighlightedText text={"Thrive Together."} />
            <Description text={"Join the fun-filled community on our platform."} />
          </SectionHeader>
          <RowBlocks radius={'0.5rem'} border={"1px solid rgba(255, 255, 255, 0.25)"} background={"rgba(16, 16, 16, 0.40)"} >
            <Cell headerWeight={'600'} heading={"10,000+"} text={"Traders"} headColor={"white"} />
            <Cell headerWeight={'600'} heading={"100Mn"} text={"Daily Volume Traded"} headColor={"white"}/>
            <Cell headerWeight={'600'} heading={"Daily"} text={"Trade Analysis"} headColor={"white"} />
            <Cell headerWeight={'600'} heading={"Live"} text={"Signals"} headColor={"white"} />
          </RowBlocks>
          <Button text={"Join community"} />
        </Section>
        <Section background="#19191D">
          <SectionHeader>
            <Title text={"Meet the "}/>
            <HighlightedText text={"Visionaries"} />
            <Title text={" behind Density."} />
          </SectionHeader>
          <Row gap={"1rem"}>
              <Image src={visionary1} />
              <Image src={visionary2} />
              <Image src={visionary3} />
          </Row>
        </Section>
        <Section>
          <Column justifyContent="space-between">
            <AbsoluteContainer top={'-5rem'} zIndex={'-1'}>
              <Title text={"Get Started Now."} fontSize={"6rem"} />
            </AbsoluteContainer>
            <BigImage src={BigPhone}/>
            <AbsoluteContainer bottom="5rem">
              <Button text={"Start Trading!"} px="8rem" py="2rem" width={'35vw'}/>
            </AbsoluteContainer>
          </Column>
        </Section>
        <Section background="#229851">
          <Footer />
        </Section>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
