import React from 'react';
import styled from 'styled-components';

const StatsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.colors.bright_gray};
  opacity: ${props => props.fullOpacity ? '1' : '0.6'};

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export default StatsItem;
