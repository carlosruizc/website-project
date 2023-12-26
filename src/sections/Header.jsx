import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Navigation from "../components/Navigation"
import Logo from "../icons/Logo"
import LogoWhite from "../icons/LogoWhite"
import Button from "../components/Button"
import { navigate } from "gatsby"
import { useMediaQuery } from "react-responsive"
import { tabContent } from "../data/Content"

const Header = () => {

  const [navbarColor, setNavbarColor] = useState("transparent")
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [prevScrollY, setPrevScrollY] = useState(0);
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });


  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;

      if (scrollY > prevScrollY) {

        if (scrollY > scrollThreshold) {
          setIsHeaderVisible(false);
        }
      } else {

        setIsHeaderVisible(true);

      }

      if (scrollY > 10) {
        setNavbarColor("white")
      } else {
        setNavbarColor("transparent")
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div>
      <HeaderContainer
        style={{
          backgroundColor: navbarColor,
          transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <LogoContainer onClick={() => navigate("/")}>
          {(navbarColor === "transparent" || navbarColor === "white") ? <Logo /> : <LogoWhite />}
        </LogoContainer>

        <Navigation
          tabContent={tabContent}
          navbarColor={navbarColor}
          setNavbarColor={setNavbarColor}
        />

        {!isTablet &&
          <div style={{ margin: "20px" }}>
            <Button variant={(navbarColor === "transparent" || navbarColor === "white") ? "primary-small" : "primary-small-black"}>REQUEST A DEMO</Button>
          </div>
        }
      </HeaderContainer>
    </div>
  )
}

export default Header

const HeaderContainer = styled.header`
  width: 100%;
  color: white;
  position: fixed;
  top: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  transition: transform 0.3s;
  z-index: 9999;   
`;

const LogoContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  z-index: 9999;
  cursor: pointer;
`
