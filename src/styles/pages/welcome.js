import styled from 'styled-components';
import {
  fontSizes, colors, weights, spacing, fonts,
} from '../../lib/theme';

export const Heading = styled.Text`
  font-size: ${fontSizes.xxlarge};
  font-weight: ${weights.bold};
  color: ${colors.black};
  text-align: left;
  margin-top: ${spacing.xl};
  margin-left: ${spacing.l};
  fontFamily: ${fonts.AltisBold};
`;

export const SubHeading = styled.Text`
  font-size: ${fontSizes.large};
  font-weight: ${weights.regular};
  color: ${colors.grey};
  text-align: left;
  margin-top: ${spacing.m};
  margin-left: ${spacing.l};
  fontFamily: ${fonts.GTAmericaReg};
`;

export const NameInputText = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  lineHeight: 25px;
  padding-top: 5px;
  text-align: left;
  padding-left: 15px;
  fontFamily: ${fonts.GTAmericaReg};
`;

export const Background = styled.Image`
  resizeMode: contain;
  alignSelf: flex-end;
`;
export const NameInputView = styled.View`
  margin-top: ${spacing.xl};
  margin-left: ${spacing.l};
  margin-right: ${spacing.l};
  flex: 1;
  flexDirection: row;
`;
export const TextInputWrapper = styled.View`
  backgroundColor: ${colors.lightGrey};
  width: 592px;
  height: 80px;
  justifyContent: center;
`;

export const NextButton = styled.TouchableOpacity`
  backgroundColor: ${colors.green};
  width: 240px;
  height: 80px;
  justifyContent: center;
  alignItems: center;
  flexDirection: row;
`;

export const ButtonText = styled.Text`
  fontFamily: ${fonts.GTAmericaReg};
  color: ${colors.white};
  font-size: ${fontSizes.small};
  margin-right: 5px;
`;