import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import LeftArrowIcon from '../../icons/left-arrow.png';
import { getMojos } from '../../lib/slack';
import * as Style from './style';
import SlackUser from '../../components/slack-list-item';
import Search from '../../components/search';
import DefaultHost from '../../components/default-notify';
import { RootView } from '../../components/root-view';

export default class Employees extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    mojos: [],
    selectedMojos: [],
    searchInput: '',
  };

  async componentDidMount() {
    const mojos = await getMojos();
    this.setState({ mojos });
  }

  selectUser = (slackID, name, image) => {
    this.setState({ selectedMojos: [{ name, slackID, image }] });
  };

  removeUser = slackID => {
    console.log(slackID);
    this.setState({ selectedMojos: [] });
  };

  sendNotification = slackID => {
    console.log(slackID);
  };

  updateSearch = value => {
    this.setState({ searchInput: value });
  };

  filterNames = (employeeName, input) =>
    employeeName.toLowerCase().includes(input.toLowerCase());

  goToWelcomeScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('Welcome');
  };

  render() {
    const { mojos, searchInput } = this.state;
    const { selectedMojos } = this.state;
    const filteredMojos = mojos.filter(mojo =>
      this.filterNames(mojo.name, searchInput),
    );
    return (
      <RootView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Style.UserDisplay>
            <Style.GoToPrevPage onPress={this.goToWelcomeScreen}>
              <Image source={LeftArrowIcon} />
            </Style.GoToPrevPage>
            <Style.TitleText>Who are you here to see?</Style.TitleText>
            <Search
              selectedMojos={selectedMojos}
              removeFunction={this.removeUser}
              sendFunction={this.sendNotification}
              inputText={searchInput}
              handleInputChange={this.updateSearch}
            />
            <DefaultHost />
            <Style.MojoList>
              {filteredMojos.map(item => (
                <SlackUser
                  key={item.slackID}
                  item={item}
                  selectUser={this.selectUser}
                />
              ))}
            </Style.MojoList>
          </Style.UserDisplay>
        </TouchableWithoutFeedback>
      </RootView>
    );
  }
}
