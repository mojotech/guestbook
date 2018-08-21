import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { RootView } from '../../components/root-view';
import { Heading, SubHeading, Background } from '../../styles/pages/welcome';
import WavyLines from '../../constants/images/wavy-lines.png';
import MojoTechIcon from '../../constants/images/mojotechicon.png';
import NameInputView from '../../components/name-input';
import { isPresent } from '../../lib/util';

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

  handleNextPress = guestName => {
    const { navigation } = this.props;
    if (isPresent(guestName)) {
      navigation.navigate('Employees', { guestName });
    }
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
          <Heading>Welcome to MojoTech.</Heading>
          <SubHeading>
            Sign in to let your host know you&apos;re here.
          </SubHeading>
          <NameInputView nextPage={this.handleNextPress} />
        </View>
      </RootView>
    );
  }
}
