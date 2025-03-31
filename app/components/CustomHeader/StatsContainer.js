import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    width: 100%;
    justify-content: space-between;
  }
`;

export default StatsContainer;
