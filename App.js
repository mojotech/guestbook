import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import Welcome from './src/containers/Welcome/index';
import { listenToMentions } from './src/lib/slack';
import Employees from './src/containers/Employees/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createSwitchNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Employees: {
      screen: Employees,
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default class App extends React.Component {
  initSlackServices = () => {
    listenToMentions();
  };

  componentDidMount = () => {
    this.initSlackServices();
  };

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}
