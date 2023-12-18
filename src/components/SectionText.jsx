import React from 'react';
import styled from 'styled-components';

const SectionText = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <Line />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.h3`
  font-size: 1rem;
  margin-right: 10px;
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: white; 
`;

export default SectionText;
