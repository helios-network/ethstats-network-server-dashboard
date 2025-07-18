import React from 'react';
import SortableNodesList from './SortableNodesList';
import Container from './Container';
import Header from './Header';
import HeaderContent from './HeaderContent';
import HeaderItem from './HeaderItem';
import Icon from 'components/Icon';
import SortIconContainer from './SortIconContainer';
import { NETWORK_ALGO } from 'config';

export default class NodesList extends React.Component {
  constructor(props) {
    super(props);

    this.headerData = [
      {
        id: 'ethNodeName',
        name: 'Node name',
        width: 300,
        ascendingOrder: true,
        extraProps: {doubleGrow: true},
      }, {
        id: 'nodeType',
        name: 'Type',
        width: 100,
        ascendingOrder: true,
        extraProps: {},
        style: { paddingLeft: "20px" }
      }, {
        id: 'latency',
        name: 'Latency',
        width: 80,
        ascendingOrder: true,
        extraProps: {},
      }, {
        id: ((['clique', 'ibft2'].includes(NETWORK_ALGO)) ? 'isValidator' : 'isMining'),
        name: ((['clique', 'ibft2'].includes(NETWORK_ALGO)) ? 'Is validator' : 'Is mining'),
        width: 90,
        extraProps: {},
        ascendingOrder: true,
        noSorting: true,
      }, {
        id: 'peers',
        name: 'Peers',
        width: 60,
        ascendingOrder: false,
        extraProps: {},
      }, {
        id: 'blockNr',
        name: 'Last block',
        width: 180,
        ascendingOrder: false,
        extraProps: {},
      }, {
        id: 'txs',
        name: 'Block TXs',
        width: 90,
        ascendingOrder: false,
        extraProps: {},
      }, {
        id: 'blockTime',
        name: 'Block time',
        width: 100,
        extraProps: {},
        ascendingOrder: true,
        noSorting: true,
      }, {
        id: 'propagationTime',
        name: 'Propagation time',
        width: 280,
        ascendingOrder: true,
        extraProps: {},
      }, {
        id: 'propagationAvg',
        name: 'Avg',
        width: 80,
        ascendingOrder: true,
        extraProps: {rightSide: true},
      }, {
        id: 'uptime',
        name: 'Uptime',
        width: 70,
        ascendingOrder: false,
        extraProps: {rightSide: true},
      },
    ];

    const localStoragePinnedNodes =
      localStorage.getItem('pinnedNodes') === null ? {} : JSON.parse(localStorage.getItem('pinnedNodes'));

    this.state = {
      sortOptions: {
        key: 'blockNr',
        ascendingOrder: false,
      },
      pinnedNodes: localStoragePinnedNodes,
    };
  }

  changeSortType = (key) => {
    const options = {
      key: key,
      ascendingOrder: this.headerData.find((hData) => {
        return hData.id === key;
      }).ascendingOrder === true,
    };
    if (this.state.sortOptions.key === key) {
      options.ascendingOrder = !this.state.sortOptions.ascendingOrder;
    }
    this.setState({sortOptions: options});
  };

  updateNodePin = (nodeName, pin) => {
    const pinnedNodes = { ...this.state.pinnedNodes };
    pinnedNodes[nodeName] = pin;
    this.setState({pinnedNodes});
    localStorage.setItem('pinnedNodes', JSON.stringify(pinnedNodes));
  };

  render() {
    return (
      <Container id="nodes_list">
        <Header>
          <HeaderContent>
            {
              this.headerData.map((hData) => {
                return (
                  <HeaderItem
                    key={hData.id}
                    active={this.state.sortOptions.key === hData.id}
                    width={hData.width + 'px'}
                    id={hData.id}
                    onClick={!hData.noSorting ? this.changeSortType : undefined}
                    doubleGrow={ hData.extraProps.doubleGrow }
                    rightSide={ hData.extraProps.rightSide }
                    style={{... hData.style}}
                  >
                    { hData.name }
                    { this.state.sortOptions.key === hData.id &&
                    <SortIconContainer ascending={this.state.sortOptions.ascendingOrder}>
                      <Icon name="sort-arrow"/>
                    </SortIconContainer>
                    }
                  </HeaderItem>
                );
              })
            }
          </HeaderContent>
        </Header>
        <SortableNodesList
          sortingOptions={this.state.sortOptions}
          pinnedNodes={this.state.pinnedNodes}
          updateNodePin={this.updateNodePin}
        />
      </Container>
    );
  }
}
