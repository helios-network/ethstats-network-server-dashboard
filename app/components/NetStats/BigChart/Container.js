import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 91px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 480px) {
    height: 70px;
  }
`;

export default Container;
