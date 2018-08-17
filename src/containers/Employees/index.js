import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import LeftArrowIcon from '../../icons/left-arrow.png';
import { getMojos } from '../../lib/slack';
import * as Style from './style';
import SlackUser from '../../components/slack-list-item';
import SearchBar from '../../components/search';
import DefaultHost from '../../components/default-notify';
import { RootView } from '../../components/root-view';

export default class Employees extends React.Component {
  state = {
    mojos: [],
  };

  async componentDidMount() {
    const mojos = await getMojos();
    this.setState({ mojos });
  }

  sendMessage = slackID => {
    console.log(slackID);
  };

  render() {
    const { mojos } = this.state;
    return (
      <RootView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Style.UserDisplay>
            <Style.GoToPrevPage source={LeftArrowIcon} />
            <Style.TitleText>Who are you here to see?</Style.TitleText>
            <SearchBar />
            <DefaultHost />
            <Style.MojoList>
              {mojos.map(item => (
                <SlackUser
                  key={item.slackID}
                  item={item}
                  sendMessage={this.sendMessage}
                />
              ))}
            </Style.MojoList>
          </Style.UserDisplay>
        </TouchableWithoutFeedback>
      </RootView>
    );
  }
}
