import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import RightArrowGreyIcon from '../icons/right-arrow-grey.png';
import * as Style from '../containers/Employees/style';

export const SlackListItem = ({ item, selectUser }) => (
  <View key={item.slackID}>
    <TouchableOpacity
      onPress={() => selectUser(item.slackID, item.name, item.image)}
    >
      <Style.MojoRow>
        <Style.MojoImageCol>
          <Style.MojoImage source={{ uri: item.image }} />
        </Style.MojoImageCol>
        <Style.MojoNameCol>
          <Style.MojoName>{item.name}</Style.MojoName>
        </Style.MojoNameCol>
        <Style.MojoSendIconCol>
          <Style.MojoSendIcon source={RightArrowGreyIcon} />
        </Style.MojoSendIconCol>
      </Style.MojoRow>
    </TouchableOpacity>
    <Style.MojoDivider />
  </View>
);

SlackListItem.propTypes = {
  item: PropTypes.shape({
    altImage: PropTypes.string,
    image: PropTypes.string,
    lastRetrieved: PropTypes.number,
    name: PropTypes.string,
    slackID: PropTypes.string,
  }).isRequired,
  selectUser: PropTypes.func.isRequired,
};

export default SlackListItem;
