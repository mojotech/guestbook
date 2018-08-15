import styled from 'styled-components';
import { fontSizes, colors, weights, spacing, fonts } from '../../lib/theme';

export const Heading = styled.Text`
  font-size: ${fontSizes.xxlarge};
  font-weight: ${weights.bold};
  color: ${colors.black};
  text-align: left;
  margin-top: ${spacing.xl};
  margin-left: ${spacing.l};
  font-family: ${fonts.AltisBold};
`;

export const SubHeading = styled.Text`
  font-size: ${fontSizes.large};
  font-weight: ${weights.regular};
  color: ${colors.grey};
  text-align: left;
  margin-top: ${spacing.m};
  margin-left: ${spacing.l};
  font-family: ${fonts.GTAmericaReg};
`;

export const NameInputText = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  line-height: 25px;
  padding-top: 5px;
  text-align: left;
  padding-left: 15px;
  font-family: ${fonts.GTAmericaReg};
`;

export const Background = styled.Image`
  resize-mode: contain;
  align-self: flex-end;
`;

export const NameInputView = styled.View`
  margin-top: ${spacing.xl};
  margin-left: ${spacing.l};
  margin-right: ${spacing.l};
  flex: 1;
  flex-direction: row;
`;
export const TextInputWrapper = styled.View`
  background-color: ${colors.lightGrey};
  width: 592px;
  height: 80px;
  justify-content: center;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: ${colors.green};
  width: 240px;
  height: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.GTAmericaReg};
  color: ${colors.white};
  font-size: ${fontSizes.small};
  margin-right: 5px;
`;
