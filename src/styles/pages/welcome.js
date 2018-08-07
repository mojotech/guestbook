import styled from 'styled-components';
import {
  fontSizes, colors, weights, spacing, fonts,
} from '../../lib/theme';

export const SignInHere = styled.Text`
  font-size: ${fontSizes.xxlarge};
  font-weight: ${weights.bold};
  color: ${colors.black};
  text-align: left;
  margin-top: ${spacing.xxl};
  margin-left: ${spacing.l};
  margin-top: 180px;
  margin-left: ${spacing.s};
  fontFamily: ${fonts.AltisBold};
`;

export const WelcomeSignIn = styled.Text`
  font-size: ${fontSizes.large};
  font-weight: ${weights.regular};
  color: ${colors.grey};
  text-align: left;
  margin-top: ${spacing.m};
  margin-left: ${spacing.l};
  fontFamily: ${fonts.GTAmericaReg};
`;

export const NameInput = styled.TextInput`
  color: ${colors.grey};
  font-size: ${fontSizes.medium};
  font-weight: ${weights.regular};
  borderBottomEndRadius: 20px;
  borderBottomWidth: 2px;
  lineHeight: 60px;
  borderBottomColor: ${colors.green};
  margin-top: ${spacing.xl};
  margin-left: ${spacing.l};
  margin-right: ${spacing.l};
  text-align: left;
  fontFamily: ${fonts.GTAmericaReg};
`;

export const Background = styled.Image`
  flex: 1;
  width: 150%;
  height: 150%;
  resizeMode: cover;
`;
