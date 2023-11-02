import React, { useState } from 'react';
import styled from 'styled-components';
import OverlayContainer from './OverlayContainer';

const Navigation = ({tabContent, navbarColor, setNavbarColor}) => {  

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
        fontWeight: isHovered? "bold" : "normal", 
        color: !isHovered && (navbarColor==="transparent" || navbarColor==="white")  ? "black" : "white",
      }}>
        <NavElement
          style={{
            borderBottom: isHovered ? '2px solid black' : 'none'
          }}
        >
          {text}
          {isHovered && <Overlay content={content} isHovered={isHovered}/>}
        </NavElement>
      </NavDiv>
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

const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`

const NavElement=styled.span`
  display: flex;
  height: 20px;
  margin: 0 20px 0 20px;
  cursor: pointer;
`


export default Navigation;
