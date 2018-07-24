import React from 'react';
import { Button } from 'react-native';
import Config from 'react-native-config';

const slack = require('slack');

const botToken = Config.SLACK_BOT_TOKEN;

export default class SlackMessage extends React.Component {
  sendMessageToChannel = (channelName, message) => {
    slack.chat.postMessage({ token: botToken, channel: channelName, text: message });
  }

  render() {
    return (
      <Button
        onPress={() => this.sendMessageToChannel('#guestbot-test', 'Hello World!')}
        title="Send slackbot message!"
        color="green"
      />
    );
  }
}
