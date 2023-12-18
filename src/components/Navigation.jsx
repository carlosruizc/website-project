import React, { useState } from 'react';
import styled from 'styled-components';
import OverlayContainer from './OverlayContainer';
import Button from './Button';
import { useMediaQuery } from 'react-responsive';
import { navigate } from "gatsby"
import { slideInAnimation } from '../style/animations';
import MenuContainer from './MenuContainer';
import Close from '../icons/Close';
import ArrowDown from '../icons/ArrowDown';

const Navigation = ({ tabContent, navbarColor, setNavbarColor }) => {

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const NavItem = ({ text, content, setNavbarColor }) => {
    const [isHovered, setHovered] = useState(false);


    return (
      <NavDiv
        key={content.tab}
        onMouseEnter={() => {
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
          key={content.title}
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

  const showSections = (content) => {
    if (typeof content.section === "undefined") {
      setSelectedSection(null);
      navigate(`/synack/${content.tab}`)
      setShowMobileNavbar(false)
    } else {
      setSelectedSection(content.tab === selectedSection ? null : content.tab)
    }
  }

  const Overlay = ({ content, isHovered }) => {
    return (
      <OverlayContainer content={content} isHovered={isHovered} />
    );
  };

  const handleOpenMenu = () => {
    setShowMobileNavbar(!showMobileNavbar);
    setSelectedSection(null)
  }


  if (isTablet) {
    return (
      <div>
        {showMobileNavbar
          ?
          <div style={{ padding: "20px 40px" }}>
            <Button variant="menu" onClick={handleOpenMenu}>
              <Close />
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: selectedSection === item.tab ? item.color : null,
                  color: selectedSection === item.tab ? "white" : null,
                  borderBottom: "1px solid #F8F8F8",
                }}>
                <button style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%", border: "none", backgroundColor: "transparent", color: selectedSection === item.tab ? "white" : null, }} onClick={() => showSections(item)} >
                  <p key={item.tab} style={{ paddingLeft: "2em" }}>
                    {item.tab}
                  </p>
                  {selectedSection !== item.tab && typeof item.section !== "undefined" &&
                    <ArrowDown key={item.tab + "arrow"} />
                  }
                </button>

                {selectedSection === item.tab &&
                  <MenuContainer content={item} tab={item.tab} setShowMobileNavbar={setShowMobileNavbar} />}
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
  animation: ${slideInAnimation} 0.5s ease-in-out;
`


export default Navigation;
