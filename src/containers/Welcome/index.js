import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Heading, SubHeading, Background } from '../../styles/pages/welcome';
import WavyLines from '../../constants/images/wavy-lines.png';
import MojoTechIcon from '../../constants/images/mojotechicon.png';
import { NameInput } from '../../components/name-input';

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
          <Image
            style={{
              alignSelf: 'flex-end',
              marginRight: 44,
              marginTop: 42,
            }}
            /* eslint-disable-next-line */
            source={MojoTechIcon}
          />
          <Heading>Welcome to MojoTech.</Heading>
          <SubHeading>
            Sign in to let your host know you&apos;re here.
          </SubHeading>
          <NameInput />
        </View>
      </View>
    );
  }
}
