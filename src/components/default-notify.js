import React from 'react';
import RightArrowGreenIcon from '../icons/right-arrow-green.png';
import * as Style from '../containers/Employees/style';

export const DefaultNotify = () => (
  <Style.DefaultNotifyRow>
    <Style.DefaultNotifyText>
      Don&apos;t know who to notify?
    </Style.DefaultNotifyText>
    <Style.RightArrowGreen source={RightArrowGreenIcon} />
  </Style.DefaultNotifyRow>
);

export default DefaultNotify;
