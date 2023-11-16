import React, { useState } from 'react';
import styled from 'styled-components';
import OverlayContainer from './OverlayContainer';
import Button from './Button';
import { useMediaQuery } from 'react-responsive';
import { slideInAnimation } from '../style/animations';

const Navigation = ({ tabContent, navbarColor, setNavbarColor }) => {

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const NavItem = ({ text, content, setNavbarColor }) => {
    const [isHovered, setHovered] = useState(false);

    return (
      <NavDiv onMouseEnter={() => {
        setHovered(true)
        setNavbarColor(content.color)
      }}
        onMouseLeave={() => {
          setHovered(false)
          setNavbarColor("transparent")
        }}
        style={{
          fontWeight: isHovered ? "bold" : "normal",
          color: !isHovered && (navbarColor === "transparent" || navbarColor === "white") ? "black" : "white",
        }}>
        <NavElement
          style={{
            borderBottom: isHovered ? '2px solid black' : 'none'
          }}
        >
          {text}
          {isHovered && <Overlay content={content} isHovered={isHovered} />}
        </NavElement>
      </NavDiv>
    );
  };

  const Overlay = ({ content, isHovered }) => {
    return (
      <OverlayContainer content={content} isHovered={isHovered} />
    );
  };

  const handleOpenMenu = () => {
    setShowMobileNavbar(!showMobileNavbar);
  }

  if (isTablet) {
    return (
      <div>
        {showMobileNavbar
          ?
          <div style={{ padding: "20px 40px" }}>
            <Button variant="menu" onClick={handleOpenMenu}>
              <p style={{ letterSpacing: 0, fontWeight: 200, fontSize: "large" }}>X</p>
            </Button>
          </div>
          :
          <div style={{ padding: "20px 40px" }}>
            <Button variant="menu" onClick={handleOpenMenu}>
              <Line />
              <Line />
              <Line />
            </Button>
          </div>
        }
        {showMobileNavbar &&
          <MobileNavBar>
            {tabContent.map((item) => (
              <div>
                <p>{item.tab}</p>
              </div>
            ))}
          </MobileNavBar>
        }
      </div>
    )

  } else {
    return (
      <NavBar >
        {tabContent.map((item) => (
          <NavItem
            key={item.tab}
            text={item.tab}
            content={item}
            setNavbarColor={setNavbarColor}
          />
        ))}
      </NavBar>

    );
  }
};



const NavBar = styled.nav`
  width: 90%;
  display: flex;
  height: 30px;
  justify-content: space-around;
  align-items: center;
  color: black;
  margin: 20px;
  font-size: 1vw;
  text-align: center;
`;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`

const NavElement = styled.span`
  display: flex;
  height: 20px;
  cursor: pointer;
`

const Line = styled.div`
  width: 18px;
  height: 2px;
  background-color: #fff;
  margin:1px;
`;

const MobileNavBar = styled.div`
  display:flex;
  position: absolute;
  flex-direction: column;
  color: black;
  background-color: white;
  width: 100%;
  left: 0;
  padding-left: 20px;
  animation: ${slideInAnimation} 0.5s ease-in-out;
`


export default Navigation;
