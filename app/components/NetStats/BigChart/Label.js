import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
  color: ${props => props.theme.colors.min_max_gray};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export default Label;
