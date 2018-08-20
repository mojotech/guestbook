import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import {
  Heading,
  SubHeading,
  NameInput,
  Background,
  InputWrapper,
} from '../../styles/pages/welcome';
import { RootView } from '../../components/root-view';
import MojoTechIcon from '../../constants/images/mojotechicon.png';
import WavyLines from '../../constants/images/wavy-lines.png';

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

  handleNextPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Employees');
  };

  render() {
    return (
      <RootView>
        <BottomAnchoredBackgroundImage />
        <View style={{ flex: 1 }}>
          <Image
            style={{
              alignSelf: 'flex-end',
              marginRight: 44,
              marginTop: 42,
            }}
            source={MojoTechIcon}
          />
          <Heading>Sign in here.</Heading>
          <SubHeading>
            Welcome! Sign in to let your host know you&apos;re here.
          </SubHeading>
          <InputWrapper>
            <NameInput placeholder="What&apos;s your name?" />
          </InputWrapper>
        </View>
      </RootView>
    );
  }
}
