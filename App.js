import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './src/containers/Welcome/index';
import { listenToMentions } from './src/components/slack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  initSlackServices = () => {
    listenToMentions();
  }

  componentDidMount = () => {
    this.initSlackServices();
  }

  render() {
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}
