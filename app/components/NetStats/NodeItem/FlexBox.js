import React from 'react';
import styled from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid rgba(50, 65, 86, 0.4);
  padding: 20px 0 21px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.2px;
  cursor: pointer;
  
  .details-tooltip {
    display: none;
  }
  
  &:hover {
    .details-tooltip {
      display: block;
    }
  }

  @media (max-width: 768px) {
    padding: 15px 0 16px;
    font-size: 10px;
    line-height: 12px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    padding: 10px 0 11px;
    font-size: 9px;
    line-height: 11px;
    gap: 5px;
  }
`;

export default FlexBox;
