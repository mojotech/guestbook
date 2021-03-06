import React from 'react';
import { Button, AsyncStorage } from 'react-native';
import Config from 'react-native-config';
import slack from 'slack';
import { addVisitor, storeUsersInfo } from '../store/asyncStorage';

const botToken = Config.SLACK_BOT_TOKEN;

const hostsMentions = hosts =>
  hosts.map(user => `<@${user.slackID}>`).join(', ');

export const sendMessageToChannel = async (channel, guest, hosts) => {
  const text = `A guest has just arrived! ${hostsMentions(
    hosts,
  )} please go meet ${guest} at the front door.`;
  const response = await slack.chat.postMessage({
    token: botToken,
    channel,
    text,
  });
  const messageState = response.ok
    ? { success: true }
    : { success: false, errorMessage: response.error };
  addVisitor(guest, hosts, messageState);
};

const getUsersInfo = async userIds => {
  try {
    const usersInfo = await Promise.all(
      userIds.map(async userId =>
        slack.users.info({
          token: botToken,
          user: userId,
        }),
      ),
    );
    return usersInfo || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getUsersFromChannel = async channelName => {
  try {
    const response = await slack.channels.list({ token: botToken });
    const { channels } = response;
    const channel = channels.find(c => c.name === channelName);
    if (channel) {
      const channelInfo = await slack.channels.info({
        token: botToken,
        channel: channel.id,
      });
      const { members } = channelInfo.channel;
      return await getUsersInfo(members);
    }
    console.log('Channel does not exist. Please try a valid channel name.');
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getMojos = async () => {
  try {
    let mojos = await AsyncStorage.getItem('MOJOS');
    if (!mojos) {
      const usersInfo = await getUsersFromChannel('pvd');
      storeUsersInfo(usersInfo);
      mojos = await AsyncStorage.getItem('MOJOS');
    }
    return JSON.parse(mojos) || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const connectWebSocket = url =>
  new Promise((resolve, reject) => {
    /* eslint-disable-next-line */
    const server = new WebSocket(url);
    server.onopen = () => {
      resolve(server);
    };
    server.onerror = err => {
      reject(err);
    };
  });

export const listenToMentions = async () => {
  const { ok, url } = await slack.rtm.connect({ token: botToken });
  if (!ok) {
    throw new Error('Failed to connect to slack');
  }
  const server = await connectWebSocket(url);

  server.onmessage = console.log;
  server.onerror = err => {
    throw new Error(err);
  };
};

const sendDirectMessageToUser = (userArray, message) => {
  const slackIds = userArray.map(user => user.slackID);
  if (userArray.length === 1) {
    slack.chat.postMessage({ token: botToken, slackIds, message });
  } else {
    const response = slack.conversations.open({
      token: botToken,
      users: slackIds,
    });
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

export default SlackButton;
