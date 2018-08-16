import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Heading,
  SubHeading,
  NameInput,
  Background,
  InputWrapper,
} from '../../styles/pages/welcome';
import WavyLines from '../../constants/images/wavy-lines.png';

export default class Welcome extends React.Component {
  render() {
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
        <View style={{ flex: 1 }}>
          <Heading>Sign in here.</Heading>
          <SubHeading>
            Welcome! Sign in to let your host know you&apos;re here.
          </SubHeading>
          <InputWrapper>
            <NameInput placeholder="What&apos;s your name?" />
          </InputWrapper>
        </View>
      </View>
    );
  }
}
