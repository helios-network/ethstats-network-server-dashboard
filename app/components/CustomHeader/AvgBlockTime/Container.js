import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2px 5px 1px 5px;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.2px;
  font-weight: 600;
`;

export default Container; 