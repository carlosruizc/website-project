import React, { useState } from 'react';
import styled from 'styled-components';
import MenuArrow from '../icons/MenuArrow';
import { Link } from 'gatsby';

const SubsectionText = ({ subSection, text, tab, setShowMobileNavbar }) => {

  const [isHovered, setHovered] = useState(false);

  const page = `/${tab}/${subSection}`

  const handleNavigation = () => {
    if (setShowMobileNavbar) {
      setShowMobileNavbar(false);
    }
  }

  return (
    <Container>
      <ArrowContainer style={{ marginLeft: isHovered ? "5px" : 0, opacity: isHovered ? "1" : "0.2" }}>
        {subSection &&
          <MenuArrow
            color={"white"}

          />
        }
      </ArrowContainer>
      <TextContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {subSection && <CustomLink to={page} onClick={handleNavigation}>{subSection}</CustomLink>}
        {text && <p>{text}</p>}
      </TextContainer>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: top;
`;

const ArrowContainer = styled.div`
  transition: margin 0.5s ease, color 0.5s ease;
`

const TextContainer = styled.div`
    display: flex;
    margin-left:20px;
    flex-direction: column;
    align-items: top;
    }
`

const CustomLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 
`;

export default SubsectionText;
