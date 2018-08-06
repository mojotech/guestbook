import React from 'react';
import { Button } from 'react-native';
import Config from 'react-native-config';
import slack from 'slack';
import { initMojoNames, displayMojos, addVisitor } from '../store/asyncStorage';

const botToken = Config.SLACK_BOT_TOKEN;

const hostsMentions = (hosts) => hosts.map((user) => `<@${user.slackID}>`).join(', ');

const sendMessageToChannel = async (channel, guest, hosts) => {
  const text = `A guest has just arrived! ${hostsMentions(hosts)} please go meet ${guest} at the front door.`;
  const response = await slack.chat.postMessage({ token: botToken, channel, text });
  const messageState = response.ok ? { success: true } : { success: false, errorMessage: response.error };
  addVisitor(guest, hosts, messageState);
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


const connectWebSocket = url => (
  new Promise(((resolve, reject) => {
    /* eslint-disable-next-line */
    const server = new WebSocket(url);
    server.onopen = () => {
      resolve(server);
    };
    server.onerror = (err) => {
      reject(err);
    };
  }))
);

export const listenToMentions = async () => {
  const { ok, url } = await slack.rtm.connect({ token: botToken });
  if (!ok) {
    throw new Error('Failed to connect to slack');
  }
  const server = await connectWebSocket(url);

  server.onmessage = console.log;
  server.onerror = (err) => {
    throw new Error(err);
  };
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
    onPress={() => sendMessageToChannel('#guestbot-test', 'Guest Name', [{ name: 'Jen Kaplan', slackID: 'UB0P5J1PZ' }])}
    title="Send slackbot message!"
    color="green"
  />
);

export default SlackMessage;
