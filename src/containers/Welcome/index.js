import React from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  Heading,
  SubHeading,
  Background,
} from '../../styles/pages/welcome';
import WavyLines from '../../constants/images/wavy-lines.png';
import MojoTechIcon from '../../constants/images/mojotechicon.png';
import NameInput from '../../components/name-input';

export default class Welcome extends React.Component {
  state = {
    inputMarginTop: 104,
    isFocused: false,
  };

  scrollUp = () => {
    this.setState({ inputMarginTop: 75, isFocused: true});
  };

  scrollDown = () => {
    Keyboard.dismiss();
    this.setState({inputMarginTop: 104, isFocused: false});
  }

  render() {
    const {inputMarginTop, isFocused} = this.state;
    return (
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            flexDirection: 'row',
          }}
        >
          <Background
            /* eslint-disable-next-line */
            source={WavyLines}
          />
        </View>
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
                /* eslint-disable-next-line */
                source={MojoTechIcon}
              />
              <Heading>
                Welcome to MojoTech.
              </Heading>
              <SubHeading>
                Sign in to let your host know you&apos;re here.
              </SubHeading>
              <NameInput 
                handleOnFocus={this.scrollUp}
                handleMarginTop={inputMarginTop}
                handleOnPress={this.scrollDown}
                isFocused={isFocused}
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
