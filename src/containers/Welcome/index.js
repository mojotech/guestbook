import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { RootView } from '../../components/root-view';
import { Heading, SubHeading, Background } from '../../styles/pages/welcome';
import WavyLines from '../../constants/images/wavy-lines.png';
import MojoTechIcon from '../../constants/images/mojotechicon.png';
import { NameInput } from '../../components/name-input';

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
          <Heading>Welcome to MojoTech.</Heading>
          <SubHeading>
            Sign in to let your host know you&apos;re here.
          </SubHeading>
          <NameInput nextPage={this.handleNextPress} />
        </View>
      </RootView>
    );
  }
}
