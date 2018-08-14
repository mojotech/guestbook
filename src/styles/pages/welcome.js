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

export const NameInput = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  border-bottom-end-radius: 20px;
  line-height: 60px;
  margin-top: ${spacing.xxxl};
  text-align: left;
  padding-left: 15px;
  fontfamily: ${fonts.GTAmericaReg};
`;

export const Background = styled.Image`
  resize-mode: stretch;
  width: 100%;
`;

export const NameInputView = styled.View`
  margin-top: 104px;
  margin-left: ${spacing.xxxl};
  margin-right: ${spacing.xxxl};
`;
