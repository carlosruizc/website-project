import React from 'react';
import styled from 'styled-components';

const CardsSection =({cards}) => {
    
    return (
        <MainContainer>
            <Title>{cards.title}</Title>
            <SubTitle>{cards.subtitle}</SubTitle>
            <CardsContainer>
                {cards.maincards.map((card) => (
                    <CardContainer key={card.title}>
                        <TopCard>
                        <RoundContainerSmall>
                            <RoundImageSmall src={card.img} alt={card.title}/>
                            </RoundContainerSmall>   
                            <CardTitle>{card.title}</CardTitle>                            
                        </TopCard>  
                        <CardText>{card.text}</CardText>                                    
                    </CardContainer>
                ))}
            </CardsContainer>            
        </MainContainer>
        
    )
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 100px 70px 100px;
    background-color: #007aff;
`

const Title = styled.p`
    font-size: 12px;
    color: white;
`

const SubTitle = styled.p`
    font-size: 25px;
    color: white;
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

const CardContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: #f7f7f7;
    width: 200px;
    color: black;
    border-radius: 10px;
    margin: 10px 10px 10px 10px;
    padding: 10px 20px 10px 20px;
    
`

const TopCard = styled.div`
    display: flex;
    flex-direction: row;
    
`

const CardTitle = styled.p`
    font-size: 20px;
    width: 60%;
`

const CardText = styled.p`
    font-size:10px;
`

const RoundContainerSmall = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px;
  box-shadow: 5px 5px 5px #888888;
  background-color: #f7f7f7;
`;

const RoundImageSmall = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export default CardsSection;