import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { netstatsApiUrl } from 'utils/helpers';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import { hideConnectNodeModal as hideConnectNodeModalAction} from 'actions/global';
import Icon from 'components/Icon';
import Content from './Content';
import FlexRow from './FlexRow';
import CloseIconContainer from './CloseIconContainer';
import CloseIcon from './CloseIcon';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Subtitle from './Subtitle';
import Title from './Title';
import Text from './Text';
import Button from './Button';
import ErrorIcon from './ErrorIcon';

class ConnectNodeModal extends React.Component {
  constructor() {
    super();

    this.state = {
      gethMode: false,
      nodeName: '',
      email: '',
      success: null,
      apiError: null,
      nodeNameError: null,
      emailError: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }
  handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.props.hideConnectNodeModal();
    }
    if (event.keyCode === 13 && event.target.className.includes('connectNodeInput')) {
      this.handleSubmit();
    }
  };
  handleClickOutside = evt => {
    this.props.hideConnectNodeModal();
  };
  goGethMode = () => {
    this.setState(
      {
        gethMode: true,
      }
    );
  };
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit = event => {
    if (this.checkFields()) {
      const user = {
        nodeName: this.state.nodeName,
        accountEmail: this.state.email,
      };
      axios.post(`${netstatsApiUrl()}/nodes`, user)
        .then(res => {
          if (res.data.body.success) {
            this.setState({
              success: true,
              apiError: false,
              nodeNameError: false,
              emailError: false,
            });
          } else {
            this.setState({
              success: false,
              apiError: res.data.body.errors[0],
              nodeNameError: false,
              emailError: false,
            });
          }
        });
    }
  };
  checkFields() {
    if (this.state.nodeName && this.state.nodeName.length !== 0) {
      const nameRe = /^[a-zA-Z0-9-_]{3,64}$/;
      if (!nameRe.test(this.state.nodeName)) {
        this.setState({
          apiError: '',
          emailError: '',
          nodeNameError: 'Try renaming your node using letters (aA to zZ), digits and "-" or "_", to form a name of 3 to 64 characters.'
        });
        return false;
      }
      if (this.state.email && this.state.email.length !== 0) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) {
          this.setState(
            {
              emailError: 'Please make sure you use a valid e-mail address.',
              nodeNameError: '',
              apiError: '',
            }
          );
          return false;
        } else {
          return true;
        }
      } else {
        this.setState(
          {
            emailError: 'Please enter your e-mail address.',
            nodeNameError: '',
            apiError: '',
          }
        );
        return false;
      }
    } else {
      this.setState(
        {
          nodeNameError: 'Please enter a name for your node.',
          emailError: '',
          apiError: '',
        }
      );
      return false;
    }
  }
  render() {
    return (
      <Content>
        <CloseIconContainer onClick={() => {this.props.hideConnectNodeModal();}}>
          <CloseIcon/>
        </CloseIconContainer>
        <LeftSection>
          <Subtitle>How to host my own Helios Chain node?</Subtitle>
          <Title>Connect with the Helios team</Title>
          <Text>As the Helios network is a Proof of Authority chain, you need to contact the team of helios at info@helioschain.network to propose yourself as a validator. You may need to hold and stake an high minimum of GLQ to be selected.</Text>
          <div>
            <a href="https://www.npmjs.com/package/ethstats-cli"
               target="_blank"
               rel="noopener noreferrer"
            >
              <Button maxWidth="135px">Send a mail to info@helioschain.network<Icon name="exit" className="rotated icon"/></Button>
            </a>
          </div>
        </LeftSection>
      </Content>
    );
  }
}

ConnectNodeModal.propTypes = {
  hideConnectNodeModal: PropTypes.func,
};


const mapDispatchToProps = (dispatch) => {
  return {
    hideConnectNodeModal: () => dispatch(hideConnectNodeModalAction()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(onClickOutside(ConnectNodeModal));
