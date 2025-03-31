import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.colors.header_bg_color};
  //box-shadow: 0 12px 24px 0 #FFF;
  padding: 20px;
 
  letter-spacing: 0.2px;
  position: sticky;
  width: 100%;
  z-index: 40;
  
  -webkit-transition: 300ms ease-in;
  -moz-transition: 300ms ease-in;
  -o-transition: 300ms ease-in;
  transition: 300ms ease-in;
  
  a {
    color: ${props => props.theme.colors.block_chart_color};
    
    &:hover {
      color: ${props => props.theme.colors.block_chart_color};
    }
    
    &:visited {
      color: ${props => props.theme.colors.block_chart_color};
    } 
  }
  
  &.hidden {
    transform: translateY(-56px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export default Container;
