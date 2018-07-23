import React from 'react';
import { Button } from 'react-native';
import { IncomingWebhook } from '@slack/client';

export default class Slack extends React.Component {

  sendMessage = () => {
    console.log('Hello world!');
  }

  render() {
    return (
      <Button 
        onPress={this.sendMessage}
        title="Send slackbot message!"
        color="green" 
      />
    );
  }
}
