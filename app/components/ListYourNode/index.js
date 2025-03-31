import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'components/Icon';
import Container from './Container';
import IconContainer from './IconContainer';
import { showConnectNodeModal as showConnectNodeModalAction } from 'actions/global';

class ListYourNode extends React.Component {
  showModal = () => {
    window.open('https://hub.helioschain.network/docs/build/running-a-node/configuration', '_blank');
  };
  render() {
    return (
      <Container onClick={this.showModal}>
        <IconContainer>
          <Icon name="add_circle" className="white-hover"/>
        </IconContainer>
        Host your own node
      </Container>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    showConnectNodeModal: () => dispatch(showConnectNodeModalAction()),
  };
};

ListYourNode.propTypes = {
  showConnectNodeModal: PropTypes.func,
};
export default connect(
  null,
  mapDispatchToProps
)(ListYourNode);
