import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import * as Style from '../containers/Employees/style';
import RemoveIcon from '../icons/remove-icon.png';

export const SelectedUsers = ({ selectedMojos, removeFunction }) => (
  <Style.SelectedUser>
    <Style.SelectedUserImage source={{ uri: selectedMojos[0].image }} />
    <Style.SelectedUserName numberOfLines={1}>
      {selectedMojos[0].name}
    </Style.SelectedUserName>
    <TouchableOpacity onPress={() => removeFunction(selectedMojos[0].slackID)}>
      <Style.SelectedUserRemoveIcon source={RemoveIcon} />
    </TouchableOpacity>
  </Style.SelectedUser>
);

SelectedUsers.propTypes = {
  selectedMojos: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFunction: PropTypes.func.isRequired,
};

export default SelectedUsers;
