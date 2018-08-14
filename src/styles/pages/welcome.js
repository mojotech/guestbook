import styled from 'styled-components';
import { fontSizes, colors, weights, spacing, fonts } from '../../lib/theme';

export const Heading = styled.Text`
  font-size: ${fontSizes.xxlarge};
  font-weight: ${weights.bold};
  color: ${colors.black};
  text-align: left;
  margin-top: ${spacing.xxl};
  margin-left: ${spacing.l};
  fontfamily: ${fonts.AltisBold};
`;

export const SubHeading = styled.Text`
  font-size: ${fontSizes.large};
  font-weight: ${weights.regular};
  color: ${colors.grey};
  text-align: left;
  margin-top: ${spacing.m};
  margin-left: ${spacing.l};
  fontfamily: ${fonts.GTAmericaReg};
`;

export const NameInput = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  border-bottom-end-radius: 20px;
  line-height: 60px;
  margin-top: ${spacing.xl};
  text-align: left;
  padding-left: 15px;
  fontfamily: ${fonts.GTAmericaReg};
`;

export const Background = styled.Image`
  resize-mode: contain;
  align-self: flex-end;
`;

export const InputWrapper = styled.View`
  border-bottom-color: ${colors.green};
  border-bottom-width: 2px;
  margin-left: ${spacing.l};
  margin-right: ${spacing.l};
`;
