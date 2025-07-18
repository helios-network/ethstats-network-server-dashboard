import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { DsService } from 'service';
import { loadLastBlock as loadLastBlockAction } from 'actions/lastBlock';
import { saveSmallChartBarCount as saveSmallChartBarCountAction } from 'actions/global';
import { saveBigChartBarCount as saveBigChartBarCountAction } from 'actions/global';
import theme from './theme';
import Modal from 'components/Modal';
import NodeModal from 'components/NetStats/NodeModal';
import CustomHeader from 'components/CustomHeader';
import NoOverflowContainer from 'components/CustomHeader/NoOverflowContainer';
import GuideTour from 'components/NetStats/GuideTour';
import ConnectNodeModal from 'components/ConnectNodeModal';
import CookiesBanner from 'components/CookiesBanner';
import Container from 'components/ConnectNodeModal/Container';
import Footer from '../../components/NetStats/Footer';
import { GOOGLE_ANALYTICS_ID, HOTJAR_ID } from "config";
import { initGoogleAnalytics, initHotjar } from '../../utils/helpers';

const BIG_BAR_WIDTH = 8;
const SMALL_BAR_WIDTH = 6;
const BIG_ZONE_USED_CONTENT = 715;
const SMALL_ZONE_USED_CONTENT = 1040;
const MIN_SMALL_BARS = 26;
const MIN_BIG_BARS = 30;

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    visibleSearch: PropTypes.bool,
    showSearch: PropTypes.func,
    hideSearch: PropTypes.func,
    loadLastBlock: PropTypes.func,
    errorSearch: PropTypes.func,
    saveSmallChartBarCount: PropTypes.func,
    saveBigChartBarCount: PropTypes.func,
    displaySearch: PropTypes.bool,
    visibleNodeHistory: PropTypes.bool,
    visibleConnectNode: PropTypes.bool,
    searchString: PropTypes.string,
    location: PropTypes.object,
  };
  constructor() {
    super();

    this.state = {
      tour: {
        run: localStorage.getItem('tourCompleted') === null,
        autoStart: false,
      },
      acceptedCookies: localStorage.getItem('cookiesAccepted') !== null,
    };
  }
  componentDidMount() {
    DsService.getRawRecord('ethstats/stats/lastBlockData').then((record) => {
      record.subscribe(this.handleLastBlockSubscribe.bind(this, record), true);
    });
    window.addEventListener('resize', this.computeNumberOfBars);
    this.computeNumberOfBars();
    if (GOOGLE_ANALYTICS_ID) {
      initGoogleAnalytics(GOOGLE_ANALYTICS_ID);
    }
    if (HOTJAR_ID) {
      initHotjar(HOTJAR_ID);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.computeNumberOfBars);
  }

  computeNumberOfBars = () => {
    const windowWidth = window.innerWidth;
    let smallChartNumberOfBars = Math.floor((windowWidth - SMALL_ZONE_USED_CONTENT) / 3 / SMALL_BAR_WIDTH);
    smallChartNumberOfBars = Math.min(100, smallChartNumberOfBars);
    smallChartNumberOfBars = Math.max(MIN_SMALL_BARS, smallChartNumberOfBars);
    this.props.saveSmallChartBarCount(smallChartNumberOfBars);

    let bigChartNumberOfBars = Math.floor((windowWidth - BIG_ZONE_USED_CONTENT) / 3 / BIG_BAR_WIDTH);
    bigChartNumberOfBars = Math.min(100, bigChartNumberOfBars);
    bigChartNumberOfBars = Math.max(MIN_BIG_BARS, bigChartNumberOfBars);
    this.props.saveBigChartBarCount(bigChartNumberOfBars);
  };
  handleLastBlockSubscribe(item, data) {
    this.props.loadLastBlock(data['ethstats:lastBlockData']);
  }
  startGuideTour = () => {
    if (this.state.tour.run) {
      this.setState({tour: {run: false, autoStart: false}}, () => {
        this.setState({tour: {run: true, autoStart: true}});
      });
    } else {
      this.setState({tour: {run: true, autoStart: true}});
    }
  };
  resetTour = () => {
    localStorage.setItem('tourCompleted', '1');
    this.setState({tour: {run: false, autoStart: false}});
  };
  acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', '1');
    this.setState({
      acceptedCookies: true,
    });
  };
  render() {
    const { children, visibleSearch, visibleNodeHistory, visibleConnectNode } = this.props;
    
    const header = (
      <NoOverflowContainer className="min1440">
        <CustomHeader startGuideTour={this.startGuideTour} hasActiveNodes hasGuideTour/>
      </NoOverflowContainer>
    );
    const inPrivacy = window.location.pathname === '/privacy-policy';
    return (
      <ThemeProvider theme={theme}>
        <div id="container" ref="container" className={ visibleSearch ? 'blur cf' : 'cf'}>
          <main role="main">
            <div>
              <Modal active={visibleNodeHistory}>
                <div className="full-width">
                  <NodeModal/>
                </div>
              </Modal>
              <Modal active={visibleConnectNode} addNodeBg>
                <div className="full-width">
                  <Container>
                    <ConnectNodeModal/>
                  </Container>
                </div>
              </Modal>
            </div>
            <div className="full-width">
              {/* <GuideTour
                run={this.state.tour.run}
                autoStart={this.state.tour.autoStart}
                onTourEnd={this.resetTour}
              /> */}
              { !this.state.acceptedCookies && <CookiesBanner onClick={this.acceptCookies}/> }
              { !inPrivacy && header }
              { children }
              { !inPrivacy && <Footer hasGuideTour startGuideTour={this.startGuideTour}/> }
            </div>
          </main>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visibleNodeHistory: state.global.showNodeHistoryModal,
    visibleConnectNode: state.global.showConnectNodeModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadLastBlock: (data) => dispatch(loadLastBlockAction(data)),
    saveSmallChartBarCount: (count) => dispatch(saveSmallChartBarCountAction(count)),
    saveBigChartBarCount: (count) => dispatch(saveBigChartBarCountAction(count)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
