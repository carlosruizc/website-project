import React from "react"
import styled from "styled-components"
import Button from "../components/Button"

const footerContent=[
    {
        title:"Synack Platform",
        items:[
            "Security Testing Platform", "Credits", "FedRAMP", "Penetration Testing", "On-demand Security Testing"             
        ]
    },
    {
        title:"Solutions",
        items:[
            "Third Party Risk", "Application Security Testing Services", "Go Beyond Bug Bounty", "Vulnerability Management", "Compliance", "Talent Gap", "API Security Testing", "Cloud Security Testing", "Penetration Testing", "Security Testing for Retail and Commerce", "Security Testing for Financial Services", "Security Testing for Technology", "Security Testing for Public Sector"             
        ]
    },
    {
        title:"Partners",   
        items:[
            "ServiceNow and Synack", "Solution Providers", "Strategic Alliances", "Synack and Accenture Federal Services", "Synack and Microsoft", "Synack Partners with Jira", "Synack Partners with Splunk", "Technology Partners"
        ]
    },
    {
        title:"Company",
        items:[
            "About Us", "Careers", "Leadership"
        ]
    },
    {
        title: "Resource Hub",
        items: [
            "Blog", "Events", "Changelog Newsletter", "README_Publication", "We’re In! Podcast", "Videos"
        ]
    },
    {
        title: "Synack Red Team",
        items: [
            "Pathways", "Artemis Red Team", "Envoy"
        ],
        button:"APPLY TO RED TEAM",
        URL:"https://www.greenhouse.com/"

    }
]

const Footer=() => {

return (
    <div>
      <FooterContainer>
        <Logo src="/static/logo.svg" />
        <FooterColumns>
            {footerContent.map(column => (
                <Column>
                    <BlueText><strong>{column.title}</strong></BlueText>
                    {column.items.map(item => (
                        <WhiteText key={item}>{item}</WhiteText>
                    ))}
                    {column.button && (
                        <ButtonContainer>
                            <Button  variant="primary" onClick={()=>window.open(column.URL)}>{column.button}</Button>
                        </ButtonContainer>
                    )}
                </Column>
            ))}
        </FooterColumns>
        <Button  variant="white-blue">CONTACT US</Button>
        <BottomContainer>
            <Copyright>Copyright © 2023 Synack. All rights reserved.</Copyright>
            <BlueTextSmall>Privacy</BlueTextSmall>
            <BlueTextSmall>Terms</BlueTextSmall>
            <BlueTextSmall>Patent Info</BlueTextSmall>
            <BlueTextSmall>Disclosure Policy</BlueTextSmall>
            <BlueTextSmall>Secutiry</BlueTextSmall>
            <BlueTextSmall>Cookies</BlueTextSmall>
            <BlueTextSmall>Modern Slavery Statement</BlueTextSmall>
            <BlueTextSmall>My Privacy Choices</BlueTextSmall>
        </BottomContainer>      
      </FooterContainer>
    </div>
  )

}

export default Footer

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    background: #11284e;
    color: white;
    position: relative;
    padding-left:100px;
`

const Logo = styled.img`
    margin-left: 0;
    margin-right: auto;
    height:40px;
    padding: 50px 0 50px 0;
`

const FooterColumns = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Column= styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 15px 0 15px;
    width: 150px;
    
`

const BlueText = styled.p`
    color: #007aff;
    font-size: 10px;
    letter-spacing:1px;
`

const WhiteText = styled.p`
    color: white;
    font-size: 10px;
    margin: 5px 0 5px 0;;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 30px 0;
`

const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px 30px 30px 0;
`

const Copyright = styled.p`
    font-size: 8px;
`
const BlueTextSmall = styled.p`
    color: #007aff;
    font-size: 8px;
`