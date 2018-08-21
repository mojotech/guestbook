import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import * as Style from '../containers/Employees/style';
import RemoveIcon from '../icons/remove-icon.png';

export const SelectedUsers = ({ selectedMojos, removeFunction }) =>
  selectedMojos.map(mojo => (
    <Style.SelectedUser key={mojo.slackID}>
      <Style.SelectedUserImage source={{ uri: mojo.image }} />
      <Style.SelectedUserName numberOfLines={1}>
        {mojo.name}
      </Style.SelectedUserName>
      <TouchableOpacity onPress={() => removeFunction(mojo.slackID)}>
        <Style.SelectedUserRemoveIcon source={RemoveIcon} />
      </TouchableOpacity>
    </Style.SelectedUser>
  ));

SelectedUsers.propTypes = {
  selectedMojos: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFunction: PropTypes.func.isRequired,
};

export default SelectedUsers;
