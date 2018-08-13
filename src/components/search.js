import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import MagnifyingGlassIcon from '../icons/search.png';
import WhiteArrow from '../icons/white-arrow.png';
import { SelectedUsers } from './selected-user';
import { isPresent } from '../lib/util';
import * as Style from '../containers/Employees/style';

export const Search = ({ selectedMojos, removeFunction, sendFunction }) => (
  <View>
    {isPresent(selectedMojos) ? (
      <Style.Search>
        <Style.SearchContainer>
          <SelectedUsers
            selectedMojos={selectedMojos}
            removeFunction={removeFunction}
          />
          <Style.SearchBar
            placeholder=""
            autoCapitalize="words"
            autoCorrect={false}
          />
        </Style.SearchContainer>
        <TouchableOpacity
          onPress={() => sendFunction(selectedMojos[0].slackID)}
        >
          <Style.SendNotification>
            <Style.SendText>Send Notification</Style.SendText>
            <Style.WhiteArrow source={WhiteArrow} />
          </Style.SendNotification>
        </TouchableOpacity>
      </Style.Search>
    ) : (
      <Style.Search>
        <Style.SearchIcon source={MagnifyingGlassIcon} />
        <Style.SearchBar
          placeholder="Search"
          autoCapitalize="words"
          autoCorrect={false}
        />
      </Style.Search>
    )}
    <Style.AddPeople>
      {isPresent(selectedMojos) ? 'You can add 2 more people' : ''}
    </Style.AddPeople>
  </View>
);

Search.propTypes = {
  selectedMojos: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFunction: PropTypes.func.isRequired,
  sendFunction: PropTypes.func.isRequired,
};

export default Search;
