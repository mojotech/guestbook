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

export const GoToPrevPage = styled.Image`
  margin-bottom: ${spacing.m};
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
  margin-bottom: ${spacing.xl};
`;

export const SearchBar = styled.TextInput`
  font-size: ${fontSizes.medium};
  font-family: ${fonts.GTAmericaReg};
  color: ${colors.grey};
  height: 80px;
`;

export const SearchIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-left: ${spacing.l};
  margin-right: ${spacing.s};
`;
