import React from 'react';
import { Button, View } from 'react-native';
import Config from 'react-native-config';
import slack from 'slack';
import { initMojoNames, displayMojos } from '../store/asyncStorage';

const botToken = Config.SLACK_BOT_TOKEN;
const workspaceToken = Config.SLACK_WORKSPACE_TOKEN;
const pvdUserGroup = 'SBVFTRSG6';

const sendMessageToChannel = (channel, text) => {
  slack.chat.postMessage({ token: botToken, channel, text });
};

const storeUsersInfo = (usersInfo) => {
  const mojoList = [];
  usersInfo.forEach((userInfo) => {
    mojoList.push({
      name: userInfo.user.real_name,
      image: userInfo.user.profile.image_48,
      altImage: '',
      slackID: userInfo.user.id,
      lastRetrieved: Date.now(),
    });
  });
  initMojoNames(mojoList);
  displayMojos();
};

const getUsersInfo = (usersList) => {
  try {
    const usersInfo = usersList.map(async user => slack.users.info({ token: botToken, user }));
    Promise.all(usersInfo).then(result => storeUsersInfo(result));
  } catch (error) {
    console.log(error);
  }
};

const getUsersFromUserGroup = async (userGroup) => {
  try {
    const usersList = await slack.usergroups.users.list({
      token: workspaceToken,
      usergroup: userGroup,
    });
    getUsersInfo(usersList.users);
  } catch (error) {
    console.log(error);
  }
};

export const SlackButton = () => (
  <View>
    <Button
      onPress={() => sendMessageToChannel('#guestbot-test', 'Hello World!')}
      title="Send slackbot message!"
      color="green"
    />
    <Button
      onPress={() => getUsersFromUserGroup(pvdUserGroup)}
      title="Get and store users info"
      color="blue"
    />
  </View>
);

export default SlackButton;
