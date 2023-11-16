import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn, slideUp } from "../style/animations";
import Button from "../components/Button";
import CircularProgressBar from "../components/CircularProgressBar/CircularProgressBar";
import { useMediaQuery } from "react-responsive";

const TopSection = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <TopBannerContainer>
            {!isMobile &&
                <ScrollContainer>
                    <VerticalText>SCROLL IT</VerticalText>
                </ScrollContainer>
            }
            <ContentContainer>
                <SubTitle>Expect</SubTitle>
                <GradientText>Continuous </GradientText>
                <GradientText>Security Testing</GradientText>
                {!isMobile &&
                    <TextContent>Penetration testing and vulnerability management that finds your
                        most critical vulnerabilities and tracks improvement over time
                    </TextContent>
                }
                <ButtonsContainer >
                    <Button variant="primary"> TALK TO US NOW</Button>
                    <Button variant="secondary"> SEE US IN ACTION</Button>
                </ButtonsContainer>
                <ProgressContainer>
                    <CircularProgressBar value="52" text="Tests Per Year" />
                    <CircularProgressBar value="858" text="Research Hours Per Year" />
                    <CircularProgressBar value="14" text="Vulnerabilities Found Per Year" />
                </ProgressContainer>
            </ContentContainer>
        </TopBannerContainer>
    )
}

const TopBannerContainer = styled.div`
    display: flex;
    margin-top: 80px;
    margin-bottom: 80px;
    flex-wrap: wrap;
`

const ScrollContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    height: 0; 
    padding-left: 100px;
`

const ContentContainer = styled.div`
    padding-left:50px;
    border-left: 1px solid #007aff;
    margin-left: 125px;

    @media (max-width: 768px) {
        margin-left: 0;
        border-left: none;
        padding-left: 50px;
    }
`;

const animateBorder = keyframes`
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
`;

const VerticalText = styled.p`
  display: flex;
  justify-content: end;
  transform: rotate(180deg); 
  white-space: nowrap; 
  writing-mode: vertical-rl; 
  font-size: 8px;
  color: #007aff;
  letter-spacing: 2px;
  padding: 0 1em;
  margin:0;
  position: relative; 
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    border-left: 2px solid #007aff;
    animation: ${animateBorder} 1s ease-out infinite; 
  }
`;

const SubTitle = styled.p`
    font-size: 60px;
    padding:0;
    margin:0;
    animation: ${slideUp} 1s ease forwards;
`

const GradientText = styled.p`
    font-size: 7.81vw;
    background: linear-gradient(90deg, #102b51, #0169f9); 
    -webkit-background-clip: text;
    color: transparent;
    text-align: left;
    padding: 0;
    margin: 0;
    font-weight: 900;
    animation: ${slideUp} 1s ease forwards;
`

const TextContent = styled.p`
    word-wrap: break-word;
    width: 70%;
    animation: ${fadeIn} 2s ease forwards;
    font-size:2vw;
`

const ButtonsContainer = styled.div`
    display: flex;
    gap: 0.5em;
    animation: ${fadeIn} 2s ease forwards;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        width: 180px;
        justify-content: center;
        align-items:center;
        
    }
`

const ProgressContainer = styled.div`
    display: flex;
    height: 16em;
    animation: ${fadeIn} 3s ease forwards;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        height: 80%;
        align-items: center;
    }
`

export default TopSection;