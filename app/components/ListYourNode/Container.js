import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.3px;
  padding: 10px 16px;
  margin-right: ${props => props.noMargin ? '0' : '16px'};
  border-radius: 25px;
  background: linear-gradient(135deg, #002DCB 0%, #1a4dd4 100%);
  box-shadow: 0 4px 15px rgba(0, 45, 203, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 45, 203, 0.4);
    background: linear-gradient(135deg, #0025b3 0%, #1545c7 100%);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 15px rgba(0, 45, 203, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export default Container;
