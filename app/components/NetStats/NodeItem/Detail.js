import React from 'react';
import styled from 'styled-components';

const Detail = styled.div`
  width: ${props => props.width};
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0.2px;
  color: ${props => props.color};
  position: relative;
  text-align: ${props => props.rightSide ? 'right' : 'left'};
  flex-grow: ${props => props.doubleGrow ? '2' : '1'};
  
  .space {
    padding: 0 6px;
  }
  
  .tooltip {
    display: none;
  }
  
  &:hover {
    .tooltip {
      display: block;
    }
  }

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 12px;
    width: ${props => {
      if (props.doubleGrow) return '100%';
      if (props.width === '260px') return '100%';
      if (props.width === '160px') return '100%';
      return props.width;
    }};
  }

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 11px;
    width: ${props => {
      if (props.doubleGrow) return '100%';
      if (props.width === '260px') return '100%';
      if (props.width === '160px') return '100%';
      return props.width;
    }};
    text-align: left;
  }
`;

export default Detail;
