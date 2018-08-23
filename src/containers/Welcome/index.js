import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { RootView } from '../../components/root-view';
import { Heading, SubHeading, Background } from '../../styles/pages/welcome';
import WavyLines from '../../constants/images/wavy-lines.png';
import MojoTechIcon from '../../constants/images/mojotechicon.png';
import { NameInputView } from '../../components/name-input';
import { isPresent } from '../../lib/util';

const BottomAnchoredBackgroundImage = () => (
  <RootView style={{ top: null }}>
    <Background source={WavyLines} />
  </RootView>
);

const BrandingIcon = () => (
  <Image
    style={{
      alignSelf: 'flex-end',
      marginRight: 44,
      marginTop: 42,
    }}
    source={MojoTechIcon}
  />
);

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.nameInput = null;

    this.state = {
      guestName: '',
      timer: setInterval(this.tick, 1000),
      counter: 0,
    };
  }

  componentWillUnmount = () => {
    const { timer } = this.state;
    clearInterval(timer);
  };

  tick = () => {
    const { counter } = this.state;

    this.setState({ counter: counter + 1 });

    if (counter >= 60) {
      Keyboard.dismiss();
      this.nameInput.blur();
      this.setState({
        guestName: '',
        counter: 0,
      });
    }
  };

  setNameInput = inputElement => {
    this.nameInput = inputElement;
  };

  handleNextPress = guestName => () => {
    const { navigation } = this.props;
    if (isPresent(guestName)) {
      navigation.navigate('Employees', { guestName });
    }
  };

  handleChangeNameText = text => this.setState({ guestName: text, counter: 0 });

  render() {
    const { guestName } = this.state;

    return (
      <RootView>
        <BottomAnchoredBackgroundImage />
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={160}
          enabled
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <BrandingIcon />
              <Heading>Welcome to MojoTech.</Heading>
              <SubHeading>
                Sign in to let your host know you&apos;re here.
              </SubHeading>
              <NameInputView
                guestName={guestName}
                handleNextPress={this.handleNextPress(guestName)}
                handleChangeNameText={this.handleChangeNameText}
                offsetOnFocus={-30}
                inputRef={this.setNameInput}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </RootView>
    );
  }
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Welcome;
