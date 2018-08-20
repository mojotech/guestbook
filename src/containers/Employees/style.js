import styled from 'styled-components';
import { fontSizes, colors, fonts, spacing } from '../../lib/theme';

export const UserDisplay = styled.View`
  padding-horizontal: ${spacing.xxxl};
  margin-top: ${spacing.xxl};
`;

export const TitleText = styled.Text`
  font-size: ${fontSizes.large};
  color: ${colors.black};
  font-family: ${fonts.AltisBold};
  margin-bottom: ${spacing.m};
`;

export const GoToPrevPage = styled.TouchableOpacity`
  margin-bottom: ${spacing.m};
  width: 12px;
  height: 18px;
`;

export const DefaultNotifyRow = styled.View`
  flex-direction: row;
`;

export const DefaultNotifyText = styled.Text`
  font-size: ${fontSizes.small};
  color: ${colors.grey};
  font-family: ${fonts.GTAmericaReg};
`;

export const RightArrowGreen = styled.Image`
  margin-left: ${spacing.s};
  margin-top: ${spacing.xs};
`;

export const MojoList = styled.ScrollView`
  margin-top: ${spacing.xl};
`;

export const MojoNameCol = styled.View`
  flex-direction: column;
  width: 89%;
  justify-content: flex-start;
`;

export const MojoName = styled.Text`
  font-size: ${fontSizes.small};
  font-family: ${fonts.GTAmericaReg};
  color: ${colors.grey};
  margin-top: ${spacing.s};
  margin-left: ${spacing.s};
`;

export const MojoImageCol = styled.View`
  flex-direction: column;
  width: 6%;
`;

export const MojoImage = styled.Image`
  margin-right: ${spacing.m};
  width: 48px;
  height: 48px;
  border-radius: 24;
`;

export const MojoSendIconCol = styled.View`
  flex-direction: column;
  width: 5%;
`;

export const MojoRow = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const MojoDivider = styled.View`
  height: 1px;
  background-color: ${colors.lightGrey};
  margin-bottom: 25px;
`;

export const MojoSendIcon = styled.Image`
  margin-top: ${spacing.s};
`;

export const Search = styled.View`
  height: 80px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.extraLightGrey};
  margin-bottom: 8px;
`;

export const SearchBar = styled.TextInput`
  font-size: ${fontSizes.medium};
  font-family: ${fonts.GTAmericaReg};
  color: ${colors.grey};
  height: 80px;
  margin-left: ${spacing.s};
`;

export const SendNotification = styled.View`
  background-color: ${colors.green};
  height: 80px;
  flex-direction: row;
  justify-content: center;
  padding-horizontal: 32px;
  padding-vertical: 26px;
  flex: -1;
`;

export const SendText = styled.Text`
  font-size: ${fontSizes.small};
  font-family: ${fonts.GTAmericaReg};
  color: ${colors.white};
  margin-left: 32px;
`;

export const WhiteArrow = styled.Image`
  margin-left: 18px;
  height: 10px;
  width: 12px;
  margin-top: 7px;
`;

export const SearchIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: ${spacing.l};
  margin-right: ${spacing.s};
`;

export const SearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const SelectedUser = styled.View`
  height: 56px;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  background-color: ${colors.white};
  margin-left: 12px;
  padding: 12px;
`;

export const SelectedUserImage = styled.Image`
  height: 24px;
  width: 24px;
  border-radius: 12px;
`;

export const SelectedUserName = styled.Text`
  font-size: ${fontSizes.xsmall};
  font-family: ${fonts.GTAmericaReg};
  color: ${colors.grey};
  margin-left: 10px;
`;

export const SelectedUserRemoveIcon = styled.Image`
  height: 16px;
  width: 16px;
  margin-left: ${spacing.s};
`;

export const AddPeople = styled.Text`
  font-size: ${fontSizes.tiny};
  font-family: ${fonts.GTAmericaReg};
  color: ${colors.grey};
  margin-bottom: ${spacing.s};
`;
