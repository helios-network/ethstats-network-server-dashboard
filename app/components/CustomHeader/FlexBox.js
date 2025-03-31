import React from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;

  @media (max-width: 768px) {
    height: auto;
    flex-wrap: wrap;
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default FlexBox;
