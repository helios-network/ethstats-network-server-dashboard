import React from 'react';
import styled from 'styled-components';

const Value = styled.div`
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  color: ${props => props.color};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export default Value;
