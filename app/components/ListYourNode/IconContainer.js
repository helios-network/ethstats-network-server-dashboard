import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  font-size: 18px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  .white-hover {
    color: white;
    transition: transform 0.3s ease;
  }
  
  ${props => props.parent}:hover & {
    transform: scale(1.1);
    
    .white-hover {
      transform: rotate(90deg);
    }
  }
`;

export default IconContainer;
