import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { RootView } from '../../components/root-view';
import { Heading, SubHeading, Background } from '../../styles/pages/welcome';
import WavyLines from '../../constants/images/wavy-lines.png';
import MojoTechIcon from '../../constants/images/mojotechicon.png';
import NameInput from '../../components/name-input';

const BottomAnchoredBackgroundImage = () => (
  <RootView style={{ top: null }}>
    <Background source={WavyLines} />
  </RootView>
);

export default class Welcome extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    inputMarginTop: 104,
    isFocused: false,
  };

  scrollUp = () => {
    this.setState({ inputMarginTop: 75, isFocused: true });
  };

  scrollDown = () => {
    Keyboard.dismiss();
    this.setState({ inputMarginTop: 104, isFocused: false });
  };

  handleNextPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Employees');
  };

  render() {
    const { inputMarginTop, isFocused } = this.state;
    return (
      <RootView>
        <BottomAnchoredBackgroundImage />
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={160}
          enabled
        >
          <TouchableWithoutFeedback onPress={this.scrollDown}>
            <View>
              <Image
                style={{
                  alignSelf: 'flex-end',
                  marginRight: 44,
                  marginTop: 42,
                }}
                source={MojoTechIcon}
              />
              <Heading>Welcome to MojoTech.</Heading>
              <SubHeading>
                Sign in to let your host know you&apos;re here.
              </SubHeading>
              <NameInput
                handleOnFocus={this.scrollUp}
                handleMarginTop={inputMarginTop}
                handleOnPress={this.handleNextPress}
                isFocused={isFocused}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </RootView>
    );
  }
}
