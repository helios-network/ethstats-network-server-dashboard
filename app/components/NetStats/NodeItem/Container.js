import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  order: ${props => props.order};
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 16px 20px;
  position: relative;
  min-height: 57px;
  transition: all 0.2s ease;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  &:hover {
    border-color: #e2e8f0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    min-height: 50px;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    min-height: 45px;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 4px;
  }
`;
/**
 * if min-height is modified also change the NODE_ITEM_HEIGHT in NodesList/SortableNodesList.js accordingly
 */

export default Container;
