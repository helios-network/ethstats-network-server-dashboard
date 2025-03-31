import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.bright_gray};
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  margin-right: 10px;

  @media (max-width: 480px) {
    display: block;
  }
`;

const MenuOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media (max-width: 480px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const MenuContent = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  max-width: 300px;
  height: 100%;
  background: ${props => props.theme.colors.header_bg_color};
  padding: 20px;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 1001;

  @media (max-width: 480px) {
    display: block;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.bright_gray};
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
`;

const MenuItem = styled.div`
  padding: 10px 0;
  color: ${props => props.theme.colors.bright_gray};
  cursor: pointer;
  font-size: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: ${props => props.theme.colors.block_chart_color};
  }
`;

const Breadcrumbs = styled.div`
  display: none;
  align-items: center;
  gap: 10px;
  color: ${props => props.theme.colors.bright_gray};
  font-size: 14px;

  @media (max-width: 480px) {
    display: flex;
  }
`;

const BreadcrumbItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  &:not(:last-child)::after {
    content: '/';
    margin-left: 5px;
  }
`;

class MobileMenu extends React.Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { currentPath = window.location.pathname } = this.props;

    const pathItems = currentPath ? currentPath.split('/').filter(Boolean) : [];

    return (
      <div>
        <MenuButton onClick={this.toggleMenu}>
          <Icon name="menu" />
        </MenuButton>

        <MenuOverlay isOpen={isOpen} onClick={this.closeMenu} />

        <MenuContent isOpen={isOpen}>
          <MenuHeader>
            <h3>Menu</h3>
            <CloseButton onClick={this.closeMenu}>
              <Icon name="close" />
            </CloseButton>
          </MenuHeader>

          <MenuItem onClick={() => { this.closeMenu(); window.location.href = '/'; }}>
            Dashboard
          </MenuItem>
          <MenuItem onClick={() => { this.closeMenu(); window.location.href = '/nodes'; }}>
            Nodes
          </MenuItem>
          <MenuItem onClick={() => { this.closeMenu(); window.location.href = '/history'; }}>
            History
          </MenuItem>
        </MenuContent>

        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          {pathItems.map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </BreadcrumbItem>
          ))}
        </Breadcrumbs>
      </div>
    );
  }
}

MobileMenu.propTypes = {
  currentPath: PropTypes.string
};

MobileMenu.defaultProps = {
  currentPath: window.location.pathname
};

export default MobileMenu; 