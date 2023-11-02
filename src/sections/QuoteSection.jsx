import React from 'react';
import styled from 'styled-components';

const QuoteSection =({quote}) => {
    return (
        <QuoteContainer>
            <Quote>
                <QuoteText>{quote.text}</QuoteText>
                <QuoteAuthor>{quote.author}</QuoteAuthor>
            </Quote>
        </QuoteContainer>
        
    )
}

const QuoteContainer = styled.div`
    display: flex;
    padding: 70px 100px 70px 100px;
    background-color: white;
`

const Quote = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 50px 20px 50px;
    background-color: #eeeeee;
    border-radius: 20px;
`

const QuoteText = styled.p`
    font-size: 25px;
`
const QuoteAuthor = styled.p`
    font-size: 12px;
    color: #007aff;
`

export default QuoteSection;