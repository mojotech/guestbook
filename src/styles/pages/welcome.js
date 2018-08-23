import styled from 'styled-components';
import { fontSizes, fonts, colors, weights, spacing } from '../../lib/theme';

export const Heading = styled.Text`
  font-size: ${fontSizes.xxlarge};
  font-weight: ${weights.bold};
  color: ${colors.black};
  text-align: left;
  margin-top: 104px;
  margin-left: ${spacing.xxxl};
  font-family: ${fonts.AltisBold};
`;

export const SubHeading = styled.Text`
  font-size: ${fontSizes.large};
  font-weight: ${weights.regular};
  color: ${colors.grey};
  text-align: left;
  margin-top: ${spacing.l};
  margin-left: ${spacing.xxxl};
  font-family: ${fonts.GTAmericaReg};
`;

export const NameInputText = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  border-bottom-end-radius: 20px;
  height: 60px;
  text-align: left;
  padding-left: 26px;
  font-family: ${fonts.GTAmericaReg};
`;

export const NameInputLabel = styled.Text`
  color: ${colors.grey};
  font-size: ${fontSizes.xsmall};
  padding-left: 26px;
  padding-top: 11px;
  font-family: ${fonts.GTAmericaReg};
`;

export const Background = styled.Image`
  resize-mode: stretch;
  width: 100%;
`;

export const NameInputContainer = styled.View`
  margin-top: 104px;
  margin-left: ${spacing.xxxl};
  margin-right: ${spacing.xxxl};
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
  margin-right: 10px;
`;

export const WhiteArrowIcon = styled.Image`
  height: 10px;
  width: 12px;
`;
