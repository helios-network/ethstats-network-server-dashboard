import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 40px 20px;
  display: flex;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background: linear-gradient(180deg,#f3f7fe,#fafbff);
  box-shadow: 0 4px 150px -48px #181f2d20;
  border-radius: calc(32px + 4 * (100vw - 320px) / 1080);
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 12px 15px;
    flex-direction: column;
    gap: 12px;
  }
`;

export default Container;
