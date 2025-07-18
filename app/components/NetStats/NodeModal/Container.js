import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  //width: calc(100% - 40px);
  width: 1240px;
  margin: 0 auto;
  background-color: #FFF;
  border: 1px solid rgba(50,65,86,0.40);
  // box-shadow: 0 12px 24px 0 #FFF;
  border-radius: 4px;
  z-index: 1000;
`;

export default Container;
