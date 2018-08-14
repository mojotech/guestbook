import React from 'react';
import {
  Text, View, TextInput, Button, StyleSheet,
} from 'react-native';

const buttonPress = () => {};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Altis-Bold',
  },
  input: {
    fontFamily: 'GTAmerica-Regular',
    height: 40,
  },
});

export default class Welcome extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Welcome To MojoTech!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="What is your name"
        />
        <Button
          onPress={buttonPress}
          title="Next"
        />
      </View>
    );
  }
}
