import React from 'react';
import { PRIVACY_POLICY } from 'config';
import Container from './Container';
import FlexRow from './FlexRow';
import AlethioLink from './AlethioLink';
import Text from './Text';

import ReportIssue from 'components/NetStats/ReportIssue';
import PrivacyPolicy from 'components/NetStats/PrivacyPolicy';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import IconConainer from './IconContainer';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <FlexRow>
          <ReportIssue />
          {PRIVACY_POLICY && <PrivacyPolicy/> }
        </FlexRow>
        <FlexRow>
          <Text>powered by </Text>
          <AlethioLink href="https://helioschain.network/" target="_blank" rel="noopener noreferrer">
            <Text>&nbsp;Helioschain</Text>
          </AlethioLink>
        </FlexRow>

      </Container>
    );
  }
}


export default Footer;
