import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from './Container';

class AvgBlockTime extends React.Component {
  getBlockTimeColor(blockTime) {
    if (blockTime < 30) {
      return '#4CAF50'; // vert
    } else if (blockTime < 60) {
      return '#FF9800'; // orange
    } else {
      return '#F44336'; // rouge
    }
  }

  render() {
    const { avgBlockTime } = this.props;
    const blockTime = avgBlockTime ? parseFloat(avgBlockTime) : null;
    
    if (!blockTime || isNaN(blockTime)) {
      return (
        <Container color="white">
          N/A
        </Container>
      );
    }

    const color = this.getBlockTimeColor(blockTime);
    
    return (
      <Container color={color}>
        {blockTime.toFixed(1)}s
      </Container>
    );
  }
}

AvgBlockTime.propTypes = {
  avgBlockTime: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    avgBlockTime: state.avgBlockTime.data,
  };
};

export default connect(
  mapStateToProps
)(AvgBlockTime); 