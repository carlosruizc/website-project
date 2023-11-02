import React from 'react';
import styled from 'styled-components';

const Button = ({ children, variant, onClick }) => {
  let buttonStyles = {};

  switch (variant) {
    case 'primary':
      buttonStyles = {
        backgroundColor: '#007aff',
        color: 'white',
        height: '45px',
      };
      break;
    case 'primary-small':
      buttonStyles = {
        backgroundColor: '#007aff',
        color: 'white',
        height: '30px',
      };
      break;
    case 'primary-small-black':
      buttonStyles = {
        backgroundColor: 'black',
        color: 'white',
        height: '30px',
      };
      break;
    case 'secondary':
      buttonStyles = {
        backgroundColor: '#ececec',
        color: '#007aff',        
        height: '45px',
      };
      break;
    case 'danger':
      buttonStyles = {
        backgroundColor: 'red',
        color: 'white',
      };
      break;
    case 'black':
      buttonStyles = {
        backgroundColor: 'black',
        color: 'white',
        height: '30px',
        marginTop: '10px',
      };
      break;  
      case 'white':
      buttonStyles = {
        backgroundColor: 'white',
        color: 'black',
        height: '30px',
        marginTop: '10px',
      };
      break;  
      case 'white-blue':
      buttonStyles = {
        backgroundColor: 'white',
        color: 'blue',
        height: '30px',
        marginTop: '10px',
        width: "fit-content",
      };
      break;  
      case 'gray':
      buttonStyles = {
        backgroundColor: 'gray',
        color: 'white',
        height: '30px',
        marginTop: '10px',
        width: "fit-content",
      };
      break;  
    default:
      buttonStyles = {
        backgroundColor: 'gray',
        color: 'white',
      };
      break;
  }

  return (
    <StyledButton style={buttonStyles} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 0 20px;  
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none; 
  white-space: nowrap; 
  font-weight: bold;
  font-size: 10px;
  font-family: "DM Sans", sans-serif;
  letter-spacing: 2px;
`;

export default Button;
