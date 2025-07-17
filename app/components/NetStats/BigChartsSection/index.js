import React from 'react';
import Container from './Container';
import BigChartsSectionItem from 'components/NetStats/BigChartsSectionItem';
import { connect } from 'react-redux';
import HistoricalLastMiners from 'components/NetStats/HistoricalLastMiners';
import HistoricalNodesMap from 'components/NetStats/HistoricalNodesMap';

class BigChartsSection extends React.Component {
  render() {
    const { minersData, nodesData } = this.props;
    
    return (
      <Container>
        <BigChartsSectionItem
          id="best_block"
          mainTitle="Best block"
          secondTitle="Avg. block time"
          secondValue="N/A"
          thirdTitle="Last block"
          color="#2774FE"
          iconName="clock"
          dataKey="ethstats:blockTime"
          measureUnit="s"
          tooltipKey="block"
          chartReducer="blockTime"
          topLeftReducer="lastBlock"
          topRightReducer="lastBlock"
          bottomLeftReducer="blockTime"
          valuePrefix="Block time: "
          labelPrefix="Block: "
          hasDomain
        />
        <BigChartsSectionItem
          id="transactions"
          mainTitle="Transactions"
          secondTitle="Avg. transactions"
          secondValue="N/A"
          thirdTitle="Pending transactions"
          color="#4CAF50"
          iconName="transaction"
          dataKey="alethio:numberOfTxs"
          measureUnit="TXs"
          tooltipKey="block"
          hasDomain
          chartReducer="transactionsHistory"
          topLeftReducer="transactionsHistory"
          topRightReducer="pendingLastBlock"
          bottomLeftReducer="transactionsHistory"
          valuePrefix="Transactions: "
          labelPrefix="Block: "
        />
        <BigChartsSectionItem
          id="gas_limit"
          mainTitle="Block gas limit"
          secondTitle="Avg. gas limit"
          secondValue="N/A"
          thirdTitle="Avg. gas price"
          color="#8399B8"
          iconName="gas"
          dataKey="ethon:blockGasLimit"
          measureUnit="gas"
          tooltipKey="block"
          hasDomain
          chartReducer="gasLimit"
          topLeftReducer="gasLimit"
          topRightReducer="pendingLastBlock"
          bottomLeftReducer="gasLimit"
          valuePrefix="Gas limit: "
          labelPrefix="Block: "
        />
        <BigChartsSectionItem
          id="gas_spending"
          mainTitle="Gas spending"
          secondTitle="Avg. gas spending"
          secondValue="N/A"
          thirdTitle="Gas efficiency"
          color="#FF6B6B"
          iconName="gas"
          dataKey="ethon:blockGasUsed"
          measureUnit="gas"
          tooltipKey="block"
          hasDomain
          chartReducer="gasSpending"
          topLeftReducer="gasSpending"
          topRightReducer="gasSpending"
          bottomLeftReducer="gasSpending"
          valuePrefix="Gas spending: "
          labelPrefix="Block: "
        />
        <BigChartsSectionItem
          id="block_propagation"
          mainTitle="Block propagation"
          secondTitle="Avg. propagation"
          secondValue="N/A"
          thirdTitle="Network latency"
          color="#EF6C6C"
          iconName="network"
          dataKey="histogram"
          measureUnit="ms"
          tooltipKey="interval"
          hasDomain
          chartReducer="blockPropagation"
          topLeftReducer="blockPropagation"
          topRightReducer="blockPropagation"
          bottomLeftReducer="blockPropagation"
          valuePrefix="Propagation: "
          labelPrefix="Interval: "
        />
        <BigChartsSectionItem
          id="last_miners"
          mainTitle="Last miners"
          secondTitle="Top miners"
          secondValue="N/A"
          thirdTitle="Mining activity"
          color="#EFC865"
          iconName="miner"
          dataKey="miners"
          measureUnit="blocks"
          tooltipKey="miner"
          hasDomain={false}
          chartReducer="minersTop"
          topLeftReducer="minersTop"
          topRightReducer="minersTop"
          bottomLeftReducer="minersTop"
          valuePrefix="Miner: "
          labelPrefix="Block: "
          customChart={<HistoricalLastMiners minersData={minersData} />}
        />
        <BigChartsSectionItem
          id="nodes_map"
          mainTitle="Network nodes"
          secondTitle="Active nodes"
          secondValue="N/A"
          thirdTitle="Global distribution"
          color="#50E9D2"
          iconName="network"
          dataKey="nodes"
          measureUnit="nodes"
          tooltipKey="node"
          hasDomain={false}
          chartReducer="nodesList"
          topLeftReducer="nodesList"
          topRightReducer="nodesList"
          bottomLeftReducer="nodesList"
          valuePrefix="Node: "
          labelPrefix="Location: "
          customChart={<HistoricalNodesMap nodesData={nodesData} />}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    minersData: state.minersTop.data,
    nodesData: state.nodesData.data,
  };
};

export default connect(mapStateToProps)(BigChartsSection);
