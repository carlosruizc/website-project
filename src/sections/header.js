import React from "react"
import styled from "styled-components"
import Navigation from "../components/Navigation"
import VideoBackground from "../components/VideoBackground"
import Logo from "../icons/Logo"
import Button from "../components/Button"
import TopBanner from "../components/TopBanner"

const Header = () => {
  return (
    <div>
    <HeaderContainer >
      <LogoContainer>
        <Logo />
      </LogoContainer>      
      <VideoBackground />
      <Navigation />
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
  background: transparent !important;
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
