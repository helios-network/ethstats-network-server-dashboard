import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  order: ${props => props.order};
  display: flex;
  flex-direction: row;
  opacity: 0.6;
  padding-right: 52px;
  padding-left: 56px;
  position: relative;
  min-height: 57px;
  transition: opacity linear 0.2s;
  
  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    min-height: 50px;
  }

  @media (max-width: 480px) {
    padding-right: 10px;
    padding-left: 10px;
    min-height: 45px;
    flex-wrap: wrap;
    gap: 5px;
  }
`;
/**
 * if min-height is modified also change the NODE_ITEM_HEIGHT in NodesList/SortableNodesList.js accordingly
 */

export default Container;
