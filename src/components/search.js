import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import MagnifyingGlassIcon from '../icons/search.png';
import WhiteArrow from '../icons/white-arrow.png';
import { SelectedUsers } from './selected-user';
import { isPresent } from '../lib/util';
import * as Style from '../containers/Employees/style';

const Search = ({
  selectedMojos,
  onRemove,
  onSend,
  inputText,
  handleInputChange,
}) => (
  <View>
    {isPresent(selectedMojos) ? (
      <Style.Search>
        <Style.SearchContainer>
          <SelectedUsers selectedMojos={selectedMojos} onRemove={onRemove} />
          <Style.SearchBar
            placeholder={selectedMojos.length >= 2 ? '' : 'Search'}
            autoCapitalize="words"
            autoCorrect={false}
            value={inputText}
            onChangeText={handleInputChange}
          />
        </Style.SearchContainer>
        <TouchableOpacity onPress={() => onSend(selectedMojos)}>
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
          value={inputText}
          onChangeText={handleInputChange}
        />
      </Style.Search>
    )}
    <Style.AddPeople>
      {isPresent(selectedMojos) ? 'You can add 1 more person' : ''}
    </Style.AddPeople>
  </View>
);

Search.propTypes = {
  selectedMojos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  inputText: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

Search.defaultProps = {
  inputText: '',
};

export default Search;
