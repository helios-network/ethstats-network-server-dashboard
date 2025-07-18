import React from 'react';
import styled from 'styled-components';

const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #FFF;
  padding: 14px 20px 15px 20px;
  //border-top: 1px solid rgba(50,65,86,0.50);
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  color: #8399B8;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 14px 20px 15px;
    font-size: 9px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 14px 10px 15px;
    font-size: 8px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

export default HeaderContent;
