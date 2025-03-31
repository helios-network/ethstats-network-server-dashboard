import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px 24px;
  display: flex;
  background-color: ${props => props.theme.colors.header_bg_color};
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 12px 16px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export default Container;
