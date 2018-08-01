import React from 'react';
import { StyleSheet, View } from 'react-native';
import Welcome from './src/containers/Welcome/index';


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
      </View>
    );
  }
}
