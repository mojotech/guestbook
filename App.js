import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './src/containers/Welcome/index';
import Slack from './src/components/slack';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
        <Slack />
      </View>
    );
  }
}
