import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  SignInHere, WelcomeSignIn, NameInput, Background,
} from '../../styles/pages/welcome';
import { WAVYLINESPNG } from '../../constants/images';


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
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Background
            source={WAVYLINESPNG}
          />
        </View>
        <View
          style={{ flex: 1 }}
        >
          <SignInHere>
            Sign in here.
          </SignInHere>
          <WelcomeSignIn>
            {"Welcome! Sign in to let your host know you're here."}
          </WelcomeSignIn>
          <NameInput
            placeholder={"\t What's your name?"}
          />
        </View>
      </View>
    );
  }
}
