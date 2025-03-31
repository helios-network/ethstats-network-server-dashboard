import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  // background-color: #F2F6FE;
  flex: 1 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 10px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
    width: 100%;
  }
`;

export default Container;
