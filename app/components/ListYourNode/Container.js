import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgb(0, 11, 60);
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0.2px;
  padding: 6px 6px 6px 6px;
  margin-right: ${props => props.noMargin ? '0' : '16px'};
  border-radius: calc(32px + 4 * (100vw - 320px) / 1080);
  transition: all linear 0.2s;
  
  &:hover {
    background-color: rgba(0, 45, 203, 0.05);
  }
`;

export default Container;
