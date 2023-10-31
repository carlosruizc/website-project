import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Carousel } from 'primereact/carousel';
import NextButton from "../icons/NextButton"
import PrevButton from "../icons/PrevButton"
import MenuArrow from "../icons/MenuArrow";


const FirstSection = () => {
    const features = [
        {
            item:"Penetration Testing",
            img:"/static/features/penetrationtesting.webp",
            text:"Continuous pentesting performed by the Synack Red Team on cloud, web apps, host infrastructure, APIs and mobile."
        },
        {
            item:"Vulnerability Management",
            img:"/static/features/vulnarabilitymanagement.webp",
            text:"Discover, assess, remediate and verify vulnerability patches."       
        },
        {
            item:"Reporting & Real Time Analytics",
            img:"/static/features/realtimeanalytics.webp",
            text:"Discover, assess, remediate and verify vulnerability patches."            
        },
        {
            item:"Testing Controls",
            img:"/static/features/testingcontrols.webp",
            text:"Complete visibility and control over all researchers and testing across your environment."            
        },
        {
            item:"API & Integrations",
            img:"/static/features/apiintegrations.webp",
            text:"Improve responsiveness, triage and remediate vulnerabilities with integrated workflows."            
        },
        {
            item:"Operations & Support",
            img:"/static/features/operationssupport.webp",
            text:"Dedicated teams will verify your exploitable vulnerabilities, prioritize testing activities and scope your attack surface."           
        },
        {
            item:"Global Community of Talent",
            img:"/static/features/globalcommunity.webp",
            text:"Access our global team of security researchers with a diverse set of skills – all through the platform."            
        },
    ]

    const clients = [
        {
            item:"0",
            src:"/static/clients/allianz-logo.webp"            
        },
        {
            item:"1",
            src:"/static/clients/BoubyanBank.svg"            
        },
        {
            item:"2",  
            src:"/static/clients/cdc.svg"          
        },
        {
            item:"3",
            src:"/static/clients/cleveland-clinic.svg"            
        },
        {
            item:"4",  
            src:"/static/clients/Cognizant_Logo.svg"                      
        },
        {
            item:"5",
            src:"/static/clients/DefenseDigital.svg"                               
        },
        {
            item:"6",  
            src:"/static/clients/DepartmentHealthHuman.svg"          
        },
        {
            item:"7",
            src:"/static/clients/Dept-of-Transportation-Logo.svg"       
        },
        {
            item:"8",     
            src:"/static/clients/DISA.svg"       
        },
        {
            item:"9",    
            src:"/static/clients/Eastman_Chemical_Company_logo.svg"        
        },
        {
            item:"10",      
            src:"/static/clients/everlywell-logo.webp"      
        },
        {
            item:"11",   
            src:"/static/clients/FannieMae.svg"         
        },
        {
            item:"12",
            src:"/static/clients/freshfields-logo-vert.svg"            
        },
        {
            item:"13",  
            src:"/static/clients/GSA.svg"          
        },
        {
            item:"14",
            src:"/static/clients/InternalRevenueService.svg"            
        },
        {
            item:"15",
            src:"/static/clients/noy-logo.webp"            
        },
        {
            item:"16",   
            src:"/static/clients/StateofColorado.svg"         
        },
        {
            item:"17",    
            src:"/static/clients/SynSaber-Logo-Stacked-DBlue.svg"        
        },
        {
            item:"18",   
            src:"/static/clients/UnitedStatesAirForcе.svg"         
        },
        {
            item:"19",     
            src:"/static/clients/UnitedStatesArmy.svg"       
        },
    ]

    const talent = [
        {
            name:"Busra",
            country:"United States",
            avatar:"/static/talent/busra.webp",        
            stack:"WebApp / API / VMs / Android / Network / Recon / Cloud / Mobile",
            badge1:"/static/badges/artemis_3-1.svg", 
            badge2:"/static/badges/circle_of_trust-1.svg", 
            badge3:"/static/badges/envoy-1.svg", 
            badge4:"/static/badges/hero-1.svg", 
            badge5:"/static/badges/polygon-empty.webp", 
        },
        {
            name:"Ozgur",
            avatar:"/static/talent/ozgur.webp",
            country:"Turkey",
            stack:"WebApp / API / VMs / Android / Network / Recon / Cloud / Mobile",
            badge1:"/static/badges/artemis_3-1.svg", 
            badge2:"/static/badges/circle_of_trust-1.svg", 
            badge3:"/static/badges/envoy-1.svg", 
            badge4:"/static/badges/hero-1.svg", 
            badge5:"/static/badges/polygon-empty.webp", 
        },
        {
            name:"Adam Logue",
            country:"United States",
            avatar:"/static/talent/adam.webp",
            stack:"WebApp / API / VMs / Android / Network / Recon / Cloud / Mobile",
            badge1:"/static/badges/guardian_of_trust-2.svg", 
            badge2:"/static/badges/srt_of_the_year-1.svg", 
            badge3:"/static/badges/SRT-of-the-month.svg", 
            badge4:"/static/badges/titan.svg", 
            badge5:"/static/badges/polygon-empty.webp",        
        },
        {
            name:"Magic Sam",
            country:"United States",
            avatar:"/static/talent/magics.webp",
            stack:"WebApp / API / VMs / Android / Network / Recon / Cloud / Mobile",
            badge1:"/static/badges/artemis_3-1.svg", 
            badge2:"/static/badges/circle_of_trust-1.svg", 
            badge3:"/static/badges/guardian_of_trust-2.svg", 
            badge4:"/static/badges/polygon-empty.webp", 
            badge5:"/static/badges/polygon-empty.webp", 
        },
        {
            name:"niksthehacker",
            country:"India",
            avatar:"/static/talent/niks.webp",
            stack:"WebApp / API / VMs / Android / Network / Recon / Cloud / Mobile",
            badge1:"/static/badges/srt_of_the_year-1.svg", 
            badge2:"/static/badges/SRT-of-the-month.svg", 
            badge3:"/static/badges/envoy-1.svg", 
            badge4:"/static/badges/hero-1.svg", 
            badge5:"/static/badges/titan.svg", 
        },
        
    ]

    const cases = [
        {
            item:"Penetration Testing",
            img:"/static/cases/penetration-testing.svg",            
        },
        {
            item:"API Security Testing",
            img:"/static/cases/api-security-testing.svg",  
        },
        {
            item:"Application Security Testing",
            img:"/static/cases/application-security-testing.svg",           
        },
        {
            item:"Cloud Security Testing",
            img:"/static/cases/cloud-security.svg",           
        },
        {
            item:"Testing for Compliance",
            img:"/static/cases/compliance.svg",           
        },
        {
            item:"Bridging the Cyber Talent Gap",
            img:"/static/cases/talent-gap.svg",         
        },
    ]

    const videos = [
        {
            item:"The Synack Platform",
            text:"A continuous and consistent approach to pentesting that brings together security researchers and one powerful platform.  ",
            video:"https://www.youtube.com/embed/N-yDyAwli6k",            
        },
        {
            item:"A Better Way to Pentest",
            text:"Traditional pentesting can’t keep pace with digital transformation, the software development lifecycle and zero day attacks. Choose Synack, a better way to pentest.   ",
            video:"https://www.youtube.com/embed/N-yDyAwli6k",            
        },
        {
            item:"Demo Series: Cut to the Chase",
            text:"Watch our live demo series that gets to the point without wasting your time. Don’t miss the latest episodes on security testing for APIs, cloud, compliance and more.",
            video:"https://www.youtube.com/embed/N-yDyAwli6k",            
        },
        {
            item:"Synack UnPlugged",
            text:"Hear cybersecurity executives and experts share their unfiltered take on some of the latest trends in the industry. ",
            video:"https://www.youtube.com/embed/N-yDyAwli6k",            
        },
    ]

    const blogs = [
        {
            item:"How to Stay Secure Amid AI Mania",
            src:"/static/blogs/synack-blog-banner-repost-RH-ISAC-AI-1.webp"            
        },
        {
            item:"Securing at the Rate of Innovation: Investment in Control and Visibility of Testing Traffic ",
            src:"/static/blogs/synack-dev-teams-security-process-patching.webp"            
        },
        {
            item:"Empowering Your Developer Teams: How to Overcome “Us vs. Them” with Vulnerability Remediation",  
            src:"/static/blogs/synack-launchpoint-plus-blog-1.webp"          
        },
        {
            item:"You Are the Weakest Link: Securing the Human Element",
            src:"/static/blogs/synack-securing-layer8-blog-banner.webp"            
        },
        {
            item:"Why You Need a Vulnerability Disclosure Program (VDP)",  
            src:"/static/blogs/synack-Managed-VDP-blog-banner.jpg"                      
        },
    ]


    const featureTemplate =(feature)=>{
        return (
            <FeatureContainer>
                <FeatureImage src={feature.img} />
                <FeatureContent>
                    <p>{feature.text}</p>
                    <Button variant="white-blue" >LEARN MORE</Button>
                </FeatureContent>   
            </FeatureContainer>
        )
    }

    const clientTemplate =(client)=>{
        return (
            <LogoContainer>
                <Logo src={client.src}></Logo>    
            </LogoContainer>
                     
        )
    }

    const talentTemplate =(talent)=>{
        return (
            <TalentContainer>
                <Name>{talent.name}</Name>
                <Country>{talent.country}</Country>
                <RoundContainer>
                    <RoundImage src={talent.avatar} />
                </RoundContainer>
                <Stack>{talent.stack}</Stack>
                <Badges>
                    <BadgeContainer src={talent.badge1}/>
                    <BadgeContainer src={talent.badge2}/>
                    <BadgeContainer src={talent.badge3}/>
                    <BadgeContainer src={talent.badge4}/>
                    <BadgeContainer src={talent.badge5}/>
                </Badges>
            </TalentContainer>                     
        )
    }

    const caseTemplate =(caseItem)=>{
        return (
            <CaseContainer>
                <p>{caseItem.item}</p>
                <RoundContainerSmall>
                    <RoundImageSmall src={caseItem.img} />
                </RoundContainerSmall>
                <div style={{margin:"10px 10px 20px 10px", display:"flex"}}>
                    <MenuArrow color="grey" />
                </div>
                 
            </CaseContainer>
        )
    }

    const videoTemplate =(videoItem)=>{
        return (
            <VideoContainer>
                <Iframe src={videoItem.video} />
                <DemoText>
                    <SubTitle style={{width:"40%"}}><strong>{videoItem.item}</strong></SubTitle>
                    <p style={{width:"60%"}}>{videoItem.text}</p>                
                </DemoText>                
            </VideoContainer>
        )
    }

    const blogTemplate =(blogItem)=>{
        return (
            <BlogContainer>
                <img src={blogItem.src} style={{borderRadius:"20px"}} />
                <div style={{margin:"20px"}}>
                    <SubTitle >{blogItem.item}</SubTitle> 
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                        <Button variant="gray" >BLOG</Button>
                        <MenuArrow color="grey" />
                    </div>  
                    
                </div>
                
            </BlogContainer>
        )
    }

    return (
        <>
        <TopBannerContainer>
            <ScrollContainer>
                <div>
                    <VerticalText>OUR STORY</VerticalText>
                    <VerticalText>PLATFORM</VerticalText> 
                    <VerticalText>RED TEAM</VerticalText>
                    <VerticalText>SOLUTIONS</VerticalText>
                    <VerticalText>DEMO</VerticalText>
                    <VerticalText>INSIGHTS</VerticalText>   
                </div>               
                <VerticalLine />
            </ScrollContainer>
            <RightContainer>
                <SectionContainer>
                    <Title>WHAT WE DO</Title>
                    <SubTitle>The Premier Security Testing Platform</SubTitle>
                    <p>With a one-off pentest, companies leave themselves vulnerable. Stay ahead of threats with strategic security testing that scales to cover your cloud, APIs, web apps, host infrastructure and mobile.</p>
                    <Button variant="primary">GET THE DETAILS</Button>
                </SectionContainer>
                <SectionContainer>
                    <Title>THE PLATFORM</Title>
                    <SubTitle>Delivering Continuous and Scalable Security Testing</SubTitle>
                    <p>Expect an adversarial penetration testing experience that can be launched in days, not weeks, and reduces your risk over time.</p>
                    <Button variant="primary">HOW IT WORKS</Button>
                </SectionContainer>
                <SectionContainerDouble>
                    <Carousel 
                        value={features} 
                        numVisible={1} 
                        numScroll={1} 
                        orientation="vertical" 
                        circular 
                        autoplayInterval={3000} 
                        itemTemplate={featureTemplate} 
                        style={{width:"100%"}} 
                        prevIcon="null" 
                        nextIcon="null"              
                        verticalViewPortHeight="350px"    
                    />
                    <CountContainer>
                        <div >
                            <VerticalTextBT><strong>1</strong>-7</VerticalTextBT>
                            <VerticalTextBT></VerticalTextBT>
                        </div>               
                        <VerticalLine />
                    </CountContainer>
                    <div style={{width:"100%"}}>
                        <BoldText>Penetration Testing</BoldText>
                        <BoldText>Vulnerability Management</BoldText>
                        <BoldText>Reporting & Real Time Analytics</BoldText>
                        <BoldText>Testing Controls</BoldText>
                        <BoldText>API & Integrations</BoldText>
                        <BoldText>Operations & Support</BoldText>
                        <BoldText>Global Community of Talent</BoldText>
                    </div>
                </SectionContainerDouble>
            </RightContainer>            
        </TopBannerContainer>
        <Carousel 
            value={clients} 
            numVisible={5} 
            numScroll={1} 
            circular 
            autoplayInterval={3000} 
            itemTemplate={clientTemplate} 
            style={{margin:"5px 30px 5px 30px"}} 
            nextIcon={NextButton} 
            prevIcon={PrevButton}
        />
        <RedContainer>
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
                    style={{width:"250px", marginRight:"100px", height:"450px", display:"flex", alignItems:"center", justifyContent:"center"}} 
                    prevIcon="null" 
                    nextIcon="null" 
                    verticalViewPortHeight="300px"/>             
            </MapContainer>            
        </RedContainer>
        <UseCaseContainer>
            
                <Title>USE CASES</Title>
                <SubTitle><strong><BlueText>Expect</BlueText></strong> solutions that scale</SubTitle>
                <p>Synack provides the broadest coverage of security testing for company assets and infrastructure.</p>
                <CasesContainer>
                    {cases.map(caseItem=>(caseTemplate(caseItem)))}
                </CasesContainer>
                      
        </UseCaseContainer>
        <DemoContainer>
            <ShapeContainer>
                <Title>DEMO</Title>
                <SubTitle>Learn how it <strong><BlueText>works</BlueText></strong></SubTitle>
                <div style={{display:"flex", width:"600px", marginRight:"auto", marginLeft:"auto"}}>
                <Carousel 
                    value={videos} 
                    numVisible={1} 
                    numScroll={1} 
                    circular 
                    autoplayInterval={3500} 
                    itemTemplate={videoTemplate} 
                    nextIcon={NextButton} 
                    prevIcon={PrevButton}
                    style={{width:"100%"}} 
                />
                </div>
            </ShapeContainer> 
        </DemoContainer>
        <InsightsContainer>            
                <SubTitle><strong>1</strong> - 5</SubTitle>
                <div style={{display:"flex", width:"800px", marginRight:"auto", marginLeft:"auto"}}>
                <Carousel 
                    value={blogs} 
                    numVisible={2} 
                    numScroll={1} 
                    circular 
                    autoplayInterval={4000} 
                    itemTemplate={blogTemplate} 
                    nextIcon={NextButton} 
                    prevIcon={PrevButton}
                    style={{width:"100%"}} 
                />
                </div>            
        </InsightsContainer>
        <BlueContainer>
            <PowerContainer>
                <BlueTitle><strong>Expect Synack</strong></BlueTitle>
                <BlueTitle>Ready to get started?</BlueTitle>
                <Button variant="white-blue" >CONTACT US</Button>
            </PowerContainer>            
        </BlueContainer>        
        </>
    )   
}

const TopBannerContainer=styled.div`
    display: flex;
`

const RightContainer=styled.div`
    display: flex;
    flex-direction: column;
`

const ScrollContainer=styled.div`
    display: flex;
    justify-content: center;
    min-width: 250px;
    height: 50vw;
`

const CountContainer=styled.div`
    display: flex;
    justify-content: center;
    min-width: 100px;
`

const SectionContainer=styled.div`
    padding-top: 75px;
`

const SectionContainerDouble=styled.div`
    display: flex;
    padding-top: 100px;
    height: 35vw;
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
    margin-top: 20px;
    letter-spacing: 2px;
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

const Title=styled.p`
    color: #007aff;
    font-size: 11px;
    font-weight:bold;
    letter-spacing: 2px;  
`

const SubTitle=styled.p`
    font-size: 20px;
`

const BoldText = styled.p`
    font-size: 20px;
    font-weight: bold;
`

const LogoContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 15px;
`

const Logo = styled.img`
    height: 40px;
`
const RedContainer=styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;    
    background: linear-gradient(45deg, red, black);    
    overflow: hidden;
`

const MapContainer=styled.div`
    display: flex;    
    justify-content: space-around;
    align-items: center;
    background-image: url(/static/red-map.webp);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    height: 500px;
    width: 100%;
`

const TextContainer=styled.div`
    display: flex;    
    flex-direction: column;
    margin-left: 100px;
    width: 400px;
`

const WhiteTitle=styled.p`
    color: white;
    font-size: 11px;
    font-weight:bold;
    letter-spacing: 2px;  
`

const WhiteSubTitle=styled.p`
    color: white;
    font-size: 20px;
    letter-spacing: 1px;
`

const WhiteText=styled.p`
    color: white;
    font-size: 14px;
`

const ButtonsContainer=styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

const FeatureContainer=styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    padding: 20px;
    max-width: 450px;
    margin-right:20px;
    border-radius: 20px;
    box-shadow:5px 5px 5px #888888;
`

const FeatureImage=styled.img`
    margin-right: 10px;
    height: 200px;
`

const FeatureContent=styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`

const TalentContainer=styled.div`
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

const Name=styled.p`
    margin: 10px 0 0 0 ;
    font-size:20px;
    font-weight:bold;
`

const Country=styled.p`
    font-size: 12px;
    font-weight:bold;
    margin: 0;
    color: red;
`

const Stack=styled.p`
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

const Badges= styled.div`
    display: flex;
    width:85%;
    justify-content: space-between;
    align-items: center;
    margin:10px 10px 20px 10px;
`

const BadgeContainer = styled.img`
    height:30px;
`

const UseCaseContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 40px 40px 150px;
    background-color: white;
`

const ShapeContainer=styled.div`
    display: flex; 
    flex-direction: column;
    background-image: url(/static/demo-shape.webp);
    background-repeat: no-repeat;
    background-position: left;
    background-size: auto 100%;
    height: 500px;
    width: 100%;
`

const BlueText = styled.span`
  color: #007aff;
`;

const CasesContainer=styled.div`
    display: flex;
`

const CaseContainer=styled.div`
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

const DemoContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 40px 40px 150px;
    background-color: #ebf3ff;
`

const VideoContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
`

const Iframe=styled.iframe`
    height: 250px;
    border-radius:20px;
    margin: 20px;
`

const DemoText=styled.div`
    display: flex;
    flex-direction: row;

`

const InsightsContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 40px 40px 150px;
    background-color: white;
`

const BlogContainer=styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    border-radius: 20px;
    margin: 20px;
    background-color: #f7f7f7;
`

const BlueContainer=styled.div`
    display: flex;    
    flex-direction: column;     
    background: linear-gradient(45deg, #0464f4, #016bff);    
    overflow: hidden;
    color: white;
    padding: 75px 200px 40px 100px
`

const PowerContainer=styled.div`
    display: flex; 
    flex-direction: column;     
    background-image: url(/static/circle-power.webp);
    background-repeat: no-repeat;
    background-position: right;
    background-size: auto 100%;
    height: 300px;
    width: 100%;
`

const BlueTitle=styled.p`
    display: flex;
    color: white;
    font-size: 60px;
    padding: 10px;
    margin: 0;
`

export default FirstSection;