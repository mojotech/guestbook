import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Heading,
  SubHeading,
  NameInput,
  Background,
  InputWrapper,
} from '../../styles/pages/welcome';
import { RootView } from '../../components/root-view';
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
