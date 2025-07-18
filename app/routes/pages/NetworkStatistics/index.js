import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NodesList from 'components/NetStats/NodesList';
import BigChartsSection from 'components/NetStats/BigChartsSection';
import SmallChartsSection from 'components/NetStats/SmallChartsSection';
import ContainerWithFixedElements from 'components/ContainerWithFixedElements';
import { DsService } from 'service';
import { loadNodes, unloadNodes } from 'actions/nodesList';
import { loadAvgBlockTime as loadAvgBlockTimeAction } from 'actions/avgBlockTime';
import { loadAvgNetworkHashrate as loadAvgNetworkHashrateAction } from 'actions/avgNetworkHashrate';
import { loadBlockTime as loadBlockTimeAction } from 'actions/blockTime';
import { loadBlockDifficulty as loadBlockDifficultyAction } from 'actions/blockDifficulty';
import { loadTransactionsHistory as loadTransactionsHistoryAction } from 'actions/transactionsHistory';
import { loadUncleCount as loadUncleCountAction } from 'actions/uncleCount';
import { loadGasSpending as loadGasSpendingAction } from 'actions/gasSpending';
import { loadGasLimit as loadGasLimitAction } from 'actions/gasLimit';
import { loadBlockPropagation as loadBlockPropagationAction } from 'actions/blockPropagation';
import { loadMinersTop as loadMinersTopAction } from 'actions/minersTop';
import { loadPendingLastBlock as loadPendingLastBlockAction } from 'actions/pendingLastBlock';
import { startTickTimer, stopTickTimer } from 'actions/global';
import { AVG_GAS_PRICE_ENABLED } from 'config';

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 32px;
  padding-bottom: 120px;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px;
    padding-bottom: 80px;
  }
`;

const SectionContainer = styled.div`
  margin-bottom: 40px;
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;
  transition: all 0.2s ease;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.06);
  width: 100%;
  box-sizing: border-box;

  &:hover {
    border-color: rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;
    margin-bottom: 24px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SectionIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${props => props.color || '#f0f4f8'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.iconColor || '#64748b'};
  font-size: 1.1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
`;

const SectionDescription = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  margin: 8px 0 0 44px;
  line-height: 1.5;
  width: 100%;

  @media (max-width: 768px) {
    margin: 8px 0 0 36px;
    font-size: 0.8rem;
  }
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 24px;
`;

class NetworkStatistics extends React.Component {
  componentDidMount() {
    this.props.dispatch(startTickTimer());
    this.props.dispatch(loadNodes());
    DsService.getList('charts').then( ( list ) => {
      // interact with the list
      list.map((item) => {
        DsService.getRawRecord(item).then(record => {
          record.subscribe(this.handleChartSubscribe.bind(this, item), true);
        });
      });
    });
    DsService.getList('stats').then( ( list ) => {
      // interact with the list
      list.map((item) => {
        DsService.getRawRecord(item).then(record => {
          record.subscribe(this.handleChartSubscribe.bind(this, item), true);
        });
      });
    });
    if (AVG_GAS_PRICE_ENABLED) {
      DsService.getRawRecord('pending/v2/lastBlockData').then((record) => {
        record.subscribe(this.handlePendingLastBlockSubscribe.bind(this), true);
      });
    }
  }
  componentWillUnmount() {
    this.props.dispatch(stopTickTimer());
    this.props.dispatch(unloadNodes());
    DsService.getList('charts').then( ( list ) => {
      list.map((item) => {
        DsService.getRawRecord(item).then(record => {
          record.unsubscribe();
        });
      });
    });
    DsService.getList('stats').then( ( list ) => {
      list.map((item) => {
        if (item !== 'ethstats/stats/lastBlockData') {
          DsService.getRawRecord(item).then(record => {
            record.unsubscribe();
          });
        }
      });
    });
    if (AVG_GAS_PRICE_ENABLED) {
      DsService.getRawRecord('pending/v2/lastBlockData').then((record) => {
        record.unsubscribe();
      });
    }
  }
  handlePendingLastBlockSubscribe(data) {
    this.props.dispatch(loadPendingLastBlockAction(data));
  }
  handleChartSubscribe(item, data) {
    const { dispatch } = this.props;
    if (item === 'ethstats/stats/averageBlockTime') {
      dispatch(loadAvgBlockTimeAction(data['ethstats:averageBlockTime']));
    } else if (item === 'ethstats/stats/averageNetworkHashrate') {
      dispatch(loadAvgNetworkHashrateAction(data['ethstats:averageNetworkHashrate']));
    } else if (item === 'ethstats/chart/blockTimeChartData') {
      dispatch(loadBlockTimeAction(data['ethstats:blockTimeChartData']));
    } else if (item === 'ethstats/chart/blockDifficultyChartData') {
      dispatch(loadBlockDifficultyAction(data['ethstats:blockDifficultyChartData']));
    } else if (item === 'ethstats/chart/transactionsChartData') {
      dispatch(loadTransactionsHistoryAction(data['ethstats:transactionsChartData']));
    } else if (item === 'ethstats/chart/uncleCountChartData') {
      dispatch(loadUncleCountAction(data['ethstats:uncleCountChartData']));
    } else if (item === 'ethstats/chart/gasSpendingChartData') {
      dispatch(loadGasSpendingAction(data['ethstats:gasSpendingChartData']));
    } else if (item === 'ethstats/chart/gasLimitChartData') {
      dispatch(loadGasLimitAction(data['ethstats:gasLimitChartData']));
    } else if (item === 'ethstats/chart/blockPropagationChartData') {
      dispatch(loadBlockPropagationAction(data['ethstats:blockPropagationChartData']));
    } else if (item === 'ethstats/chart/topMinersChartData') {
      dispatch(loadMinersTopAction(data['ethstats:topMinersChartData']));
    }
  }
  render() {
    return (
      <PageContainer>
        <ContainerWithFixedElements>
          <SectionContainer>
            <SectionHeader>
              <div>
                <SectionTitle>
                  <SectionIcon color="#e0f2fe" iconColor="#0369a1">
                    📊
                  </SectionIcon>
                  Network Overview
                </SectionTitle>
                <SectionDescription>
                  Real-time network performance metrics and statistics
                </SectionDescription>
              </div>
            </SectionHeader>
            <BigChartsSection/>
          </SectionContainer>
          
          <SectionContainer>
            <SectionHeader>
              <div>
                <SectionTitle>
                  <SectionIcon color="#f0fdf4" iconColor="#166534">
                    🌐
                  </SectionIcon>
                  Network Nodes
                </SectionTitle>
                <SectionDescription>
                  Active nodes and their current status in the network. Monitor real-time connectivity and block synchronization.
                </SectionDescription>
              </div>
            </SectionHeader>
            <NodesList/>
          </SectionContainer>
        </ContainerWithFixedElements>
      </PageContainer>
    );
  }
}

NetworkStatistics.propTypes = {
  dispatch: PropTypes.func,
  startGuideTour: PropTypes.func,
};

export default connect()(NetworkStatistics);

