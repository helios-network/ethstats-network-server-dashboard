import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Container from './Container';
import FlexBox from './FlexBox';
import LeftFlexHalf from './LeftFlexHalf';
import RightFlexHalf from './RightFlexHalf';
import StatsContainer from './StatsContainer';
import StatsItem from './StatsItem';
import MobileMenu from './MobileMenu';
import StatsLabel from './StatsLabel';
import PageLatency from './PageLatency/index';
import ActiveNodes from './ActiveNodes/index';
import ListYourNode from 'components/ListYourNode';
import History from 'components/NetStats/History';
import EthstatsLogo from 'components/EthstatsLogo';

export default class CustomHeader extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    startGuideTour: PropTypes.func,
    hasActiveNodes: PropTypes.bool,
    hasGuideTour: PropTypes.bool,
    hidden: PropTypes.bool,
  };

  render() {
    const className = this.props.hidden ? 'hidden' : '';
    const currentPath = window.location.pathname;
    const isMobile = window.innerWidth <= 768;

    return (
      <Container style={this.props.style} className={className}>
        <FlexBox>
          <LeftFlexHalf>
            {/* <MobileMenu currentPath={currentPath} /> */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              marginLeft: isMobile ? '10px' : '0'
            }}>
              <EthstatsLogo/>
              {!isMobile && (
                <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
                  <ListYourNode/>
                  <History />
                </div>
              )}
            </div>
          </LeftFlexHalf>
          {!isMobile && (
            <StatsContainer>
              <StatsItem>
                <StatsLabel>Page latency: </StatsLabel>
                <PageLatency/>
              </StatsItem>
              { this.props.hasActiveNodes && <StatsItem>
                <StatsLabel>Active nodes </StatsLabel>
                <ActiveNodes/>
              </StatsItem> }
            </StatsContainer>
          )}
        </FlexBox>
      </Container>
    );
  }
}
