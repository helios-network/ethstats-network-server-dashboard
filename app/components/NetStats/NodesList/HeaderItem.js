import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerHeaderItem = styled.div`
  width: ${props => props.width};
  font-weight: 600;
  font-size: 13px;
  color: ${props => props.active ? '#1e293b' : '#64748b'};
  opacity: ${props => props.active ? '1' : '0.8'};
  cursor: ${props => props.isClickable ? 'pointer' : 'default'};
  text-align: ${props => props.rightSide ? 'right' : 'left'};
  flex-grow: ${props => props.doubleGrow ? '2' : '1'};
  display: flex;
  align-items: center;
  justify-content: ${props => props.rightSide ? 'flex-end' : 'flex-start'};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.isClickable ? '#1e293b' : '#64748b'};
    opacity: ${props => props.isClickable ? '1' : '0.8'};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    justify-content: flex-start;
    padding: 4px 0;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: left;
    justify-content: flex-start;
    padding: 4px 0;
    font-size: 11px;
  }
`;

export default class HeaderItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    onClick: PropTypes.func,
  };
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.id);
    }
  };
  render() {
    const {
      /* eslint-disable-next-line */
      onClick,
      ...otherProps
    } = this.props;
    return (
      <InnerHeaderItem {...otherProps} onClick={this.onClick} isClickable={this.props.onClick}>
        { this.props.children }
      </InnerHeaderItem>
    );
  }
}
