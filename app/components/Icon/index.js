import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const Icon = ({ name }) => {
  const getIconPath = () => {
    switch (name) {
      case 'menu':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        );
      case 'close':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return <IconWrapper>{getIconPath()}</IconWrapper>;
};

export default Icon;
