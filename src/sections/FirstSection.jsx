import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Carousel } from 'primereact/carousel';
import NextButton from "../icons/NextButton"
import PrevButton from "../icons/PrevButton"
import MenuArrow from "../icons/MenuArrow";
import TopSection from "../sections/TopSection";
import InsightsCarousel from "../components/InsightsCarousel";
import ClientsCarousel from "../components/ClientsCarousel";
import VideoBackground from "../components/VideoBackground"
import { Link } from "gatsby";
import StickyBox from "react-sticky-box";
import { fadeIn, fadeOut } from "../style/animations";
import { useMediaQuery } from "react-responsive";
import { cases, features, talent, videos } from "../data/Content";

const FirstSection = () => {
    const [activeSection, setActiveSection] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const isMobile = useMediaQuery({ query: "(max-width: 520px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 768px)" });


    const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const ourStoryOffset = document.getElementById("our-story").offsetTop - 250;
        const platformOffset = document.getElementById("platform").offsetTop - 150;
        const redTeamOffset = document.getElementById("red-team").offsetTop - 150;
        const solutionsOffset = document.getElementById("solutions").offsetTop - 150;
        const demoOffset = document.getElementById("demo").offsetTop - 150;
        const insightsOffset = document.getElementById("insights").offsetTop - 150;
        const blueContainerOffset = document.getElementById("blue-container").offsetTop - 450;

        if (scrollY >= ourStoryOffset && scrollY < platformOffset) {
            setActiveSection("our-story");
        } else if (scrollY >= platformOffset && scrollY < redTeamOffset) {
            setActiveSection("platform");
        } else if (scrollY >= redTeamOffset && scrollY < solutionsOffset) {
            setActiveSection("red-team");
        } else if (scrollY >= solutionsOffset && scrollY < demoOffset) {
            setActiveSection("solutions");
        } else if (scrollY >= demoOffset && scrollY < insightsOffset) {
            setActiveSection("demo");
        } else if (scrollY >= insightsOffset && scrollY < blueContainerOffset) {
            setActiveSection("insights");
        } else if (scrollY >= blueContainerOffset) {
            setActiveSection("blue-container");
        } else {
            setActiveSection("");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const featureTemplate = (feature) => {
        return (
            <FeatureContainer>
                {!isMobile && <FeatureImage src={feature.img} />}
                <FeatureContent>
                    <p>{feature.text}</p>
                    <Button variant="white-blue" >LEARN MORE</Button>
                </FeatureContent>
            </FeatureContainer>
        )
    }

    const talentTemplate = (talent) => {
        return (
            <TalentContainer>
                <Name>{talent.name}</Name>
                <Country>{talent.country}</Country>
                <RoundContainer>
                    <RoundImage src={talent.avatar} />
                </RoundContainer>
                <Stack>{talent.stack}</Stack>
                <Badges>
                    <BadgeContainer src={talent.badge1} />
                    <BadgeContainer src={talent.badge2} />
                    <BadgeContainer src={talent.badge3} />
                    <BadgeContainer src={talent.badge4} />
                    <BadgeContainer src={talent.badge5} />
                </Badges>
            </TalentContainer>
        )
    }

    const caseTemplate = (caseItem) => {
        return (
            <CaseContainer key={caseItem.item}>
                <p>{caseItem.item}</p>
                <RoundContainerSmall>
                    <RoundImageSmall src={caseItem.img} alt={caseItem.item} />
                </RoundContainerSmall>
                <div style={{ margin: "10px 10px 20px 10px", display: "flex" }}>
                    <MenuArrow color="grey" />
                </div>

            </CaseContainer>
        )
    }

    const videoTemplate = (videoItem) => {
        return (
            <VideoContainer>
                <Iframe src={videoItem.video} />
                <DemoText>
                    <SubTitle style={{ width: "40%" }}><strong>{videoItem.item}</strong></SubTitle>
                    <p style={{ width: "60%" }}>{videoItem.text}</p>
                </DemoText>
            </VideoContainer>
        )
    }

    const onCarouselPageChange = (event) => {
        setActiveIndex(event.page);
    };

    return (
        <>
            <TopSection />
            <div>
                <AnimatedStickyBox activeSection={activeSection}>
                    <ScrollContainer >
                        <VerticalText to="/#our-story" className={activeSection === "our-story" ? "active" : ""}>OUR STORY</VerticalText>
                        <VerticalText to="/#platform" className={activeSection === "platform" ? "active" : ""}>PLATFORM</VerticalText>
                        <VerticalText to="/#red-team" className={activeSection === "red-team" ? "active" : ""}>RED TEAM</VerticalText>
                        <VerticalText to="/#solutions" className={activeSection === "solutions" ? "active" : ""}>SOLUTIONS</VerticalText>
                        <VerticalText to="/#demo" className={activeSection === "demo" ? "active" : ""}>DEMO</VerticalText>
                        <VerticalText to="/#insights" className={activeSection === "insights" ? "active" : ""}>INSIGHTS</VerticalText>
                    </ScrollContainer>
                </AnimatedStickyBox>
                <TopBannerContainer>
                    <VideoBackground />
                    <RightContainer>

                        <SectionContainer id="our-story">
                            <Title>WHAT WE DO</Title>
                            <SubTitle>The Premier Security Testing Platform</SubTitle>
                            <p>With a one-off pentest, companies leave themselves vulnerable. Stay ahead of threats with strategic security testing that scales to cover your cloud, APIs, web apps, host infrastructure and mobile.</p>
                            <Button variant="primary">GET THE DETAILS</Button>
                        </SectionContainer>

                        <SectionContainer id="platform">
                            <Title>THE PLATFORM</Title>
                            <SubTitle>Delivering Continuous and Scalable Security Testing</SubTitle>
                            <p>Expect an adversarial penetration testing experience that can be launched in days, not weeks, and reduces your risk over time.</p>
                            <Button variant="primary">HOW IT WORKS</Button>
                        </SectionContainer>

                        <SectionContainerDouble>

                            <Carousel
                                value={features}
                                onPageChange={onCarouselPageChange}
                                numVisible={1}
                                numScroll={1}
                                orientation="vertical"
                                circular
                                autoplayInterval={3000}
                                itemTemplate={featureTemplate}
                                style={{ width: isTablet ? "75%" : "50%" }}
                                prevIcon="null"
                                nextIcon="null"
                                verticalViewPortHeight={isMobile ? "150px" : isTablet ? "300px" : "350px"}
                            />
                            {!isTablet &&

                                <CountContainer>
                                    <div >
                                        <VerticalTextBT><strong>{activeIndex + 1}</strong>-7</VerticalTextBT>
                                        <VerticalTextBT></VerticalTextBT>
                                    </div>
                                    <VerticalLine />
                                </CountContainer>

                            }
                            <div style={{ width: "50%" }}>
                                {features.map((feature, index) => (
                                    index === activeIndex
                                        ?
                                        <BlueText key={index} style={{ fontSize: "1.5rem" }}><strong>{feature.item}</strong></BlueText>
                                        :
                                        <p key={index}>{feature.item}</p>

                                ))}
                            </div>
                        </SectionContainerDouble>

                    </RightContainer>
                </TopBannerContainer>


                <ClientsCarousel />


                <RedContainer id="red-team">
                    <MapContainer>
                        <TextContainer>
                            <WhiteTitle>THE SYNACK RED TEAM</WhiteTitle>
                            <WhiteSubTitle>Expect Elite Talent</WhiteSubTitle>
                            <WhiteText>The Synack Red Team has you covered. Our elite, vetted community of security researchers brings a diverse set of skills to every test to support your teams’ pentesting initiatives.</WhiteText>
                            <ButtonsContainer>
                                <Button variant="black" >JOIN THE READ TEAM</Button>
                                <Button variant="white" >LEARN MORE</Button>
                            </ButtonsContainer>
                        </TextContainer>
                        <Carousel
                            value={talent}
                            numVisible={1}
                            numScroll={1}
                            orientation="vertical"
                            circular
                            autoplayInterval={3000}
                            itemTemplate={talentTemplate}
                            style={{ width: "250px", marginRight: "100px", height: "450px", display: "flex", alignItems: "center", justifyContent: "center" }}
                            prevIcon="null"
                            nextIcon="null"
                            verticalViewPortHeight="350px" />
                    </MapContainer>
                </RedContainer>

                <UseCaseContainer id="solutions">
                    <Title>USE CASES</Title>
                    <SubTitle><strong><BlueText>Expect</BlueText></strong> solutions that scale</SubTitle>
                    <p>Synack provides the broadest coverage of security testing for company assets and infrastructure.</p>

                    <CasesContainer>
                        {cases.map(caseItem => (caseTemplate(caseItem)))}
                    </CasesContainer>

                </UseCaseContainer>

                <DemoContainer id="demo">
                    <ShapeContainer>
                        <Title>DEMO</Title>
                        <SubTitle>Learn how it <strong><BlueText>works</BlueText></strong></SubTitle>
                        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                            {isTablet
                                ?
                                <VideoContainer style={{ width: "80%" }}>
                                    <Iframe src={videos[0].video} />
                                    <DemoText>
                                        <SubTitle style={{ width: "40%" }}><strong>{videos[0].item}</strong></SubTitle>
                                        <p style={{ width: "60%" }}>{videos[0].text}</p>
                                    </DemoText>
                                </VideoContainer>
                                :

                                <Carousel
                                    value={videos}
                                    numVisible={1}
                                    numScroll={1}
                                    circular
                                    autoplayInterval={3500}
                                    itemTemplate={videoTemplate}
                                    nextIcon={NextButton}
                                    prevIcon={PrevButton}
                                    style={{ width: "100%", justifyContent: "center" }}
                                />

                            }
                        </div>
                    </ShapeContainer>
                </DemoContainer>

                <div id="insights" style={{ display: "flex", justifyContent: "center" }}>
                    <InsightsCarousel />
                </div>

                <BlueContainer id="blue-container">
                    <PowerContainer>
                        <BlueTitle><strong>Expect Synack</strong></BlueTitle>
                        <BlueTitle>Ready to get started?</BlueTitle>
                        <Button variant="white-blue" >CONTACT US</Button>
                    </PowerContainer>
                </BlueContainer>


            </div>

        </>
    )
}

const TopBannerContainer = styled.div`
    display: flex;
    margin-bottom:3vw;
    padding-left:15vw;
    border-left: 1px solid gray;
`

const AnimatedStickyBox = styled(StickyBox)`
  padding-top: 20px;
  z-index: ${(props) => (props.activeSection === "blue-container" ? -1 : 999)};
  animation: ${(props) =>
        props.activeSection === "" ? fadeIn : fadeOut} 0.5s ease-in-out;
`;


const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
`

const ScrollContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    height: 0; 
    padding-left: 9vw;
`

const VerticalText = styled(Link)`
    display: flex;
    justify-content: end;
    transform: rotate(180deg); 
    white-space: nowrap; 
    writing-mode: vertical-rl; 
    font-size: 8px;
    color: grey; 
    margin-top: 20px;
    letter-spacing: 2px;
    text-decoration: none;
    width: 20px;
    z-index:9999;

    &:hover {
        color: #007aff;
        font-weight: bold;
    }

    &.active {
        text-decoration: underline;
        font-weight: bold;
        color: #007aff;
      }
`;

const CountContainer = styled.div`
    display: flex;
    justify-content: center;
    min-width: 100px;
    height: 350px;
`

const SectionContainer = styled.div`
    margin-bottom: 5vw;
`

const SectionContainerDouble = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const VerticalLine = styled.div`
    width: 0.1px; 
    height: 100%; 
    background-color: #007aff;
    transform: translateX(-50%);
    left: 10%;
    writing-mode: vertical-rl; 
    color: #007aff;
    font-size: 8px;
    z-index:-1;
    
`;

const VerticalTextBT = styled.p`
    display: flex;
    justify-content: end; 
    white-space: nowrap; 
    writing-mode: vertical-rl; 
    font-size: 14px;
    color: black; 
    margin-top: 20px;
    letter-spacing: 5px;
`;

const Title = styled.p`
    color: #007aff;
    font-size: 11px;
    font-weight:bold;
    letter-spacing: 2px;  
`

const SubTitle = styled.p`
    font-size: 20px;
`

const RedContainer = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;    
    background: linear-gradient(45deg, red, black);    
    overflow: hidden;
`

const MapContainer = styled.div`
    display: flex;    
    justify-content: space-around;
    align-items: center;
    background-image: url(/static/images/red-map.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 500px;
    width: 100%;
`

const TextContainer = styled.div`
    display: flex;    
    flex-direction: column;
    margin-left: 100px;
    width: 400px;
`

const WhiteTitle = styled.p`
    color: white;
    font-size: 11px;
    font-weight:bold;
    letter-spacing: 2px;  
`

const WhiteSubTitle = styled.p`
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
`

const WhiteText = styled.p`
    color: white;
    font-size: 14px;
`

const ButtonsContainer = styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

const FeatureContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    padding: 20px;
    max-width: 450px;
    min-width: 200px;
    margin-right:20px;
    border-radius: 20px;
    box-shadow:5px 5px 5px #888888;
    align-items: center;
`

const FeatureImage = styled.img`    
    margin-right: 10px;
    height: fit-content;
    width: 50%;    
`

const FeatureContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    font-size:1.5vw;
    
`

const TalentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height:100%;
    background-color: white;
    width: 100%;
    color: black;
    border-radius: 10px;
    margin: 0 auto;
`

const Name = styled.p`
    margin: 10px 0 0 0 ;
    font-size:20px;
    font-weight:bold;
`

const Country = styled.p`
    font-size: 12px;
    font-weight:bold;
    margin: 0;
    color: red;
`

const Stack = styled.p`
    margin:0;
    font-size: 12px;
    font-weight: lighter;
    text-align: center;
    padding: 0 20px 0 20px;
`

const RoundContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px 0 10px 0;
`;

const RoundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Badges = styled.div`
    display: flex;
    width:85%;
    justify-content: space-between;
    align-items: center;
    margin:10px 10px 20px 10px;
`

const BadgeContainer = styled.img`
    height:30px;
`

const UseCaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 40px 40px 15vw;
    background-color: white;
`

const ShapeContainer = styled.div`
    display: flex; 
    flex-direction: column;
    background-image: url(/static/images/demo-shape.webp);
    background-repeat: no-repeat;
    background-position: left;
    background-size: auto 100%;
    height: 500px;
    width: 100%;
`

const BlueText = styled.span`
  color: #007aff;
`;

const CasesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const CaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #f7f7f7;
    width: 100%;
    color: black;
    border-radius: 10px;
    margin: 10px 10px 10px 10px;
    max-width:150px;
    height:200px;
    transition: box-shadow 0.3s ease; 

  &:hover {
    background-color: white;
    box-shadow: 0 0 20px #007aff; 
  }
`

const RoundContainerSmall = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px;
  box-shadow: 5px 5px 5px #888888;
  background-color: #f7f7f7;
`;

const RoundImageSmall = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DemoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 40px 40px 15vw;
    background-color: #ebf3ff;
`

const VideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;

    @media (max-width: 768px) {
        width: 50%;
    }
`

const Iframe = styled.iframe`
    height: 250px;
    border-radius:20px;
    margin: 20px;
`

const DemoText = styled.div`
    display: flex;
    flex-direction: row;

`

const BlueContainer = styled.div`
    display: flex;    
    flex-direction: column;     
    background: linear-gradient(45deg, #0464f4, #016bff);    
    overflow: hidden;
    color: white;
    padding: 5vw 10vw 5vw 15vw;

    @media (max-width: 768px) {
        min-height:40vw;
    }

    @media (max-width: 480px) {
        min-height:50vw;
    }
`

const PowerContainer = styled.div`
    display: flex; 
    flex-direction: column;     
    background-image: url(/static/images/circle-power.webp);
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto 100%;
    height: 30vw;
    width: 100%;
`

const BlueTitle = styled.p`
    display: flex;
    color: white;
    font-size: 6vw;
    padding: 10px;
    width: 60%;
    margin: 0;
`

export default FirstSection;