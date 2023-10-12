import React from 'react';
import styled from 'styled-components';
import MenuArrow from '../icons/MenuArrow';

const SubsectionText = ({ subSection, text }) => {
  return (
    <Container>
        <ArrowContainer>
            {subSection && <MenuArrow />}
        </ArrowContainer>            
        <TextContainer>
            {subSection && <Title>{subSection}</Title>}
            {text && <p>{text}</p>}
        </TextContainer>      
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: top;
`;

const Title = styled.h4`
  font-size: 16px;  
  color: white;
  padding:0;
  margin:0;
`;

const ArrowContainer = styled.div`
    width: 60px;
`

const TextContainer = styled.div`
    display: flex;
    margin-left:20px;
    flex-direction: column;
    align-items: top;
`

export default SubsectionText;
