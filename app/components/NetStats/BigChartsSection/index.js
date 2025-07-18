import React from 'react';
import Container from './Container';
import BigChartsSectionItem from 'components/NetStats/BigChartsSectionItem';
import { connect } from 'react-redux';
import HistoricalLastMiners from 'components/NetStats/HistoricalLastMiners';
import HistoricalNodesMap from 'components/NetStats/HistoricalNodesMap';
import styled from 'styled-components';

const NodesTableContainer = styled.div`
  margin-top: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TableHeader = styled.div`
  background: #f8fafc;
  padding: 16px 20px;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
`;

const TableContent = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #f1f5f9;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f8fafc;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const NodeName = styled.div`
  flex: 2;
  font-weight: 500;
  color: #1e293b;
`;

const BlockNumber = styled.div`
  flex: 1;
  color: #64748b;
  font-family: 'Arial Monospaced MT', monospace;
`;

const StatusIndicator = styled.div`
  flex: 0 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.online ? '#10b981' : '#ef4444'};
  margin-right: 8px;
`;

const StatusText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.online ? '#10b981' : '#ef4444'};
`;

const EmptyState = styled.div`
  padding: 40px 20px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
`;

class BigChartsSection extends React.Component {
  renderNodesTable() {
    const { nodesData } = this.props;
    
    if (!nodesData || Object.keys(nodesData).length === 0) {
      return (
        <NodesTableContainer>
          <TableHeader>Network Nodes Status</TableHeader>
          <EmptyState>No nodes data available</EmptyState>
        </NodesTableContainer>
      );
    }

    const nodesList = Object.keys(nodesData).map(nodeKey => {
      const nodeData = nodesData[nodeKey];
      const nodeInfo = nodeData['ethstats:nodeData'];
      const blockData = nodeData['ethstats:nodeBlockData'];
      
      return {
        name: nodeInfo ? nodeInfo['ethstats:nodeName'] : 'Unknown',
        blockNumber: blockData ? blockData['ethon:number'] : 'N/A',
        isOnline: nodeInfo ? nodeInfo['ethstats:nodeIsActive'] : false
      };
    }).filter(node => node.name !== 'Unknown');

    return (
      <NodesTableContainer>
        <TableHeader>Network Nodes Status ({nodesList.length} nodes)</TableHeader>
        <TableContent>
          {nodesList.map((node, index) => (
            <TableRow key={index}>
              <NodeName>{node.name}</NodeName>
              <BlockNumber>{node.blockNumber}</BlockNumber>
              <StatusIndicator>
                <StatusDot online={node.isOnline} />
                <StatusText online={node.isOnline}>
                  {node.isOnline ? 'Online' : 'Offline'}
                </StatusText>
              </StatusIndicator>
            </TableRow>
          ))}
        </TableContent>
      </NodesTableContainer>
    );
  }

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
        {this.renderNodesTable()}
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
          chartData={this.props.blockPropagationData}
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
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  // Extract the correct blockPropagation data structure
  const blockPropagationData = state.blockPropagation.data && 
    state.blockPropagation.data['ethstats:blockPropagationHistogramData'] 
    ? state.blockPropagation.data['ethstats:blockPropagationHistogramData'] 
    : [];

  return {
    minersData: state.minersTop.data,
    nodesData: state.nodesData.data,
    blockPropagationData: blockPropagationData,
  };
};

export default connect(mapStateToProps)(BigChartsSection);
