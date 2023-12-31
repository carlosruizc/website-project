import React from 'react';
import styled from 'styled-components';

const ArrowIcon = styled.svg`
  fill: ${props => props.color || 'white'};
`;

const MenuArrow = ({ color }) => (
  <ArrowIcon
    width="68"
    height="8"
    viewBox="0 0 68 8"
    xmlns="http://www.w3.org/2000/svg"
    color={color}
  >
    <path d="M67.3536 4.16605C67.5488 3.97079 67.5488 3.65421 67.3536 3.45895L64.1716 0.276966C63.9763 0.0817039 63.6597 0.0817039 63.4645 0.276966C63.2692 0.472228 63.2692 0.788811 63.4645 0.984073L66.2929 3.8125L63.4645 6.64093C63.2692 6.83619 63.2692 7.15277 63.4645 7.34803C63.6597 7.5433 63.9763 7.5433 64.1716 7.34803L67.3536 4.16605ZM0 4.3125H67V3.3125H0V4.3125Z" />
  </ArrowIcon>
);

export default MenuArrow;
