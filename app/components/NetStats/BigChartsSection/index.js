import React from 'react';
import Container from './Container';
import BigChartsSectionItem from 'components/NetStats/BigChartsSectionItem';

class BigChartsSection extends React.Component {
  render() {
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
        {/* <BigChartsSectionItem
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
        /> */}
      </Container>
    );
  }
}

export default BigChartsSection;
