import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background: linear-gradient(180deg, #f3f7fe, #fafbff);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 150px -48px #181f2d20;
  flex: 1 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export default Container;
