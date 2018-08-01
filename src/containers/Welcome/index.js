import React from 'react';
import {
  Text, View, TextInput, Button,
} from 'react-native';

const buttonPress = () => {};

export default class Welcome extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Welcome To MojoTech!
        </Text>
        <TextInput
          style={{ height: 40 }}
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
