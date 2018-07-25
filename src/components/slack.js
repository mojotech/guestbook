import React from 'react';
import { Button } from 'react-native';
import Config from 'react-native-config';
import slack from 'slack';

const botToken = Config.SLACK_BOT_TOKEN;

const sendMessageToChannel = (channel, text) => {
  slack.chat.postMessage({ token: botToken, channel, text });
};

export const SlackButton = () => (
  <Button
    onPress={() => sendMessageToChannel('#guestbot-test', 'Hello World!')}
    title="Send slackbot message!"
    color="green"
  />
);

export default SlackButton;
