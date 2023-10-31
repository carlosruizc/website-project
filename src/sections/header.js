import React, { useState } from "react"
import styled from "styled-components"
import Navigation from "../components/Navigation"
import VideoBackground from "../components/VideoBackground"
import Logo from "../icons/Logo"
import Button from "../components/Button"
import TopBanner from "../components/TopBanner"

const Header = () => {

  const [navbarColor, setNavbarColor]=useState("transparent")
  const tabContent = [
    {
      tab: "Synack Platform",
      color: "#007aff",
      section: [
        {
          title:"The Premier Security Testing Platform",
          elements:[
            {
              subSection:"The Synack Platform",
              text: "Access to on-demand researchers, vulnerability management, integration, and reporting"                                                                   
            },
            {
              subSection:"On-demand Security Testing",
              text: "Order on-demand targeted security tests that can scale to meet your objectives"
            },
            {
              subSection:"Pentesting",
              text: "Transformational pentesting that offers both continuous and point-in-time pentests to reduce risk and meet compliance objectives"
            },
            {
              subSection:"FedRAMP",
              text: "Synack achieved the highest designation among peer security companies, pentesting in a FedRAMP Moderate environment"
            },
          ]
        }
      ],     
    },
    {
      tab: "Solutions",
      color: "#007aff",
      section: [
        {
          title: "Solutions", 
          elements:[
            {
              subSection:"Penetration Testing",
            },
            {
              subSection:"Testing for Compliance",
            },  
            {
              subSection:"Cloud Security Testing",
            },  
            {
              subSection:"API Security Testing",
            },  
            {
              subSection:"Bridge the Cyber Talent Gap",
            },  
            {
              subSection:"Beyond Bug Bounty ",
            },  
            {
              subSection:"Application Security Testing",
            },
            {
              subSection:"Vulnerability Management ",
            },  
            {
              subSection:"Security Testing for Third Party Risk",
            },  
            {
              subSection:"Managed Vulnerability Disclosure",
            },            
          ]
        }, 
        {
          title:"Industries",
          elements:[
            {
              subSection:"Public Sector",
            },
            {
              subSection:"Technology",
            },  
            {
              subSection:"Financial Services",
            },  
            {
              subSection:"Retail / eCommerce",
            },  
          ]  
        }
      ],
      
    },
    {
      tab: "Why Synack",
      color:"transparent",
    },
    {
      tab: "Company",
      color: "#007aff",
      section: [
        {
          title: "Company Info", 
          elements:[
            {
              subSection:"About Us",
            },
            {
              subSection:"Work at Synack",
            },  
            {
              subSection:"Leadership Team",
            },              
          ]
        }, 
        {
          title:"Media",
          elements:[
            {
              subSection:"Resource Hub",
            },
            {
              subSection:"Press Releases",
            },  
          ]  
        }
      ],      
    },
    {
      tab: "Partners",
      color: "#007aff",
      section: [
        {
          title: "Partnership Overview", 
          elements:[
            {
              subSection:"",
              text: "When the Synack Platform is combined with the offerings from our ecosystem of partners, customers receive a unified offensive security testing approach with defensive security methods that improve their security posture and reduce the risk of breach."
            },
            {
              subSection:"READ MORE",              
            },                         
          ]
        }, 
        {
          title:"Partner With Us",
          elements:[
            {
              subSection:"Technology Partner",
              text:"Synack's pre-built integration modules with leading security vendors"
            },
            {
              subSection:"Solution Providers",
              text:"Our growing worldwide network of value-added resellers and distributors"
            },
            {
              subSection:"Strategic Alliances",
              text:"Our partnerships with system integrators, SOC operators, consulting firms and managed service provider"
            },  
          ]  
        }
      ],      
    },
    {
      tab: "Synack Red Team",
      color: "#cf2e2e",
      section: [
        {
          title: "The Synack Red Team", 
          elements:[
            {
              subSection:"",
              text: "Meet the experts who power Synack’s strategic security testing platform. Our Synack Red Team unites over 1,500 of the world’s most skilled and trusted security researchers, who work with patented technology to deliver best-in-class offensive security testing on a continuous basis."
            },
            {
              subSection:"READ ABOUT THE SRT",              
            },
            {
              subSection:"APPLY TO SRT",              
            },                     
          ]
        }, 
        {
          title:" Programs for SRT ",
          elements:[
            {
              subSection:"Acropolis Recognitions",
            },
            {
              subSection:"Envoy Mentorship",
            },
            {
              subSection:"Artemis Community",
            },
            {
              subSection:"Pathways",
            }           
          ]  
        }
      ],      
    },
    {
      tab: "Resource Hub",
      color: "#007aff",
      section: [
        {
          title:"Resource Hub", 
          elements:[
            {
              subSection:"Resources",
              text: "Browse all of our resources including videos, case studies, articles, podcasts and more. "                                                                   
            },
            {
              subSection:"Demo Series",
              text: "Cut to the Chase. A live demo series that gets the point without wasting your time. "
            },
            {
              subSection:"Unplugged",
              text: "A video series with candid perspectives on cybersecurity topics that matter."
            },
            {
              subSection:"Blogs",
              text: "Stay up to date on the latest industry trends, company news and research."
            },
            {
              subSection:"README_ Publication",
              text: "A publication covering the issues, ideas and people shaping the future of cybersecurity. "                                                       
            },
            {
              subSection:"Changelog Newsletter",
              text: "Subscribe to the Changelog Newsletter for essential news delivered directly to your inbox."
            },
            {
              subSection:"Events",
              text: "Join us for any in-person event, upcoming conference or an online webinar."
            },
            {
              subSection:"We're In! Podcast",
              text: "Hear from newsmakers, hackers, and big thinkers around the world share their cybersecurity insights."
            },
          ]
        }
      ],
    },
  ]

  console.log("navbarColor:", navbarColor)

  return (
    <div>
    <HeaderContainer style={{backgroundColor:navbarColor}} >
      <LogoContainer>
        <Logo />
      </LogoContainer>      
      <VideoBackground />
      <Navigation 
        tabContent={tabContent}
        navbarColor={navbarColor}
        setNavbarColor={setNavbarColor} 
        />
      <div style={{margin:"20px"}}>
        <Button  variant="primary-small">REQUEST A DEMO</Button>
      </div>      
    </HeaderContainer>
    <TopBanner />
    </div>
  )
}

export default Header

const HeaderContainer = styled.header`
  background: transparent;
  color: white;
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
`;

const LogoContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
`