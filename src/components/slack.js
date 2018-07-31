import React from 'react';
import { Button } from 'react-native';
import Config from 'react-native-config';
import slack from 'slack';
import { initMojoNames, displayMojos } from '../store/asyncStorage';

const botToken = Config.SLACK_BOT_TOKEN;

const sendMessageToChannel = (channel, text) => {
  slack.chat.postMessage({ token: botToken, channel, text });
};

const storeUsersInfo = (usersInfo) => {
  const mojoList = usersInfo.filter(
    userInfo => (!userInfo.user.is_bot && !userInfo.user.is_app_user),
  )
    .map(userInfo => ({
      name: userInfo.user.profile.real_name,
      image: userInfo.user.profile.image_48,
      altImage: '',
      slackID: userInfo.user.id,
      lastRetrieved: Date.now(),
    }));
  initMojoNames(mojoList);
  displayMojos();
};

const getUsersInfo = async (userIds) => {
  try {
    const usersInfo = await Promise.all(userIds.map(async userId => slack.users.info(
      {
        token: botToken,
        user: userId,
      },
    )));
    storeUsersInfo(usersInfo);
  } catch (error) {
    console.log(error);
  }
};

const getUsersFromChannel = async (channelName) => {
  try {
    const response = await slack.channels.list({ token: botToken });
    const { channels } = response;
    const channel = channels.find((c => c.name === channelName));
    if (channel) {
      const channelInfo = await slack.channels.info({ token: botToken, channel: channel.id });
      const { members } = channelInfo.channel;
      getUsersInfo(members);
    } else {
      console.log('Channel does not exist. Please try a valid channel name.');
    }
  } catch (error) {
    console.log(error);
  }
};

const sendDirectMessageToUser = (userArray, message) => {
  const slackIds = userArray.map(user => user.slackID);
  if (userArray.length === 1) {
    slack.chat.postMessage({ token: botToken, slackIds, message });
  } else {
    const response = slack.conversations.open({ token: botToken, users: slackIds });
    const channelId = response.channel.id;
    slack.chat.postMessage({ token: botToken, channelId, message });
  }
};

const userArrayTest = [
  {
    name: 'Stephanie Racca',
    slackID: 'UB66MDV3Q',
  },
];

export const SlackDM = () => (
  <Button
    onPress={() => sendDirectMessageToUser(userArrayTest, 'Hello!')}
    title="Send Direct Message!"
    color="red"
  />
);

export const SlackButton = () => (
  <Button
    onPress={() => getUsersFromChannel('pvd')}
    title="Get and store users info"
    color="blue"
  />
);

export const SlackMessage = () => (
  <Button
    onPress={() => sendMessageToChannel('#guestbot-test', 'Hello World!')}
    title="Send slackbot message!"
    color="green"
  />
);
