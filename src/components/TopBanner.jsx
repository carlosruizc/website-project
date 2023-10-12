import React from "react";
import styled from "styled-components";
import Button from "./Button";

const TopBanner=()=>{
    return (
        <TopBannerContainer>
            <ScrollContainer>                
                <VerticalText>SCROLL IT</VerticalText>
                <VerticalLine />
            </ScrollContainer>
            <div>
                <SubTitle>Expect</SubTitle>
                <GradientText>Continuous </GradientText>
                <GradientText>Security Testing</GradientText>
                <p>Penetration testing and vulnerability management that finds your
                        most critical vulnerabilities and tracks improvement over time</p>
                
                <div style={{display:"flex", width:"350px", justifyContent:"space-between"}}>
                    <Button variant="primary"> TALK TO US NOW</Button>
                    <Button variant="secondary"> SEE US IN ACTION</Button>
                </div>
                
            </div>
        </TopBannerContainer>
    )
}

const TopBannerContainer=styled.div`
    display: flex;
`

const ScrollContainer=styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
`

const VerticalLine = styled.div`
    width: 0.1px; 
    height: 100%; 
    background-color: #007aff;
    left: 10%;
    transform: translateX(-50%);
    writing-mode: vertical-rl; 
    color: #007aff;
    font-size: 8px;
`;

const VerticalText = styled.p`
  display: flex;
  justify-content: end;
  transform: rotate(180deg); 
  white-space: nowrap; 
  writing-mode: vertical-rl; 
  font-size: 8px;
  color: #007aff;  
`;

const SubTitle=styled.p`
    font-size: 60px;
    padding:0;
    margin:0;
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
`

export default TopBanner;