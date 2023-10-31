import React, { useState } from 'react';
import styled from 'styled-components';
import OverlayContainer from './OverlayContainer';

const Navigation = ({tabContent, navbarColor, setNavbarColor}) => {

  

  const NavItem = ({ text, content, setNavbarColor }) => {
    const [isHovered, setHovered] = useState(false);
    console.log("content", content.section)
  
    return (
      <NavElement
        onMouseEnter={() => {
          setHovered(true)
          setNavbarColor(content.color)
        }}
        onMouseLeave={() => {
          setHovered(false)
          setNavbarColor("transparent")
        }}
        style={{fontWeight: isHovered? "bold" : "normal", color: !isHovered && navbarColor!=="transparent" ? "white" : "black"}}
      >
        {text}
        {isHovered && <Overlay content={content} isHovered={isHovered}/>}
      </NavElement>
    );
  };
  
  const Overlay = ({ content, isHovered }) => {
    return (
      <OverlayContainer content={content} isHovered={isHovered}/>
    );
  };
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
};



const NavBar = styled.nav`
  width: 90%;
  display: flex;
  height: 30px;
  justify-content: space-around;
  align-items: center;
  color: black;
  margin: 20px;
  font-size: 14px;
`;

const NavElement=styled.span`
  display: flex;
  align-items: top;
  height: 60px;
  margin-top: 40px;
`


export default Navigation;
